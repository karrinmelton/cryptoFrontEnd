import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map' ;

//Textbook chatbot 
import { ChatExampleData } from './data/chat-example-data';
import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';


@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
    constructor(public messagesService: MessagesService,
        public threadsService: ThreadsService,
        public usersService: UsersService) {
            ChatExampleData.init(messagesService, threadsService, usersService);
        }
}