package handlers

import (
	"backend/database"
	"backend/models"
	"backend/utils"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func GetVetos(c *gin.Context) {
	paginate := c.Query("paginate")
	lastVetoID := c.Query("lastVetoID")
	sql := "SELECT DISTINCT V.id, V.created_at, V.team_one_name, V.team_two_name, V.best_of FROM vetos V"
	if utils.IsStringValidInt(paginate) && utils.IsStringValidInt(lastVetoID) {
		sql += " WHERE V.id > " + lastVetoID + " ORDER BY V.created_at LIMIT " + paginate
	} else {
		sql += " ORDER BY V.created_at"
	}

	rows, err := database.DB.Query(sql)
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Unable to query vetos",
		})
		return
	}

	defer rows.Close()

	vetos := make([]models.Veto, 0)
	for rows.Next() {
		var ID int64
		var createdAt time.Time
		var teamOneName string
		var teamTwoName string
		var bestOf models.BestOf
		err := rows.Scan(&ID, &createdAt, &teamOneName, &teamTwoName, &bestOf)
		if err != nil {
			log.Println(err)
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Unable to retrieve vetos data",
			})
			return
		}

		veto := models.Veto{
			ID:          ID,
			CreatedAt:   createdAt,
			TeamOneName: teamOneName,
			TeamTwoName: teamTwoName,
			BestOf:      bestOf,
		}

		sql := fmt.Sprintf("SELECT V.id, V.team_number, V.type, V.map_name FROM votes V WHERE V.veto_id = %d", veto.ID)
		votesRows, err := database.DB.Query(sql)
		if err != nil {
			log.Println(err)
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Unable to votes data",
			})
			return
		}
		defer votesRows.Close()

		var votes []models.Vote
		for votesRows.Next() {
			var ID int64
			var teamNumber models.TeamNumber
			var voteType models.VoteType
			var mapName string
			err := votesRows.Scan(&ID, &teamNumber, &voteType, &mapName)
			if err != nil {
				log.Println(err)
				c.JSON(http.StatusInternalServerError, gin.H{
					"error": "Unable to retrieve votes data",
				})
				return
			}

			vote := models.Vote{
				ID:         ID,
				TeamNumber: teamNumber,
				Type:       voteType,
				MapName:    mapName,
			}

			votes = append(votes, vote)
		}

		veto.Votes = votes
		vetos = append(vetos, veto)
	}

	c.JSON(http.StatusOK, vetos)
}
