Feature: Verify file read function in plawright

    @FileRead
    Scenario: Verify file read function in plawright
        Given I launch the chrome broswer for test 
        When I navigate to testautomationpractice website for test
        Then I enter the user name and passwork by fileread feature  
    