Feature: Verify ecommerce loging via pom
@loginPom
Scenario: Validate ecommerce loging via pom
    Given I navigate to ecommerce website via pom
    Then I enter email via pom
    Then I enter password via pom
    Then I click login button via pom
