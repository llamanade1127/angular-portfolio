import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-single',
  templateUrl:'./user-single.component.html',
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {

  user;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService.getUser(username).subscribe(user => this.user = user)
    });
  }

}
