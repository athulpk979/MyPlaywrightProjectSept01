Feature: Verify the DropDown function in playwright

    @DropDown
    Scenario: I Verify the DropDown function in playwright
        Given I launch the chrome broswer for test 
        When I navigate to testautomationpractice website for test
        Then I handle single dropdown selector
        Then I handle multiple select dropdown