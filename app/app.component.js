"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var signin_component_1 = require('./components/signin.component');
var userloggedin_route_1 = require('./routes/userloggedin.route');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var AppComponent = (function () {
    // constructor() { } 
    function AppComponent(modal, viewContainer) {
        this.modal = modal;
        modal.defaultViewContainer = viewContainer;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [router_1.ROUTER_DIRECTIVES, signin_component_1.SignInComponent, userloggedin_route_1.UserLoggedinRoute],
            viewProviders: [bootstrap_1.BS_MODAL_PROVIDERS],
            template: "<div>\n\t\t\t  \t<a class=\"loginarea\" [routerLink]=\"['/login']\">Login</a>\n\t\t\t  \t<router-outlet></router-outlet>\n\t\t\t  </div>"
        }),
        router_1.Routes([
            {
                path: '/',
                component: signin_component_1.SignInComponent
            },
            {
                path: '/login',
                component: signin_component_1.SignInComponent
            },
            {
                path: '/userloggedin',
                component: userloggedin_route_1.UserLoggedinRoute
            }
        ]), 
        __metadata('design:paramtypes', [bootstrap_1.Modal, core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map