import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerBioComponent } from './speaker-bio.component';

describe('BioComponent', () => {
  let component: SpeakerBioComponent;
  let fixture: ComponentFixture<SpeakerBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
