import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from '../photo.service';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { useAnimation, trigger, transition } from '@angular/animations';
import { scaleIn, scaleOut } from '../carousel.animations';
import { photoDetails } from '../photoDetails'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger("animation", [
      transition("void => *", [useAnimation(scaleIn, { params: { time: '700ms' } })]),
      transition("* => void", [useAnimation(scaleOut, { params: { time: '500ms' } })]),
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  myOptions: NgxMasonryOptions = {
    percentPosition: true,
    gutter: 100
  };

  page: number = 0;
  viewPhotoUrls: photoDetails[] = [];
  photoUrls: string[] = [];
  photoDetails: photoDetails[] = []


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
      })
    // this.photoService.getPhotos()
    // .subscribe(res => {
    //   this.photoUrls = this.photoUrls.concat((res as any).PhotoData.map(p => "https://manssonanton.com/pictures/" + p.Url));  // Sett it to the correct url
    //   this.photoUrls.splice(-1, 1)  // REmove the last row, PhP bug in the script on backend
    //   this.loadMorePhotos()   // Load the first 15 images to view
    // })
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
    // console.log(this.photoDetails);
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

  filterPhotos() {

  }

  openModal(ev) {
    const original = document.querySelector(".full-img") as HTMLImageElement;
    const modal = document.querySelector(".modal") as HTMLElement;
    // modal.classList.add(".modal.open");
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




  // onImageLoad(evt) {
  //   if (evt && evt.target) {
  //     const x = evt.srcElement.x;
  //     const y = evt.srcElement.y;
  //     const width = evt.srcElement.width;
  //     const height = evt.srcElement.height;
  //     var portrait = height > width ? true : false;
  //     if (portrait === false) {
  //       evt.target.parentElement.className = "masonry-item masonry-item-wide"
  //     }
  //   }
  // }
  // loadImages(): void {
  //   this.photoService.fetchImages()
  //     .subscribe(images => this.photoUrls = images);
  //     this.preloadImages()
  // }

  // preloadImages() {
  //   for (const slide of this.photoUrls) {
  //     var imageSize = new Image().src = slide;
  //     imageSize.onload = function() { callback(this.width, this.height); }
  //     console.log(imageSize);
  //   }
  // }
  // onScroll() {
  //   this.page++
  //   if (!this.query.search) {
  //     // this.getPhotos();
  //     // console.log("getphotos")
  //   }
  //   else {
  //     // this.requestSearchPhotos();
  //   }
  // }
  // getPhotos() {
  //   this.photoService.randomPhotos(1)
  //     .subscribe(res => {
  //       this.photoUrls = (res as any).photos.map(p => p.src.original);
  //     });
  // }

  // requestSearchPhotos() {
  //   this.photoService.searchPhotos(this.query.search, this.page)
  //     .subscribe(res => {
  //       this.photoUrls = this.photoUrls.concat((res as any).photos.map(p => p.src.original));
  //     })
  // }