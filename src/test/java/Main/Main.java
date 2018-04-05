package Main;


import com.codeborne.selenide.Configuration;

public class Main
{
	public static void main(final String[] args) throws Throwable 
	{
		String[] arguments = 
			{
				"--plugin", "html:target/cucumber-report/smoketest", 
				"--plugin", "json:target/cucumber.json", 
				"--glue", "stepDefinition", 
				"src/Features"
			};
        System.setProperty("webdriver.chrome.driver", "./src/chromedriver.exe");
        Configuration.browser = "chrome";
		cucumber.api.cli.Main.main(arguments);
	}
}