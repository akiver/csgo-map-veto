Feature: Select / deselect maps to use during the veto

    We should be able to select or deselect maps that will be available during the veto from the options page by clicking on their images.

    Scenario: Selecting a map currently unselected
        Given Bob is on the home page
        And The map 'de_vertigo' is currently unselected
        When Bob click on the map 'de_vertigo'
        Then The map 'de_vertigo' is now selected

    Scenario: Selecting a map currently selected
        Given Bob is on the home page
        And The map 'de_dust2' is currently selected
        When Bob click on the map 'de_dust2'
        Then The map 'de_dust2' is now unselected

    Scenario: Not enough maps are selected to start a veto
        Given Bob is on the home page
        And BestOf is 1
        And The mode is 'Ban / Ban / Ban / Random'
        And Bob click on the map 'de_dust2'
        And Bob click on the map 'de_inferno'
        When Bob click on the start veto button
        Then Bob sees a 'wrong maps number' error