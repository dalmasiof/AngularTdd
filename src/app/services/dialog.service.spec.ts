import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { spyOnClass } from 'jasmine-es6-spies';

import { DialogService } from './dialog.service';

describe('DialogService', () => {
  let service: DialogService;
  let matDialog: MatDialog;  // let dataService:jasmine.SpyObj<DataService>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatDialogModule,BrowserAnimationsModule]
      , providers:[MatDialog, { provide: MatDialog, useFactory: () => spyOnClass(MatDialog) }]
    });
    
    service = TestBed.inject(DialogService);
    matDialog = TestBed.inject(MatDialog);

    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open the dialog',()=>{

    service.open();
    expect(matDialog.open).toHaveBeenCalled();


  })

  

});
