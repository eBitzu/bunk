import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FteamComponent } from './fteam.component';

describe('FteamComponent', () => {
  let component: FteamComponent;
  let fixture: ComponentFixture<FteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
