import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GridComponent } from './components/grid/grid.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    GridComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GridComponent,
    PagenotfoundComponent
  ],
  providers: []
})

export class CommonModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers:[]                          // Providers listed here can be shared as a single instance acroos other modules that are imported in the app module
    }                                         
  }
}
