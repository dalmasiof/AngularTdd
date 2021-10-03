import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss'],
})
export class HomesComponent implements OnInit {
  home$!: Observable<any[]>;

  constructor(private dataService:DataService, private dialogSvc:DialogService) {}

  ngOnInit(): void {
    

    this.home$ = this.dataService.getHomes$();
  }

  public openDialog(info:any){
    this.dialogSvc.open(info)
  }
}
