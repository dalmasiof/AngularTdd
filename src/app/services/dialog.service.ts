import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  open(info:any){
    this.dialog.open(DetailsComponent,{
      data:info,
      width:"250px"
    });
  }


}
