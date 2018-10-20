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
                //loadChildren: './dashboard/dashboard.module#DashboardModule'
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                //path: 'components',
                //loadChildren: './components/components.module#ComponentsModule'
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            },{
                path: '',
                loadChildren: './purchaseToken/purchaseToken.module#PurchaseTokenModule'
            },
            {
                path: '',
                loadChildren: './songDetails/songDetails.module#SongDetailsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            },  {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
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
