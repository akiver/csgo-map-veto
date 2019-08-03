Feature: Select the best of from the veto options

    We should be able to select the BestOf which will be used during the veto.

    Scenario: Select the BestOf 1
        Given Bob is on the home page
        When Bob select the BestOf "BO 1"
        Then The selected BO must be "BO 1"

    Scenario: Select the BestOf 2
        Given Bob is on the home page
        When Bob select the BestOf "BO 2"
        Then The selected BO must be "BO 2"

    Scenario: Select the BestOf 3
        Given Bob is on the home page
        When Bob select the BestOf "BO 3"
        Then The selected BO must be "BO 3"

    Scenario: Select the BestOf 5
        Given Bob is on the home page
        When Bob select the BestOf "BO 5"
        Then The selected BO must be "BO 5"
