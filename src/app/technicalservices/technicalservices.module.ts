import { NgModule } from '@angular/core';

import { TechnicalServicesRouting } from './technicalservices.routes';
import { TechnicalServicesComponent } from './technicalservices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { ViewrequestdetailsComponent } from './viewrequestdetails/viewrequestdetails.component';
import { MajorconstructionComponent } from './viewrequestdetails/majorconstruction/majorconstruction.component';

@NgModule({
  declarations: [
      TechnicalServicesComponent, 
      DashboardComponent, 
      ViewrequestsComponent, 
      ViewrequestdetailsComponent, 
      MajorconstructionComponent
  ],
  imports: [
      TechnicalServicesRouting
  ],
  exports: [TechnicalServicesComponent],
  providers: []
})

export class TechnicalServicesModule { }
