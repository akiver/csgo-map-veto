package main

import (
	"backend/database"
	"backend/handlers"
	"backend/middlewares"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("Error loading .env file")
		log.Fatalln(err)
	}
	databaseName := os.Getenv("DB_NAME")
	databaseUsername := os.Getenv("DB_USERNAME")
	databasePassword := os.Getenv("DB_PASSWORD")
	isReleaseMode := os.Getenv("DEBUG") == "false"
	disableCORS := os.Getenv("DISABLE_CORS") == "true"
	if isReleaseMode {
		gin.SetMode(gin.ReleaseMode)
	}

	if err := database.Initialize(databaseName, databaseUsername, databasePassword); err != nil {
		log.Println("Error initializing database:")
		log.Fatalln(err)
	}

	defer database.DB.Close()

	router := gin.New()
	router.Use(middlewares.JSON(disableCORS))

	api := router.Group("/api")
	{
		api.GET("/status", handlers.Status)
		api.GET("/vetos", handlers.GetVetos)
		api.POST("/vetos", handlers.PostVeto)
		api.DELETE("/vetos/:id", handlers.DeleteVeto)
	}

	if err := router.Run(); err != nil {
		log.Println("Error starting router")
		log.Fatalln(err)
	}
}
