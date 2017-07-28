import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorconstructionComponent } from './majorconstruction.component';

describe('MajorconstructionComponent', () => {
  let component: MajorconstructionComponent;
  let fixture: ComponentFixture<MajorconstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorconstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorconstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
