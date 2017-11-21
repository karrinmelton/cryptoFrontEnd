import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
// import { SettingsComponent } from './settings/settings.component';
import { CurrentCryptosComponent } from './current-cryptos/current-cryptos.component';
import { fakeBackendProvider } from './_helpers/index';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { UserInfoComponent } from './user-info/user-info.component';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import {Component} from '@angular/core'
import { ImageUploadModule } from "angular2-image-upload";

import {UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ContactComponent } from './contact/contact.component';
// import { ChatbotComponent } from './chatbot/chatbot.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DateObjComponent } from './date-obj/date-obj.component';

// Textbook chatbot imports
import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';
// import { ChatMessageComponent } from './chat-message/chat-message.component';
// import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
// import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
// import { ChatWindowComponent } from './chat-window/chat-window.component';
// import { ChatPageComponent } from './chat-page/chat-page.component';
import { FromNowPipe } from './pipes/from-now.pipe';





const navRoutes: Routes = [
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'home', component: HomeComponent},
    // {path: 'settings', component: SettingsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'current-cryptos', component: CurrentCryptosComponent},
    // {path: 'chatbot', component: ChatbotComponent},
    // { path: '**', component: PageNotFoundComponent }
  ]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ImageUploadModule.forRoot(),
        RouterModule.forRoot(navRoutes,
            {enableTracing: true })
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ContactComponent,
        UserInfoComponent,
        // ChatbotComponent,
        NavbarComponent,
        DateObjComponent,
        LoginComponent,
        UserProfileComponent,
        // SettingsComponent,
        CurrentCryptosComponent,
        // Textbook chatbot declarations
        // ChatMessageComponent,
        // ChatThreadComponent,
        ChatNavBarComponent,
        // ChatThreadsComponent,
        // ChatWindowComponent,
        // ChatPageComponent,
        FromNowPipe
    ],
    providers: [
        AppComponent,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // Textbook chatbot providers
        MessagesService, 
        ThreadsService,
        UsersService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }