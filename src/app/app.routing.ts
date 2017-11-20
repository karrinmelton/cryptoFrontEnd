import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ContactComponent } from './contact/contact.component';
import { CurrentCryptosComponent } from './current-cryptos/current-cryptos.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const appRoutes: Routes = [
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'home', component: HomeComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'current-cryptos', component: CurrentCryptosComponent},
    {path: 'chatbot', component: ChatbotComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);