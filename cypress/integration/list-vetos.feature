Feature: List all previous vetos

    We should be able to see all previous vetos.

    Scenario: The vetos have been successfully retrieved
        Given Bob is on the home page
        And The vetos request return a status 200
        When Bob navigate to the vetos listing
        Then Bob sees the vetos

    Scenario: An error occurred while fetching the vetos
        Given Bob is on the home page
        And The vetos request return a status 500
        When Bob navigate to the vetos listing
        Then Bob sees an error message