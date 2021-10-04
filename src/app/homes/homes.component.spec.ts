import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { spyOnClass } from 'jasmine-es6-spies';

import { DataService } from '../services/data.service';
import { DialogService } from '../services/dialog.service';

import { HomesComponent } from './homes.component';

describe('HomesComponent', () => {
  var component: HomesComponent;
  var fixture: ComponentFixture<HomesComponent>;

  let dialogService: DialogService; // let dataService:jasmine.SpyObj<DataService>;

  let homesList: any[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomesComponent],
      imports: [HttpClientModule, MatDialogModule, BrowserAnimationsModule],
      providers: [
        DialogService,
        { provide: DialogService, useFactory: () => spyOnClass(DialogService) },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    homesList = fixture.nativeElement.querySelectorAll('[data-test = "home"]');

    dialogService = TestBed.inject(DialogService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have homes', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test = "home"]').length
    ).toBe(3);
  });

  it('should have homes title', () => {
    homesList = fixture.nativeElement.querySelectorAll('[data-test = "home"]');
    for (let i = 0; i < homesList.length; i++) {
      let elChildren = homesList[i].children[1] as HTMLElement;
      var HTMLnode:any 
      HTMLnode = elChildren.childNodes[0]
      expect(HTMLnode).toBeTruthy();
    }
  });

  it('should have homes price', () => {
    
    homesList = fixture.nativeElement.querySelectorAll('[data-test = "home"]');
    for (let i = 0; i < homesList.length; i++) {
      let elChildren = homesList[i].children[1] as HTMLElement;
      var HTMLnode:any 
      HTMLnode = elChildren.childNodes[1]
      expect(HTMLnode).toBeTruthy();
    }
  });

  it('should have homes country', () => {
    homesList = fixture.nativeElement.querySelectorAll('[data-test = "home"]');
    for (let i = 0; i < homesList.length; i++) {
      let elChildren = homesList[i].children[1] as HTMLElement;
      var HTMLnode:any 
      HTMLnode = elChildren.childNodes[2]
      expect(HTMLnode).toBeTruthy();
    }
  });

  it('should render button to call dialog', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="btnDialog"]')
    ).toBeTruthy();
  });

  it('should open the dialog', () => {
    var btn = fixture.nativeElement.querySelector('[data-test="btnDialog"]');
    btn.click();

    expect(dialogService.open).toHaveBeenCalled();
  });
});
