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
var ChallengeService = (function () {
    function ChallengeService() {
        this.challenges = [
            {
                "name": "jumping jacks",
                "img": "app/images/JumpingJacks.gif",
                "title": "Exercise",
                "instruct": "20 jumping jacks",
                "points": 10,
                "complete": false
            },
            {
                "name": "breathe",
                "img": "app/images/breath-gif.gif",
                "title": "Breathe",
                "instruct": "10 deep breaths",
                "points": 10,
                "complete": false
            }
        ];
    }
    ChallengeService.prototype.getChallengePoints = function () {
        var userChallPoints = 0;
        for (var c = 0; c < this.challenges.length; c++) {
            if (this.challenges[c].complete == true) {
                userChallPoints += this.challenges[c].points;
            }
        }
        return userChallPoints;
    };
    ChallengeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ChallengeService);
    return ChallengeService;
}());
exports.ChallengeService = ChallengeService;
//# sourceMappingURL=challenge.service.js.map