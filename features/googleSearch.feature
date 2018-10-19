Feature: Google Search
@ignore
Scenario: Web Search using Google
    Given I am on the Google Website
    When I search for "Edgewords"
    Then "Edgewords" appears in list

