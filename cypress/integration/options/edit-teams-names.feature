Feature: Edit teams names

    We should be able to change the teams name before starting a veto.

    Scenario: Editing the team 1 name
        Given Bob is on the home page
        When Bob changes the team 1 name for "New team 1"
        Then "New team 1" is used during the veto

    Scenario: Editing team 2 name
        Given Bob is on the home page
        When Bob changes the team 2 name for "New team 2"
        Then "New team 2" is used during the veto

    Scenario: Missing team 1 name
        Given Bob is on the home page
        When Bob clears the input text of the team 1
        And Bob click on the start veto button
        Then Bob sees a 'You have to specify teams name.' error

    Scenario: Missing team 2 name
        Given Bob is on the home page
        When Bob clears the input text of the team 2
        And Bob click on the start veto button
        Then Bob sees a 'You have to specify teams name.' error