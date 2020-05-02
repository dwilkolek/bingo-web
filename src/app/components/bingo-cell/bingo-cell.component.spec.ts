import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoCellComponent } from './bingo-cell.component';

describe('BingoCellComponent', () => {
  let component: BingoCellComponent;
  let fixture: ComponentFixture<BingoCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
