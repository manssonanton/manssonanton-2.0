import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { useAnimation, trigger, transition, state, style, animate } from '@angular/animations';
import { scaleIn, scaleOut } from '../carousel.animations';
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
    // horizontalOrder: true,
    gutter: 19,
    // percentPosition: true,
    resize: true,
    initLayout: true,
    fitWidth: true,
    // originTop: true
  };
  // query: any = <any>{};
  page: number = 0;
  // photoUrls: string[] = [
  //   "../assets/Pictures/niseko.jpg",
  //   "../assets/Pictures/niseko.jpg",
  //   "../assets/Pictures/niseko.jpg",
  //   "../assets/Pictures/niseko.jpg",
  //   "../assets/Pictures/niseko.jpg",
  //   "../assets/Pictures/niseko.jpg",
  //   "../assets/Pictures/niseko.jpg",
  // ];
  viewPhotoUrls: string[] = [];
  photoUrls: string[] = [];
  images = [];
  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.requestPhotos();
  }


  requestPhotos() {
    this.photoService.getPhotos()
      .subscribe(res => {
        this.photoUrls = this.photoUrls.concat((res as any).PhotoData.map(p => "https://manssonanton.com/pictures/" + p.Url));  // Sett it to the correct url
        this.photoUrls.splice(-1, 1)  // REmove the last row, PhP bug in the script on backend
        this.loadMorePhotos()   // Load the first 15 images to view
      })
  }


  onImageLoad(evt) {
    if (evt && evt.target) {
      const x = evt.srcElement.x;
      const y = evt.srcElement.y;
      const width = evt.srcElement.width;
      const height = evt.srcElement.height;
      var portrait = height > width ? true : false;
      if (portrait === false) {
        evt.target.parentElement.className = "masonry-item-wide"
      }
    }
  }

  loadMorePhotos() {
    this.page++
    var count = this.viewPhotoUrls.length
      for (var i = count; i < (this.page*15); i++) {
        if(this.photoUrls[i] === undefined){  // Hide button in case we reac hthe end of the photos
          const button = document.getElementsByClassName("ViewMoreContainer")[0];
          if (button instanceof HTMLElement) {
            button.style.display = "none";
          }
          break;
        }
        else{
        this.viewPhotoUrls[i] = this.photoUrls[i]
        }
      }
  }
}


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