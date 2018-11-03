import { Routes } from '@angular/router';

import { DataTableComponent } from './latestPodcast/datatable.component';
import { UserPublishedTableComponent } from './userPublishedTable/userPublishedTable.component';
import { PurchasedPodcastTableComponent } from './purchasedPodcast/purchasedPodcast.component';
import { PodcastDetailComponent } from '../forms/podcastDetailforms/podcastDetailforms.component';
import { DetailForLatestAndPurchasedPodcastComponent } from '../forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'latestPodcast',
      component: DataTableComponent
    },{
      path: 'latestPodcast/:id',
      component: DetailForLatestAndPurchasedPodcastComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'userPublishedTable',
      component: UserPublishedTableComponent,
    },
    {
      path: 'userPublishedTable/:id',
      component: PodcastDetailComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'purchasedPodcast',
      component: PurchasedPodcastTableComponent
    },{
      path: 'purchasedPodcast/:id',
      component: DetailForLatestAndPurchasedPodcastComponent
    }]
  },
];