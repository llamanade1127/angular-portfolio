import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-view-me',
  templateUrl:'./view-me.component.html',
  styles: [
  ]
})
export class ViewMeComponent implements OnInit {


  myUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser('llamanade1127').subscribe(user => this.myUser = user)
  }

}
