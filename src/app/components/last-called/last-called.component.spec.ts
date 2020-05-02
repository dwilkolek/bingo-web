import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCalledComponent } from './last-called.component';

describe('LastCalledComponent', () => {
  let component: LastCalledComponent;
  let fixture: ComponentFixture<LastCalledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastCalledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
