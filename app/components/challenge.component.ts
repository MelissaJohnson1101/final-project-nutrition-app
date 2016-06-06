import { Component, ElementRef, Input, Renderer, Injector, provide } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
// import { Modal } from 'angular2-modal';

@Component({
	directives: [MaterializeDirective],
	// providers: [Modal],
	selector: 'challenge-area',
	templateUrl: 'app/templates/challenge.template.html'
})
export class ChallengeComponent { 
	
	  modalClick(){
	  $(document).ready(function(){
		  $('.modal-trigger').leanModal();
	  });
	  }
}