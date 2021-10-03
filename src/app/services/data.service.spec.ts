import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


describe('DataService', () => {

  let dataService: DataService;
  let httpClient: HttpClient;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,MatDialogModule]
  }));

  beforeEach(() => {

    dataService = TestBed.get(DataService);
    httpClient = TestBed.get(HttpClient);

  });


});     