package handlers

import (
	"backend/database"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Status(c *gin.Context) {
	if err := database.DB.Ping(); err != nil {
		c.Status(http.StatusInternalServerError)
		return
	}

	c.Status(http.StatusOK)
}
