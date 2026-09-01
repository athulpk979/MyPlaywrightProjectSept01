Feature: Validate playwright common methods
    @sanity
    Scenario: Verify common methods via playwright in test automation practice website
        Given I launch the chrome broswer
        When I launch the test automation website
        Then I enter the name
        Then I enter the email
        # Then I clear the name
        Then I update the email
        Then I reload the webpage
