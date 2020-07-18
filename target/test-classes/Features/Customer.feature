#Author: Aabavanan
Feature: Customer creation in Demo Guru

  Scenario Outline: Demo Guru99 site customer creation by using outline
    Given User launches telecom web application in Chrome
    And Click on the Add Customer
    #When Close the Pop up window
    And Enter the customer fields "<fname>","<lname>","<mail>","<address>","<phone>"
    And Click on submit button
    Then Check the Customer ID is displayed
    And Close the Browser

    Examples: 
      | fname  | lname | mail          | address | phone      |
      | Agu    | Aaba  | agu@gmail.com | Erode   | 9952131160 |
