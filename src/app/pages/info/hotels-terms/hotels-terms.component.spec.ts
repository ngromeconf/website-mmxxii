import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsTermsComponent } from './hotels-terms.component';

describe('HotelsTermsComponent', () => {
  let component: HotelsTermsComponent;
  let fixture: ComponentFixture<HotelsTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
