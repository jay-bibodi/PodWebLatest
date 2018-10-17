import { Routes } from '@angular/router';

import { SongDetailsComponent } from './songDetails.component';

export const SongDetailsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'tables/latestPodcast/:id',
        component: SongDetailsComponent
    }]
}
];