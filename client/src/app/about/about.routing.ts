import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';

export const AboutRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'about',
        component: AboutComponent
    }]
}
];