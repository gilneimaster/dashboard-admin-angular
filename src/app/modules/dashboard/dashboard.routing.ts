import { Route } from '@angular/router';
import { DashboardComponent } from 'app/modules/dashboard/dashboard.component';
import { DashboardResolver } from 'app/modules/dashboard/dashboard.resolver';

export const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent,
        resolve  : {
            data: DashboardResolver
        }
    }
];
