package models

import "time"

type Veto struct {
	ID          int64     `json:"id"`
	CreatedAt   time.Time `json:"created_at"`
	BestOf      BestOf    `json:"best_of"`
	TeamOneName string    `json:"team_one_name"`
	TeamTwoName string    `json:"team_two_name"`
	Votes       []Vote    `json:"votes"`
}

type BestOf int
