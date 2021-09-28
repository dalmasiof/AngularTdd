import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataService } from '../data.service';

import { HomesComponent } from './homes.component';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService:jasmine.SpyObj<DataService>;

  let homesList: any[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomesComponent],
      imports:[HttpClientModule]
      
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    homesList = fixture.nativeElement.querySelectorAll('[data-test = "home"]');
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
    // debugger

    homesList = fixture.nativeElement.querySelectorAll(
      '[data-test = "home"]'
    );
    for (let i = 0; i < homesList.length; i++) {
      let elChildren = homesList[i].children as HTMLCollection;
      let childrenClassName = elChildren.namedItem('title')?.className;

      expect(childrenClassName == 'title').toBeTruthy();
    }

  });

  it('should have homes price', () => {
    homesList = fixture.nativeElement.querySelectorAll(
      '[data-test = "home"]'
    );
    for (let i = 0; i < homesList.length; i++) {
      let elChildren = homesList[i].children as HTMLCollection;
      let childrenClassName = elChildren.namedItem('price')?.className;

      expect(childrenClassName == 'price').toBeTruthy();
    }
  });

  it('should have homes country', () => {
    let homesList = fixture.nativeElement.querySelectorAll(
      '[data-test = "home"]'
    );  
    for (let i = 0; i < homesList.length; i++) {
      let elChildren = homesList[i].children as HTMLCollection;
      let childrenClassName = elChildren.namedItem('country')?.className;

      expect(childrenClassName == 'country').toBeTruthy();
    }
  });
});
