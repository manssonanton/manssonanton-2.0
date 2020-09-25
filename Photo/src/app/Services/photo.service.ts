import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import {photoDetails} from './../Shared/photoDetails'
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }


  // randomPhotos(page: number = 1) {
  //   return this.http.get(`https://api.pexels.com/v1/curated?per_page=40&page=${page}`)
  // }
  // searchPhotos(query: string, page: number = 1) {
  //   return this.http.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15&page=${page}`)
  // }


  getPhotos(): Observable<photoDetails[]> {
    return this.http.get<photoDetails[]>(`https://manssonanton.com/pictures/photolist.php`)
    .pipe(catchError(this.processHTTPMsgService.handleError));
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

  public getHomePhotos() {
    return this.http.get("https://manssonanton.com/pictures/home/photolistHome.php")
  }
}