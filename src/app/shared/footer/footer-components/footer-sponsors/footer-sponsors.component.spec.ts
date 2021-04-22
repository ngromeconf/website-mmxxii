import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSponsorsComponent } from './footer-sponsors.component';

describe('FooterSponsorsComponent', () => {
  let component: FooterSponsorsComponent;
  let fixture: ComponentFixture<FooterSponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
