import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";
import { scaleIn, scaleOut, fadeOut, fadeIn } from '../carousel.animations';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [
      transition("void => *", [useAnimation(fadeIn, { params: { time: '500ms' } })]),
      transition("* => void", [useAnimation(fadeOut, { params: { time: '700ms' } })]),
    ])
  ]
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() slides;
  currentSlide = 0;
  interval;

  constructor() { }

  ngOnInit(): void {
    this.preloadImages();
  }
  ngAfterViewInit() {
    this.interval = setInterval(() => {
      this.onNextClick();
    }, 6000);
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
    this.interval.reset(6000);  
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
    this.interval.reset(6000);  
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide;
    }
  }
}
