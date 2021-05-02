import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    alert("Form is submitted")
  }

}
