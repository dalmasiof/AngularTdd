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
  let matDialogRef:MatDialogRef<DetailsComponent>

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
    matDialogRef = TestBed.inject(MatDialogRef);
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

  it('should render input days', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="days"]')
    ).toBeTruthy();
  });

  it('should render total value', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="totalValue"]')
    ).toBeTruthy();
  });

  it('should not render book button', () => {

    expect(
        fixture.nativeElement.querySelector('[data-test="bookBtn"]')
      ).toBe(null);
    

  });

  it('should  render book button', () => {    
    component.day = 2;
    fixture.detectChanges()
    expect(
      fixture.nativeElement.querySelector('[data-test="bookBtn"]')
    ).toBeTruthy();

  });

  it('should calculate the total based on days*price',()=>{
    
    let days = 2;
    let price = "200";

    let result = component.calculateTotal(days,price);

    expect(result).toEqual(400);
  })

  it('should calculate the total based on days*price using decimal',()=>{
    
    let days = 2;
    let price = "100.50";

    let result = component.calculateTotal(days,price);

    expect(result).toEqual(201);
  })

  it('should not calculat if days < 0',()=>{
    
    let days = -2;
    let price = "100";

    let result = component.calculateTotal(days,price);

    expect(result).toEqual(0);
  })

  it('should close the dialog',()=>{
    component.closeDialog();

    expect(matDialogRef.close).toHaveBeenCalled();
  })
});
