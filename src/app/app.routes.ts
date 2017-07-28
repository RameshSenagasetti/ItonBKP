import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './common/components/pagenotfound/pagenotfound.component';
import { TechnicalServicesComponent } from './technicalservices/technicalservices.component';
import { TechnicalServicesRoutes } from './technicalservices/technicalservices.routes';

const AppRoutes:Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {   
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'ts',                     // Technical Solutions Wrapper
        component: TechnicalServicesComponent,
        children: TechnicalServicesRoutes
    },
    // {
    //     path: 'ws',                     // Water Solutions Wrapper
    //     component: ''
    // },
    // {
    //     path: 'hs',                     // Health Solutions Wrapper
    //     component: ''
    // },
    {
        path: '**',
        component: PagenotfoundComponent
    }
]

export const AppRouting = RouterModule.forRoot(AppRoutes);