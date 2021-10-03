import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  
  objModel!:any;
  total:number = 0
  day:number = 0;
  
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private matDIalogRef:MatDialogRef<DetailsComponent>) { }
  
  ngOnInit(): void {
    this.objModel = this.data;
  }
  
  closeDialog() {
    this.matDIalogRef.close();
  }

  calculateTotal(days: number, price: string):number {
    if(days<=0)
      return 0;

    let total = (days * parseFloat(price))

    return total;
  }
}
