import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { images } from "../app/image.data";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  [x: string]: any;

  constructor(private http: HttpClient
  ) { }
  randomPhotos(page: number = 1) {
    return this.http.get(`https://api.pexels.com/v1/curated?per_page=40&page=${page}`)
  }
  searchPhotos(query: string, page: number = 1) {
    return this.http.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15&page=${page}`)
  }
  getPhotos() {
    return this.http.get(`https://manssonanton.com/pictures/photolist.php`)
    // return this.http.get(`/assets/test.txt`) // For testing purpose
  }

  fetchImages(): Observable<any> {
    return of(images);
  }

  public getJSON() {
    this.http.get("https://cors-anywhere.herokuapp.com/http://manssonanton.com/pictures/photolist.php").subscribe(data => {
      return data;
    },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      })
  }

  public getKyotoPhotos() {
    return this.http.get("https://manssonanton.com/pictures/kyoto/photolistKyoto.php")
  }

  public getOsakaPhotos() {
    return this.http.get("https://manssonanton.com/pictures/osaka/photolistOsaka.php")
  }

  public getNisekoPhotos() {
    return this.http.get("https://manssonanton.com/pictures/niseko/photolistNiseko.php")
  }

  public getTokyoPhotos() {
    return this.http.get("https://manssonanton.com/pictures/tokyo/photolistTokyo.php")
  }

  public getMalmoPhotos() {
    return this.http.get("https://manssonanton.com/pictures/malmo/photolistMalmo.php")
  }
}