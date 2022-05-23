package handlers

import (
	"backend/database"
	"backend/models"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CreateVetoRequestParameters struct {
	TeamOneName string        `json:"team_one_name"`
	TeamTwoName string        `json:"team_two_name"`
	BestOf      models.BestOf `json:"best_of"`
	Votes       []struct {
		TeamNumber models.TeamNumber `json:"team_number"`
		Type       models.VoteType   `json:"type"`
		MapName    string            `json:"map_name"`
	} `json:"votes"`
}

func (params CreateVetoRequestParameters) Validate() map[string]string {
	errors := make(map[string]string)
	if params.BestOf == 0 {
		errors["best_of"] = "Veto BO is required"
	}
	if params.TeamOneName == "" {
		errors["team_one_name"] = "Team 1 name is required"
	}
	if params.TeamTwoName == "" {
		errors["team_two_name"] = "Team 2 name is required"
	}

	voteCount := len(params.Votes)
	if voteCount == 0 {
		errors["votes"] = "Votes are required"
	}

	if voteCount > 10 {
		errors["votes"] = "Votes can't exceed 10"
	}

	for _, values := range params.Votes {
		if values.Type == "" {
			errors["votes"] = "Vote type is required"
		} else if values.Type != models.Ban && values.Type != models.Pick && values.Type != models.Random {
			errors["votes"] = "Invalid vote type"
		}

		if values.TeamNumber != models.TeamOne && values.TeamNumber != models.TeamTwo && values.TeamNumber != models.Server {
			errors["votes"] = "Invalid team number"
		}
	}

	return errors
}

func PostVeto(c *gin.Context) {
	var params CreateVetoRequestParameters
	err := json.NewDecoder(c.Request.Body).Decode(&params)

	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"error": "Invalid parameters provided",
		})
		return
	}

	errors := params.Validate()

	if len(errors) > 0 {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"errors": errors,
		})
		return
	}

	veto := models.Veto{
		TeamOneName: params.TeamOneName,
		TeamTwoName: params.TeamTwoName,
		BestOf:      params.BestOf,
	}

	vetoStatement, err := database.DB.Prepare("INSERT INTO vetos(team_one_name, team_two_name, best_of) VALUES (?, ?, ?)")
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error while preparing veto insertion",
		})
		return
	}

	vetoRes, err := vetoStatement.Exec(params.TeamOneName, params.TeamTwoName, params.BestOf)
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error while inserting veto",
		})
		return
	}

	vetoID, err := vetoRes.LastInsertId()
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error while retrieving veto ID",
		})
		return
	}

	veto.ID = vetoID

	for _, values := range params.Votes {
		votesStatement, err := database.DB.Prepare("INSERT INTO votes(team_number, type, veto_id, map_name) VALUES (?, ?, ?, ?)")
		if err != nil {
			log.Println(err)
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Error while preparing vote insertion",
			})
			return
		}
		res, err := votesStatement.Exec(values.TeamNumber, values.Type, vetoID, values.MapName)
		if err != nil {
			log.Println(err)
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Error while inserting vote",
			})
			return
		}
		voteID, err := res.LastInsertId()
		if err != nil {
			log.Println(err)
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Error while retrieving vote ID",
			})
			return
		}

		veto.Votes = append(veto.Votes, models.Vote{
			ID:         voteID,
			Type:       values.Type,
			MapName:    values.MapName,
			TeamNumber: values.TeamNumber,
		})
	}

	c.JSON(http.StatusCreated, veto)
}
