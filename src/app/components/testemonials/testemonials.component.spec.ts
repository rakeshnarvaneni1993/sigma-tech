import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemonialsComponent } from './testemonials.component';

describe('TestemonialsComponent', () => {
  let component: TestemonialsComponent;
  let fixture: ComponentFixture<TestemonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestemonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestemonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
