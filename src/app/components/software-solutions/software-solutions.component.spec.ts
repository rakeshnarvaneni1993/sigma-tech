import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSolutionsComponent } from './software-solutions.component';

describe('SoftwareSolutionsComponent', () => {
  let component: SoftwareSolutionsComponent;
  let fixture: ComponentFixture<SoftwareSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
