import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
// import { UserLoggedinRoute } from '../routes/userloggedin.route';

// import { FoodService } from "../services/food.service";

	@Component ({
		selector: 'login-view',
		templateUrl: 'app/templates/signinform.template.html'
	})
	export class SignInComponent{
		
		private model = {
			first_name: "",
			last_name: "",
			password: "",
			email: "",
		}
		
		constructor(
			private router: Router) { }

		goToUserLoggedIn() {
			this.router.navigate(["/userloggedin"]);
		}

	}


