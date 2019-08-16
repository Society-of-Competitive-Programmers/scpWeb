import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonTravelFormComponent } from './hackathon-travel-form.component';

describe('HackathonTravelFormComponent', () => {
  let component: HackathonTravelFormComponent;
  let fixture: ComponentFixture<HackathonTravelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonTravelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonTravelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
