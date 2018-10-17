import { Routes } from '@angular/router';

import { PurchaseTokenComponent } from './purchaseToken.component';

export const PurchaseTokenRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'pages/purchaseToken',
        component: PurchaseTokenComponent
    }]
}
];
