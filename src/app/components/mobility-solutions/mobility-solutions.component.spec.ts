import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilitySolutionsComponent } from './mobility-solutions.component';

describe('MobilitySolutionsComponent', () => {
  let component: MobilitySolutionsComponent;
  let fixture: ComponentFixture<MobilitySolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilitySolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilitySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
