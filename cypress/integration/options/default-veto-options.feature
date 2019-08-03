Feature: Default vetos options

    The home page must start with default veto options.

    Scenario: The app start and land to the home page
        Given Bob is on the home page
        Then The displayed options must be correct
