$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Features/testDataExistence.feature");
formatter.feature({
  "name": "Test data existance",
  "description": "  I want to check if there is some data in all the tables",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \u003ctable\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "table"
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003drating\u0026menu_id\u003d21\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d56\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1501\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1505\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1506\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d54\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1504\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1507\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1509\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1701\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1702\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1703\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dAdministration\u0026menu_id\u003d1700\u0026report_id\u003d1704\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d49\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d47\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d46\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d57\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d44\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d48\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d50\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d51\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d52\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d53\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dnew_reports\u0026menu_id\u003d1096\u0026report_id\u003d67\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1801\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1802\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1803\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1804\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dMrg\u0026menu_id\u003d1800\u0026report_id\u003d1805\""
      ]
    },
    {
      "cells": [
        "\"http://eaistan-dev.proitr.ru/index.php?show\u003dTreeContract\u0026menu_id\u003d1600\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.i_log_in_as_demo_with_password_demo_with_name_Иванов_О_З()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test data existance outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003drating\u0026menu_id\u003d21\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.i_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.i_check_for_the_table()"
});
formatter.result({
  "error_message": "Element not found {#creport-grid \u003e div.grid-table-wrap \u003e table}\nExpected: visible\nScreenshot: \nTimeout: 4 s.\nCaused by: NoSuchWindowException: no such window: target window already closed\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:143)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:87)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy7.shouldBe(Unknown Source)\r\n\tat stepDefinition.stepDef.i_check_for_the_table(stepDef.java:33)\r\n\tat ✽.I check for the table(src/Features/testDataExistence.feature:10)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T19:05:32.194Z\u0027\nSystem info: host: \u0027PRM-WS-0159\u0027, ip: \u002710.242.4.214\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\starikov\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 65.0.3325.181, webStorageEnabled: true}\nSession ID: 38052b2cbe043a101c906e73e5581ffe\n*** Element info: {Using\u003dcss selector, value\u003d#creport-grid \u003e div.grid-table-wrap \u003e table}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:465)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:143)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:87)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy7.shouldBe(Unknown Source)\r\n\tat stepDefinition.stepDef.i_check_for_the_table(stepDef.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:119)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:104)\r\n\tat cucumber.api.cli.Main.run(Main.java:36)\r\n\tat cucumber.api.cli.Main.main(Main.java:18)\r\n\tat Main.Main.main(Main.java:19)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I log in as demo with password demo with name Иванов О.З.",
  "keyword": "Given "
});
