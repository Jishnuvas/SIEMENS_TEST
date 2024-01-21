import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    {path:'',redirectTo:'register',pathMatch:'full'},
    {path:'register',component:RegistrationComponent},
    {path:'user-details',component:UserDetailsComponent},
    {path: '**', redirectTo: 'register' ,pathMatch: 'full'}
];
