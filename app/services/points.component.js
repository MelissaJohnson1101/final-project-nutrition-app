// import { Component } from '@angular/core';
// import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
// import { ACCORDION_DIRECTIVES } from '../../node_modules/ng2-bootstrap';
// // webpack html imports
// // let template = require('./.html');
// @Component({
// 	selector: 'accordion-demo',
// 	templateUrl: './templates/toggle.template.html',
// 	directives: [ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
// })
// export class AccordionDemoComponent {
// 	public oneAtATime: boolean = true;
// 	public items: Array<string> = ['Item 1', 'Item 2', 'Item 3'];
// 	public status: Object = {
// 		isFirstOpen: true,
// 		isFirstDisabled: false
// 	};
// 	public groups: Array<any> = [
// 		{
// 			title: 'Dynamic Group Header - 1',
// 			content: 'Dynamic Group Body - 1'
// 		},
// 		{
// 			title: 'Dynamic Group Header - 2',
// 			content: 'Dynamic Group Body - 2'
// 		}
// 	];
// 	public addItem(): void {
// 		this.items.push(`Items ${this.items.length + 1}`);
// 	}
// }
// import { Component, Input } from '@angular/core';
// @Component({
// 	selector: 'points-area',
// 	template: `
// 		<div id="output"></div>
// 	`,
// 	styles: `
// 		#output{
// 		}
// 	`
// })
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