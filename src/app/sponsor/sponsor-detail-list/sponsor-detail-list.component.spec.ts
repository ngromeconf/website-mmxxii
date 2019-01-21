import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorDetailListComponent } from './sponsor-detail-list.component';

describe('SponsorDetailListComponent', () => {
  let component: SponsorDetailListComponent;
  let fixture: ComponentFixture<SponsorDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
