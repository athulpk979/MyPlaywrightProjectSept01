Feature: Test the upload function in playwright
    @UploadFile
    Scenario: Test the upload file function
        Given I launch the chrome
        When I navigate to the page
        Then I upload a sigle fine in the website
        Then I upload a multiple fine in the website