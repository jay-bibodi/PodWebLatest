import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { TablesRoutes } from './tables.routing';
import { TagInputModule } from 'ngx-chips';
import { ExtendedTableComponent } from './extendedtable/extendedtable.component';
import { RegularTableComponent } from './regulartable/regulartable.component';
import { DataTableComponent } from './latestPodcast/datatable.component';
import { UserPublishedTableComponent } from './userPublishedTable/userPublishedTable.component';
import { PurchasedPodcastTableComponent } from './purchasedPodcast/purchasedPodcast.component';
import { PodcastDetailComponent } from '../forms/podcastDetailforms/podcastDetailforms.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { DetailForLatestAndPurchasedPodcastComponent } from '../forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    FormsModule,
    TagInputModule,
    MaterialModule
  ],
  declarations: [
      ExtendedTableComponent,
      DataTableComponent,
      RegularTableComponent,
      UserPublishedTableComponent,
      PurchasedPodcastTableComponent,
      PodcastDetailComponent,
      FileSelectDirective,
      FileDropDirective,
      DetailForLatestAndPurchasedPodcastComponent
  ]
})

export class TablesModule {}