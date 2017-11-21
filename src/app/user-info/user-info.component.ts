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
 
  items = ['https://image.flaticon.com/sprites/new_packs/145841-avatar-set.png', 'https://cdn.dribbble.com/users/124355/screenshots/2199042/profile_1x.png', 'https://maxcdn.icons8.com/windows10/PNG/512/User_Interface/cat_profile-512.png']

  imgSrc : string = this.items[1];

  constructor(private userService: UserService,private router: Router,private alertService: AlertService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  changePhoto(){
    if (this.imgSrc == this.items[0]){
      return this.imgSrc = this.items[1]
    } else if (this.imgSrc == this.items[1]){
      return this.imgSrc = this.items[2]
    }else{
      return this.imgSrc = this.items[0]
    }
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