Feature: As a user, i want to divide two numbers 

Scenario: Divide two numbers 
    Given a calculator 
    When I divide 6 by 2 
    Then the result is 3 
    
Scenario: Divide by zero 
    Given a calculator 
    When I divide 6 by 0 
    Then an error occurred with the following message "Impossible to divide by 0"