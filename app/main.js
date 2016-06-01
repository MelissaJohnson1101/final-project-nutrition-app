"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var food_service_1 = require('./services/food.service');
//import {MaterializeDirective} from "angular2-materialize";
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, router_1.ROUTER_DIRECTIVES, food_service_1.FoodService]);
//# sourceMappingURL=main.js.map