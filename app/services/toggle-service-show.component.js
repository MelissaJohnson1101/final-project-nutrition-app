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
var toggle_service_component_1 = require('./toggle-service.component');
var Panel = (function () {
    function Panel() {
        this.opened = false;
    }
    Panel.prototype.toggle = function () {
        this.opened = !this.opened;
    };
    Panel = __decorate([
        core_1.Component({
            selector: 'panel',
            styles: ["\n    .hide {\n      display: none;\n    },\n    "
            ],
            template: "\n  <div class=\"card\" *ngIf=\"title\">\n    <div class=\"card-header\" (click)=\"toggle()\">{{title}}  </div>\n    <div  class=\"card-block\" [ngClass]=\"{hide: !opened}\"><ng-content></ng-content></div>\n  </div>",
            inputs: ['title']
        }), 
        __metadata('design:paramtypes', [])
    ], Panel);
    return Panel;
}());
exports.Panel = Panel;
var CollapseFeature = (function () {
    function CollapseFeature() {
        this.title = 'my awesome title';
        this.body = 'my awesome content';
    }
    CollapseFeature = __decorate([
        core_1.Component({
            selector: 'toggle-test',
            directives: [toggle_service_component_1.Collapse, Panel],
            template: "\n    <div>\n      <h2 (click)=\"isCollapsed = !isCollapsed\">click here</h2>\n      \n      <div [collapse]=\"isCollapsed\" >\n        <div>\n            <panel [title]=\"'My static title'\" >static content</panel>\n            <panel [title]=\"title\" >{{body}}</panel>\n            <toggle-test></toggle-test>\n        </div>\n      </div>\n    </div>\n\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], CollapseFeature);
    return CollapseFeature;
}());
exports.CollapseFeature = CollapseFeature;
//# sourceMappingURL=toggle-service-show.component.js.map