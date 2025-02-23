Feature: Demoblaze ecommerce website signUp validation

Application regression​

@signUp
Scenario: verify that the signUp page is accessible
    Given I open demoblaze website
    When I click the signUp button
    Then I verify that the signUp page is displayed

Scenario: verify successful signUp with valid username and password
    Given I open demoblaze website
    When I click the signUp button
    When I enter valid signUp details
    Then verify successful registration

Scenario: verify signUp without username leads to unsuccessful registration
    Given I open demoblaze website
    When I enter invalid signUp details
    Then verify unsuccessful registration

Scenario: verify signUp without password leads to unsuccessful registration
    Given I open demoblaze website
    When I enter incorrect password in signUp details
    Then verify unsuccessful registration

Scenario: verify signUp with existing username leads to error
    Given I open demoblaze website
    When I input an existing username and input a valid password
    Then I see an error message