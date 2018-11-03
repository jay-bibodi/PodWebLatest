import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AboutComponent } from './about/about.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/pages/login',
        pathMatch: 'full',
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            },{
                path: '',
                loadChildren: './purchaseToken/purchaseToken.module#PurchaseTokenModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }
        ]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    }
];
