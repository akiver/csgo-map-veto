package middlewares

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func JSON(disableCORS bool) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Content-Type", "application/json")
		if disableCORS {
			c.Header("Access-Control-Allow-Origin", "*")
			if c.Request.Method == "OPTIONS" {
				c.Header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS")
				c.Status(http.StatusOK)
			}
		}

		c.Next()
	}
}
