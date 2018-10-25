import { Routes } from '@angular/router';

import { ExtendedTableComponent } from './extendedtable/extendedtable.component';
import { RegularTableComponent } from './regulartable/regulartable.component';
import { DataTableComponent } from './latestPodcast/datatable.component';
import { UserPublishedTableComponent } from './userPublishedTable/userPublishedTable.component';
import { PurchasedPodcastTableComponent } from './purchasedPodcast/purchasedPodcast.component';
import { PodcastDetailComponent } from '../forms/podcastDetailforms/podcastDetailforms.component';

export const TablesRoutes: Routes = [
    /*{
      path: '',
      children: [ {
        path: 'regular',
        component: RegularTableComponent
    }]
    }, {
    path: '',
    children: [ {
      path: 'extended',
      component: ExtendedTableComponent
    }]
    },*/ {
    path: '',
    children: [{
      path: 'latestPodcast',
      component: DataTableComponent
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
    }]
  },
];