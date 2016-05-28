import { Component, Input } from '@angular/core';

@Component({
	selector: 'points-area',
	template: `
		<div id="output"></div>
	`,
	styles: `
		#output{

		}

	`
})

export class PointsComponent {

	   $(".add-button").click(function () {
		var $addbtn = $(this);
		var $table = $addbtn.parents("table");
		var $boxes = $('td input:checkbox', $table);
		$boxes.each(function(index, box) {
			var $box = $(box);
			if ($box.is(":checked")) {
				var $pre = $box.next();
				var $preclone = $pre.clone();
				var li = $("<ol><li></li></ol>");
				li.append($preclone);
				$('#output').append(li);
			}
		})
	});
}

function displayPoints(elID) {
	var pointsContent = document.getElementById("output");
	.write(pointsContent.innerHTML);
	