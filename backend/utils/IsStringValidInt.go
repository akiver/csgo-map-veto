package utils

import (
	"strconv"
)

func IsStringValidInt(value string) bool {
	if _, err := strconv.Atoi(value); err == nil {
		return true
	}

	return false
}
