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
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T19:05:32.194Z\u0027\nSystem info: host: \u0027PRM-WS-0159\u0027, ip: \u002710.242.4.214\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nselenide.url: http://eaistan-dev.proitr.ru/index.php?show\u003drating\u0026menu_id\u003d21\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\starikov\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 65.0.3325.181, webStorageEnabled: true}\nselenide.baseUrl: http://localhost:8080\nSession ID: e774ce30171f87ce8d347ea4e66f463c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:329)\r\n\tat com.codeborne.selenide.impl.WebDriverThreadLocalContainer.isBrowserStillOpen(WebDriverThreadLocalContainer.java:66)\r\n\tat com.codeborne.selenide.impl.WebDriverThreadLocalContainer.getAndCheckWebDriver(WebDriverThreadLocalContainer.java:103)\r\n\tat com.codeborne.selenide.WebDriverRunner.getAndCheckWebDriver(WebDriverRunner.java:142)\r\n\tat com.codeborne.selenide.impl.Navigator.navigateToAbsoluteUrl(Navigator.java:69)\r\n\tat com.codeborne.selenide.impl.Navigator.open(Navigator.java:32)\r\n\tat com.codeborne.selenide.Selenide.open(Selenide.java:79)\r\n\tat com.codeborne.selenide.Selenide.open(Selenide.java:53)\r\n\tat stepDefinition.stepDef.i_go_to(stepDef.java:28)\r\n\tat ✽.I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003drating\u0026menu_id\u003d21\"(src/Features/testDataExistence.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I check for the table",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.i_check_for_the_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
