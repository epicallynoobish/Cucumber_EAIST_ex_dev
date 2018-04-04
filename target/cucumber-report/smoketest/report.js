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
  "status": "passed"
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
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d56\"",
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
  "status": "passed"
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
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1501\"",
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
  "status": "passed"
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
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1505\"",
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
  "status": "passed"
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
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dExpertNMC\u0026menu_id\u003d1500\u0026report_id\u003d1506\"",
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
  "status": "passed"
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
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d54\"",
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
  "status": "passed"
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
  "name": "I go to \"http://eaistan-dev.proitr.ru/index.php?show\u003dKpgzSpgz\u0026menu_id\u003d1503\u0026report_id\u003d1504\"",
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
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
