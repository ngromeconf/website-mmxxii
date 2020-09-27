import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinksSectionComponent } from './footer-links-section.component';

describe('FooterLinksSectionComponent', () => {
  let component: FooterLinksSectionComponent;
  let fixture: ComponentFixture<FooterLinksSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLinksSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLinksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
