Feature: Validate playwright common methods using POM
    @LoginPO
    Scenario: Verify common methods using POM
        When I launch the test automation website using POM
        Then I enter the name using POM
        Then I enter the email using POM
        # Then I clear the name using POM
        Then I update the email using POM
        Then I reload the webpage using POM