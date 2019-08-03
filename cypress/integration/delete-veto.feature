Feature: Delete a veto from the list

    We should be able to delete a veto from the database using the vetos list.

    Scenario: The veto is successfully deleted
        Given Bob is on the vetos listing page
        And The request return a status 200 for the veto 1
        When Bob click on the button to delete the veto with id 1
        Then The delete button for the veto with id 1 is disabled
        Then The veto with id 1 disappears from the UI

    Scenario: An error occured while deleting the veto
        Given Bob is on the vetos listing page
        And The request return a status 500 for the veto 1
        When Bob click on the button to delete the veto with id 1
        Then The delete button for the veto with id 1 is disabled
        Then The delete button for the veto with id 1 is enabled
