package database

import (
	"database/sql"
)

var DB *sql.DB

func Initialize(databaseName string, username string, password string) {
	var err error
	DB, err = sql.Open("mysql", username+":"+password+"@/"+databaseName+"?charset=utf8mb4&parseTime=True&loc=Local")
	if err != nil {
		panic(err)
	}

	if err = DB.Ping(); err != nil {
		panic(err)
	}

	_, err = DB.Exec(`CREATE TABLE IF NOT EXISTS vetos (
        id BIGINT NOT NULL AUTO_INCREMENT,
        team_one_name VARCHAR(255) NOT NULL,
        team_two_name VARCHAR(255) NOT NULL,
        best_of INT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
	)`)

	if err != nil {
		panic(err)
	}

	_, err = DB.Exec(`CREATE TABLE IF NOT EXISTS votes (
        id BIGINT NOT NULL AUTO_INCREMENT,
        type VARCHAR(255) NOT NULL,
        map_name VARCHAR(255) NOT NULL,
        veto_id BIGINT NOT NULL,
        team_number TINYINT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (veto_id) REFERENCES vetos(id) ON DELETE CASCADE
	)`)

	if err != nil {
		panic(err)
	}
}
