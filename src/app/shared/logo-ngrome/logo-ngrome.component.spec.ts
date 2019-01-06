import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoNgromeComponent } from './logo-ngrome.component';

describe('LogoNgromeComponent', () => {
  let component: LogoNgromeComponent;
  let fixture: ComponentFixture<LogoNgromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoNgromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoNgromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
