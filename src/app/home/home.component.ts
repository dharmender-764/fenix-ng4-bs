import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  orderId = '';
  email = '';
  phone = '';

  constructor(private router: Router) {}

  onSubmit() {
  	  console.log(this.orderId);
  	  console.log(this.email);
  	  console.log(this.phone);
	  this.router.navigate(['/orderdetails'], { queryParams: {orderId: this.orderId, email: this.email, phone: this.phone} });
	}
}
