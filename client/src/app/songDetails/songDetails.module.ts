import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../app.module';
import { SongDetailsComponent } from './songDetails.component';
import { SongDetailsRoutes } from './songDetails.routing';

import { NgxSoundmanager2Module } from 'ngx-soundmanager2';


@NgModule({
  imports: [
    CommonModule,
    NgxSoundmanager2Module.forRoot(),
    RouterModule.forChild(SongDetailsRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [SongDetailsComponent]
})
export class SongDetailsModule { }