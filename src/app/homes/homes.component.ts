import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss'],
})
export class HomesComponent implements OnInit {
  home$!: Observable<any[]>;

  constructor(private dataService:DataService) {}

  ngOnInit(): void {
    

    this.home$ = this.dataService.getHomes$();
  }
}
