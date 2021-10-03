import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { spyOnClass } from 'jasmine-es6-spies';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let dialogData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatDialogModule],
      declarations: [DetailsComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useFactory: () => spyOnClass(MatDialogRef) },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    dialogData = TestBed.inject(MAT_DIALOG_DATA);
    dialogData.home = {};



    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should render title', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="title"]')
    ).toBeTruthy();
  });

  it('it should render price', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="price"]')
    ).toBeTruthy();
  });

  it('it should render location', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="location"]')
    ).toBeTruthy();
  });

  it('it should render input entry', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="entry"]')
    ).toBeTruthy();
  });

  it('it should input exit', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="exit"]')
    ).toBeTruthy();
  });
});
