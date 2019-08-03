package models

type Vote struct {
	ID         int64      `json:"id"`
	TeamNumber TeamNumber `json:"team_number"`
	Type       VoteType   `json:"type"`
	MapName    string     `json:"map_name"`
	VetoID     int64      `json:"-"`
}

const (
	Ban    VoteType = "ban"
	Pick   VoteType = "pick"
	Random VoteType = "random"
)

type VoteType string

const (
	TeamOne TeamNumber = 1
	TeamTwo TeamNumber = 2
	Server  TeamNumber = 3
)

type TeamNumber int
