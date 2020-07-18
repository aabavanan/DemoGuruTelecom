package com.telecom.steps;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//resources//Features//Customer.feature",
							glue = "com.telecom.steps",
							dryRun = false,
							plugin = {"html:target//Cucumber-html-report","json:target/reports.json"},
							monochrome = true)
public class TestRunner {

}
