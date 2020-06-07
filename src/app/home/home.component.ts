import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { scaleIn, scaleOut } from '../carousel.animations';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, { params: { time: '500ms' } })]),
      transition("* => void", [useAnimation(scaleOut, { params: { time: '500ms' } })]),
    ])
  ]
})
export class HomeComponent implements OnInit {
  // public slides = [
  // ];
  slides: string[] = [
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
  "../assets/Pictures/niseko.jpg",
// "../assets/Pictures/Malmö.jpg",
  ];
  images = [];
  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.getHomePhotos()
  }


 getHomePhotos() {
    this.photoService.getHomePhotos()
      .subscribe(res => {
        this.slides = this.slides.concat((res as any).PhotoData.map(p => "https://manssonanton.com/pictures/home/" + p.Url));
        this.slides.splice(-1, 1)
      })
  }
}
