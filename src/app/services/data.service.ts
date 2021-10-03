import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() {}


  getHomes$() {
    
    return of([
      {
        "title": "Home 1",
        "image": "assets/listing.jpg",
        "location": "new york",
        "price": "125"
      },
      {
        "title": "Home 2",
        "image": "assets/listing.jpg",
        "location": "boston", 
        "price": "225"
      },
      {
        "title": "Home 3",
        "image": "assets/listing.jpg",
        "location": "chicago",
        "price": "325"
      }
    ])

  } 
}
