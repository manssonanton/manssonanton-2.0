import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from '../../Services/photo.service';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { useAnimation, trigger, transition, style, animate } from '@angular/animations';
import { scaleIn, scaleOut } from '../../Animations/carousel.animations';
import { photoDetails } from '../../Shared/photoDetails'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger("animation", [
      transition("void => *", [useAnimation(scaleIn, { params: { time: '700ms' } })]),
      transition("* => void", [useAnimation(scaleOut, { params: { time: '500ms' } })]),
    ]),
  ]
})
export class PortfolioComponent implements OnInit {

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  myOptions: NgxMasonryOptions = {
    percentPosition: true,
    gutter: 50,
  };
  animations = {
    show: [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1 })),
    ],
    hide: [
      style({ opacity: '*' }),
      animate('400ms ease-in', style({ opacity: 0 })),
    ]
  }
  limit: number = 15;
  page: number = 0;
  viewPhotoUrls: photoDetails[] = [];
  photoUrls: string[] = [];
  photoDetails: photoDetails[] = [];
  errMsg: string;

  constructor(
    private photoService: PhotoService,
  ) { }

  ngOnInit() {
    this.requestPhotos();
  }

  requestPhotos() {
    this.photoService.getPhotos()
      .subscribe(res => {
        this.photoDetails = res
        this.loadMorePhotos();
        this.sortByLargestDate(this.viewPhotoUrls);
      },
        errMsg => this.errMsg = <any>errMsg);
  }

  sortPhotos() {
    const text = document.querySelector("#change-sort") as HTMLElement;
    if (text.innerText !== 'LATEST') {
      text.innerText = 'LATEST';
      this.viewPhotoUrls = this.sortByLargestDate(this.viewPhotoUrls);

    } else {
      text.innerText = 'OLDEST';
      this.viewPhotoUrls = this.sortBysmallestDate(this.viewPhotoUrls)
    }
    this.masonry.reloadItems();
    this.masonry.layout();
  }

  sortByLargestDate(photoDetails: photoDetails[]) {
    return photoDetails.sort((a, b) => {
      return <any>new Date(b.Date) - <any>new Date(a.Date);
    });
  }
  sortBysmallestDate(photoDetails: photoDetails[]) {
    return photoDetails.sort((a, b) => {
      return <any>new Date(a.Date) - <any>new Date(b.Date);
    });
  }

  openModal(ev) {
    const original = document.querySelector(".full-img") as HTMLImageElement;
    const modal = document.querySelector(".modal") as HTMLElement;
    original.src = ev.target.src;
    modal.style.opacity = "1";
    modal.style.pointerEvents = "All";
  }

  closeModal() {
    const modal = document.querySelector(".modal") as HTMLElement;
    modal.style.opacity = "0";
    modal.style.pointerEvents = "None";
  }

  loadMorePhotos() {
    var count = Object.keys(this.photoDetails).length
    for (var i = (this.page * 15); i <= (this.page * 15 + 15); i++) {
      if (i === count) {  // Hide button in case we reac hthe end of the photos
        const button = document.getElementsByClassName("ViewMoreContainer")[0];
        if (button instanceof HTMLElement) {
          button.style.display = "none";
        }
        break;
      }
      else {
        this.viewPhotoUrls.push(this.photoDetails[i])
      }
    }
    this.page++
  }

}
