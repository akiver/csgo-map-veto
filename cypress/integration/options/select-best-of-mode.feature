Feature: Select the best of mode from the veto options

    We should be able to select the BestOf mode depending of the current BestOf which will be used during the veto.

    Scenario: The selected BestOf mode changed
        Given Bob is on the home page
        And The current BestOf is "BO 1"
        When Bob click on the input to select the BestOf mode
        And Bob click on the mode "All Random"
        Then The "All Random" mode must be selected

    Scenario: The current BestOf is BO1
        Given Bob is on the home page
        And The current BestOf is "BO 1"
        When Bob click on the input to select the BestOf mode
        Then Bob should see all modes available for the BestOf "BO 1"

    Scenario: The current BestOf is BO2
        Given Bob is on the home page
        And The current BestOf is "BO 2"
        When Bob click on the input to select the BestOf mode
        Then Bob should see all modes available for the BestOf "BO 2"

    Scenario: The current BestOf is BO3
        Given Bob is on the home page
        And The current BestOf is "BO 3"
        When Bob click on the input to select the BestOf mode
        Then Bob should see all modes available for the BestOf "BO 3"

    Scenario: The current BestOf is BO5
        Given Bob is on the home page
        And The current BestOf is "BO 5"
        When Bob click on the input to select the BestOf mode
        Then Bob should see all modes available for the BestOf "BO 5"
