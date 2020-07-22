package com.telecom.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class CustomerSteps {
	
	static WebDriver d;

	@Given("User launches telecom web application in Chrome")
	public void user_launches_telecom_web_application_in_Chrome() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Aaba-PC\\eclipse-workspace\\DemoGuruTelecom\\driver\\chromedriver.exe");
		d = new ChromeDriver();
		d.get("http://demo.guru99.com/telecom/");
		d.manage().window().maximize();
	}

	@Given("Click on the Add Customer")
	public void click_on_the_Add_Customer(){
		
		WebElement AddCustomer = d.findElement(By.xpath("//a[text()=\"Add Customer\"][1]"));
		AddCustomer.click();
		
	}

	@When("Close the Pop up window")
	public void close_the_Pop_up_window() throws InterruptedException {
		
		Thread.sleep(5000);
		d.switchTo().frame("flow_close_btn_iframe");
	    WebElement FrameCloseBtn = d.findElement(By.xpath("//div[@id=\"closeBtn\"]"));
	    FrameCloseBtn.click();
	    d.switchTo().defaultContent();
	}


	@When("Enter the customer fields {string},{string},{string},{string},{string}")
	public void enter_the_customer_fields(String fname, String lname, String mail, String address, String phone) throws InterruptedException {

		Thread.sleep(2000);
	    
		d.findElement(By.xpath("(//label[@for='done'])[1]")).click();
		d.findElement(By.id("fname")).sendKeys(fname);
		d.findElement(By.id("lname")).sendKeys(lname);
		d.findElement(By.id("email")).sendKeys(mail);
		d.findElement(By.name("addr")).sendKeys(address);
		d.findElement(By.id("telephoneno")).sendKeys(phone);
	}
	
	
	@When("Click on submit button")
	public void click_on_submit_button(){
		
		WebElement SubmitBtn = d.findElement(By.xpath("(//input[@type='submit'])[1]"));
		SubmitBtn.click();

	}

	@Then("Check the Customer ID is displayed")
	public void check_the_Customer_ID_is_displayed() {
		
		Assert.assertTrue(d.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}

	@Then("Close the Browser")
	public void close_the_Browser() {
		
		d.close();

	}

}
