import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { PhotoService } from '../photo.service';
import { useAnimation, transition, trigger } from '@angular/animations';
import { scaleIn, scaleOut } from '../carousel.animations';

@Component({
  selector: 'app-kyoto',
  templateUrl: './kyoto.component.html',
  styleUrls: ['./kyoto.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, { params: { time: '500ms' } })]),
      transition("* => void", [useAnimation(scaleOut, { params: { time: '500ms' } })]),
    ])
  ]
})
export class KyotoComponent implements OnInit {
  myOptions: NgxMasonryOptions = {
    horizontalOrder: true,
    gutter: 19,
		resize: true,
		initLayout: true,
    fitWidth: true,
    originTop: true
  };
  photoUrls: string[] = [];

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.requestPhotos();
  }
  requestPhotos() {
    this.photoService.getKyotoPhotos()
      .subscribe(res => {
        this.photoUrls = this.photoUrls.concat((res as any).PhotoData.map(p => "https://manssonanton.com/pictures/kyoto/" + p.Url));
        this.photoUrls.splice(-1,1)
      })
  }
}
