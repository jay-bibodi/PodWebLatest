import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { PurchaseTokenComponent } from './purchaseToken.component';
import { PurchaseTokenRoutes } from './purchaseToken.routing';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PurchaseTokenRoutes),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        SelectModule,
        MaterialModule,
        NgxSpinnerModule
    ],
    declarations: [PurchaseTokenComponent]
})

export class PurchaseTokenModule {}