package main

import (
	"backend/database"
	"backend/handlers"
	"backend/middlewares"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
	"log"
	"os"
)

func main() {
	var err = godotenv.Load()
	if err != nil {
		log.Println(err)
		log.Fatal("Error loading .env file")
	}

	databaseName := os.Getenv("DB_NAME")
	databaseUsername := os.Getenv("DB_USERNAME")
	databasePassword := os.Getenv("DB_PASSWORD")
	isReleaseMode := os.Getenv("DEBUG") == "false"
	disableCORS := os.Getenv("DISABLE_CORS") == "true"
	if isReleaseMode {
		gin.SetMode(gin.ReleaseMode)
	}

	database.Initialize(databaseName, databaseUsername, databasePassword)
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

	err = router.Run()
	if err != nil {
		log.Println(err)
		log.Fatal("Error starting routes")
	}
}
