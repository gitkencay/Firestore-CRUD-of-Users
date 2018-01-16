import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/users.service';

import { Users } from '../../models/Users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']

})
export class UsersComponent implements OnInit {
  Users: Users[];


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(Users => {
     // console.log(users);
    this.Users = Users;
  });

  }
}
