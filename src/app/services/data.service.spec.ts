import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';

describe('DataService', () => {
  let dataService: DataService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
    })
  );

  beforeEach(() => {
    dataService = TestBed.inject(DataService);
  });
  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should return list of homes', () => {
    let arrHomes: any[] = [];
    dataService.getHomes$().subscribe((x) => {
      arrHomes = x;
      expect(arrHomes.length > 0).toBeTruthy();
    });
  });

});
