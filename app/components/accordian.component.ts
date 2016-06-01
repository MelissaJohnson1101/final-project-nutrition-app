import { Component, Input } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
	selector: 'accordian-area',
	directives: [MaterializeDirective],
	templateUrl: 'app/templates/accordian.template.html'

})
export class AccordianComponent {}