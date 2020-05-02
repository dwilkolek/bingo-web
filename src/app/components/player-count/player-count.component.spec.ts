import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCountComponent } from './player-count.component';

describe('PlayerCountComponent', () => {
  let component: PlayerCountComponent;
  let fixture: ComponentFixture<PlayerCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
