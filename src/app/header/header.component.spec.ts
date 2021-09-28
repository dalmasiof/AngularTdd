import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the image', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="logo"]')
    ).toBeTruthy();
  });

  it('should load search', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="search"]')
    ).toBeTruthy();
  });
  it('should load btnBeomeHost', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="becomeHost"]')
    ).toBeTruthy();
  });
  it('should load btnHelp', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="help"]')
    ).toBeTruthy();
  });
  it('should load btnSignUp', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="signUp"]')
    ).toBeTruthy();
  });
  it('should load btnLogin', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="login"]')
    ).toBeTruthy();
  });
});
