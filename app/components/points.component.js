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
var PointsComponent = (function () {
    function PointsComponent() {
    }
    PointsComponent = __decorate([
        core_1.Component({
            selector: 'points-area',
            templateUrl: "app/templates/points-area.template.html"
        }), 
        __metadata('design:paramtypes', [])
    ], PointsComponent);
    return PointsComponent;
}());
exports.PointsComponent = PointsComponent;
// export class PointsComponent {
// 	   $(".add-button").click(function () {
// 		var $addbtn = $(this);
// 		var $table = $addbtn.parents("table");
// 		var $boxes = $('td input:checkbox', $table);
// 		$boxes.each(function(index, box) {
// 			var $box = $(box);
// 			if ($box.is(":checked")) {
// 				var $pre = $box.next();
// 				var $preclone = $pre.clone();
// 				var li = $("<ol><li></li></ol>");
// 				li.append($preclone);
// 				$('#output').append(li);
// 			}
// 		})
// 	});
// }
// function displayPoints(elID) {
// 	var pointsContent = document.getElementById("output");
// 	.write(pointsContent.innerHTML);
//# sourceMappingURL=points.component.js.map