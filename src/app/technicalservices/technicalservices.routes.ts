import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { ViewrequestdetailsComponent } from './viewrequestdetails/viewrequestdetails.component';
import { MajorconstructionComponent } from './viewrequestdetails/majorconstruction/majorconstruction.component';

export const TechnicalServicesRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'requests',
        component: ViewrequestsComponent
    },
    {
        path: 'requestdetails',
        component: ViewrequestdetailsComponent,
        children:[
            {
                path:'majorconstruction',
                component:MajorconstructionComponent
            }
        ]
    }
]

export const TechnicalServicesRouting = RouterModule.forChild(TechnicalServicesRoutes);