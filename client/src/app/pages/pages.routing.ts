import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component'

export const PagesRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'login',
            component: LoginComponent
        }, {
            path: 'register',
            component: RegisterComponent
        },{
            path: 'forgotpassword',
            component: ForgotPasswordComponent
        },{
            path: 'resetpassword/:id',
            component: ResetPasswordComponent
        }]
    }
];