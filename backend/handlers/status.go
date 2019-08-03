package handlers

import (
	"backend/database"
	"github.com/gin-gonic/gin"
	"net/http"
)

func Status(c *gin.Context) {
	if err := database.DB.Ping(); err != nil {
		c.Status(http.StatusInternalServerError)
		return
	}

	c.Status(http.StatusOK)
}