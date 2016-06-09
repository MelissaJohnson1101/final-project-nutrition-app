import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { FoodService } from './services/food.service'
import { ChallengeService } from './services/challenge.service';
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/platform-browser';
//import {MaterializeDirective} from "angular2-materialize";

bootstrap(AppComponent, [ROUTER_PROVIDERS, ROUTER_DIRECTIVES, FoodService, ChallengeService, MODAL_BROWSER_PROVIDERS]);