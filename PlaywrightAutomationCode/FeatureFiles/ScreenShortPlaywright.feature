
Feature: Verfiy screenshort function in playwright

@Athulscreenshort
Scenario: Verfiy screenshort function in playwright
    Given I launch the chrome broswer for test
    When I navigate to testautomationpractice website for test
    Then I took element level screenshort using playwright
    #Then I took screen length screenshort using playwright