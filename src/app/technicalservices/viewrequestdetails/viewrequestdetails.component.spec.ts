import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrequestdetailsComponent } from './viewrequestdetails.component';

describe('ViewrequestdetailsComponent', () => {
  let component: ViewrequestdetailsComponent;
  let fixture: ComponentFixture<ViewrequestdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrequestdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrequestdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
