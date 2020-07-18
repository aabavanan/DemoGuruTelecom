$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Customer.feature");
formatter.feature({
  "name": "Customer creation in Demo Guru",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Demo Guru99 site customer creation by using outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches telecom web application in Chrome",
  "keyword": "Given "
});
formatter.step({
  "name": "Click on the Add Customer",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the customer fields \"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cmail\u003e\",\"\u003caddress\u003e\",\"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "Check the Customer ID is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "mail",
        "address",
        "phone"
      ]
    },
    {
      "cells": [
        "Agu",
        "Aaba",
        "agu@gmail.com",
        "Erode",
        "9952131160"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Demo Guru99 site customer creation by using outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches telecom web application in Chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.user_launches_telecom_web_application_in_Chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Add Customer",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerSteps.click_on_the_Add_Customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the customer fields \"Agu\",\"Aaba\",\"agu@gmail.com\",\"Erode\",\"9952131160\"",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerSteps.enter_the_customer_fields(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerSteps.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the Customer ID is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerSteps.check_the_Customer_ID_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerSteps.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
});