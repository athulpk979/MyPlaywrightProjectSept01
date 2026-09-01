Feature: write register page logic and take screenshot
    @lambdatest
    Scenario: open ecom web page and add details
        Given When I navigate to page
        Then enter first name and last name
        Then enter mail ID
        Then enter number
        Then create your password
        Then confirm the password
        Then I have checked the check box
        Then click continue