Feature: Frame testing
    @frames
    Scenario: Locat the frame and test
        Given I launch the chrome broswer for test
        Then I navigate to to the Frame Test Page
        Then frame types
        Then I handle nested frame
