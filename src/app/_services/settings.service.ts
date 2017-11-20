import { Injectable, OnInit} from '@angular/core';
import { Http, Headers, RequestOptions, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';

import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
import { fakeBackendProvider } from '../_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { User } from '../_models/index';

@Injectable()
export class SettingsService {
    // currentUser: User;
    // thisUser: User;
    // users: any[] = JSON.parse(localStorage.getItem('users'))
    // model: any = {};
    // loading = false;
    // saveMessage: string;
    // private _originalEmailAddress :String; 


    // constructor(private userService: UserService,private router: Router,private alertService: AlertService) {
    //     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // }

    // ngOnInit(){
    //     this.currentUser = getById(currentUser);
    //     this._originalEmailAddress =this.currentUser.email;
    // }

    // private helper methods

    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return new RequestOptions({ headers: headers });
    //     }
    // }
    // changeInfo(currentUser: User){
    //     let thisUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if(thisUser == currentUser){
    //         this.thisUser.id = this.users.length + 1;
    //         this.users.push(this.thisUser);
    //         localStorage.setItem('users', JSON.stringify(this.users));
    //     }
        
        // save() {
        //     this.newUser.id = this.users.length + 1;
        //     this.users.push(this.newUser);
        //     localStorage.setItem('users', JSON.stringify(this.users));
        // }
    //     updateUInfo(currentUser: User) {
    //         let updateUser = new User(currentUser.value.name, currentUser.value.emailAddress, currentUser.value.profileImageUrl);
    //         this.thisUser = this.usersService.updateUser(updateUser);
    //         this.saveMessage = 'User updated successfully!';
    //       }
    // }
    // let urlParts = connection.request.url.split('/');
    // let id = parseInt(urlParts[urlParts.length - 1]);
    // let matchedUsers = users.filter(user => { return user.id === id; });
    // let user = matchedUsers.length ? matchedUsers[0] : null;
}