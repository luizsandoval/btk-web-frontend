import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from 'src/app/shared/services/manage-users.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'btk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[] = [];
  constructor(private _usersService: ManageUsersService) { }

  ngOnInit() {
    // this.getUsers();
  }

  getUsers = () => {
    this._usersService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    }, console.log);
  }

}
