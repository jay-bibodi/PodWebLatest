import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { TablesRoutes } from './tables.routing';
import { TagInputModule } from 'ngx-chips';
import { DataTableComponent } from './latestPodcast/datatable.component';
import { UserPublishedTableComponent } from './userPublishedTable/userPublishedTable.component';
import { PurchasedPodcastTableComponent } from './purchasedPodcast/purchasedPodcast.component';
import { PodcastDetailComponent } from '../forms/podcastDetailforms/podcastDetailforms.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { DetailForLatestAndPurchasedPodcastComponent } from '../forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component'
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    FormsModule,
    TagInputModule,
    MaterialModule,
    NgxSpinnerModule
  ],
  declarations: [
      DataTableComponent,
      UserPublishedTableComponent,
      PurchasedPodcastTableComponent,
      PodcastDetailComponent,
      FileSelectDirective,
      FileDropDirective,
      DetailForLatestAndPurchasedPodcastComponent
  ]
})

export class TablesModule {}