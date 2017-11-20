import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/index';
import { fakeBackendProvider } from '../_helpers/index';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';


@Component({
  moduleId: module.id,
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  
  styleUrls: ['./user-info.component.css']
})


export class UserInfoComponent implements OnInit {
  currentUser: User;
  newUser: User;
  users: any[] = JSON.parse(localStorage.getItem('users'))
  model: any = {};
  loading = false;
  constructor(private userService: UserService,private router: Router,private alertService: AlertService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  save() {
    this.newUser.id = this.users.length + 1;
    this.users.push(this.newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
}


  ngOnInit() {
    this.loadAllUsers();
}

  deleteUser(id: number) {
      this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
  }
}