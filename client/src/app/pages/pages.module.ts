import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
//import { PricingComponent } from './pricing/pricing.component';
//import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
//import { AboutComponent } from './about/about.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
    //,AboutComponent
  //  PricingComponent,
    //LockComponent
  ]
})

export class PagesModule {}