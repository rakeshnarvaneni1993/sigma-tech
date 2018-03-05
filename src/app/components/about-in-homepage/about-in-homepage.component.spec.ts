import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInHomepageComponent } from './about-in-homepage.component';

describe('AboutInHomepageComponent', () => {
  let component: AboutInHomepageComponent;
  let fixture: ComponentFixture<AboutInHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutInHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
