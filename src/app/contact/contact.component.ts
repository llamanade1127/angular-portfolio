import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl:'./contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  sendTo: string = "https://formspree.io/f/xdoyaloo"
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.service.sendEmail(this.email, this.message, this.name, this.sendTo, (ok) => { 
      if(ok){
        alert("Your email has been sent. Thank you!");
        this.router.navigate(['']);
      } else{
        alert("There was a error sending your email")
      }

    });
  }

}
