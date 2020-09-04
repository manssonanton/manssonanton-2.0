import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { images } from "../app/image.data";
import {photoDetails} from './photoDetails'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  // [x: string]: any;

  constructor(private http: HttpClient
  ) { }
  // randomPhotos(page: number = 1) {
  //   return this.http.get(`https://api.pexels.com/v1/curated?per_page=40&page=${page}`)
  // }
  // searchPhotos(query: string, page: number = 1) {
  //   return this.http.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15&page=${page}`)
  // }
  getPhotos(): Observable<photoDetails[]> {
    return this.http.get<photoDetails[]>(`https://manssonanton.com/pictures/photolist.php`)
  }

  // fetchImages(): Observable<any> {
  //   return of(images);
  // }

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

  public getHomePhotos() {
    return this.http.get("https://manssonanton.com/pictures/home/photolistHome.php")
  }
}