Feature: Have a dark and light UI app theme

    The application should propose a dark and light UI colors themes and we should be able to switch between both.

    Scenario: The current theme is dark
        Given Bob is using the app with "dark" theme
        And Bob goes to the settings
        When Bob click on the button to switch between themes
        Then The app is using the "light" theme

    Scenario: The current theme is light
        Given Bob is using the app with "light" theme
        And Bob goes to the settings
        When Bob click on the button to switch between themes
        Then The app is using the "dark" theme