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
    /* scale */
    transition("void => *", [useAnimation(scaleIn, {params: { time: '700ms' }} )]),
    transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
  ])
]
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
  myOptions: NgxMasonryOptions = {
    horizontalOrder: true,
    gutter: 19,
    // percentPosition: true,
		resize: true,
		initLayout: true,
    fitWidth: true,
    originTop: true
  };
  query: any = <any>{};
  page: number = 1;
//   photoUrls: string[] = [
//     "../assets/Pictures/Kyoto.jpg",
//   "../assets/Pictures/niseko.jpg",
// "../assets/Pictures/Malmö.jpg",
// "../assets/Pictures/DSC00476.jpg",
// "../assets/Pictures/Malmö.jpg",
// "../assets/Pictures/DSC00476.jpg",
// "../assets/Pictures/Malmö.jpg",
// "../assets/Pictures/DSC00476.jpg",
// "../assets/Pictures/Kyoto.jpg",
//   "../assets/Pictures/niseko.jpg",
// "../assets/Pictures/Malmö.jpg",
// "../assets/Pictures/Kyoto.jpg",
//   "../assets/Pictures/niseko.jpg",
// "../assets/Pictures/Malmö.jpg",
//   ];
photoUrls: string[] = [];
  images = [];
  constructor(
    private photoService: PhotoService
  ) { }
  ngAfterViewInit() {
//     this.masonry.reloadItems();
// this.masonry.layout();
//     console.log("layout");
  }
  ngOnInit() {
    this.requestPhotos();
    // this.preloadImages()
  }
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

  requestPhotos() {
    this.photoService.getPhotos()
      .subscribe(res => {
        this.photoUrls = this.photoUrls.concat((res as any).PhotoData.map(p => "https://manssonanton.com/pictures/" + p.Url));
        this.photoUrls.splice(-1,1)
      })
      // this.preloadImages()
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

  onImageLoad(evt) {
    if (evt && evt.target) {
      const x = evt.srcElement.x;
      const y = evt.srcElement.y;
        const width = evt.srcElement.width;
        const height = evt.srcElement.height;
        var portrait = height > width ? true : false;
        console.log('Loaded: ', width, height, 'portrait: ', portrait);
        if (portrait === false) {
          evt.target.parentElement.className = "masonry-item-wide"
          console.log("masonry-item-wide");
        }
    }
 }
  onScroll() {
    this.page++
    if (!this.query.search) {
      // this.getPhotos();
      console.log("getphotos")
    }
    else {
      // this.requestSearchPhotos();
    }
  }
}
