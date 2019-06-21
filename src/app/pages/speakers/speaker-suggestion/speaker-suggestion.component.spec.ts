import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSuggestionComponent } from './speaker-suggestion.component';

describe('SpeakerSuggestionComponent', () => {
  let component: SpeakerSuggestionComponent;
  let fixture: ComponentFixture<SpeakerSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
