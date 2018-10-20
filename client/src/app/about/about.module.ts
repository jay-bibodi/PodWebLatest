import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about.component';
import { AboutRoutes } from './about.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AboutRoutes),
        FormsModule
    ],
    declarations: [AboutComponent]
})

export class AboutModule {}
