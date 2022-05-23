package handlers

import (
	"backend/database"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type DeleteVetoRequestParameters struct {
	VetoID uint64 `json:"veto_id"`
}

func (params DeleteVetoRequestParameters) Validate() map[string]string {
	errors := make(map[string]string)
	if params.VetoID == 0 {
		errors["veto_id"] = "Veto ID is required"
	}

	return errors
}

func DeleteVeto(c *gin.Context) {
	id, err := strconv.ParseUint(c.Params.ByName("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"error": "Invalid veto ID",
		})
		return
	}

	params := DeleteVetoRequestParameters{
		VetoID: id,
	}

	errors := params.Validate()

	if len(errors) > 0 {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"errors": errors,
		})
		return
	}

	statement, err := database.DB.Prepare("DELETE FROM vetos WHERE id = ?")
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error while preparing veto deletion",
		})
		return
	}

	res, err := statement.Exec(params.VetoID)
	if err != nil {
		log.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error while deleting veto",
		})
		return
	}

	rowsAffectedCount, _ := res.RowsAffected()

	if rowsAffectedCount == 1 {
		c.Status(http.StatusOK)
	} else {
		c.Status(http.StatusNoContent)
	}
}
