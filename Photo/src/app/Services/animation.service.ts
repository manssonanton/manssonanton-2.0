import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  scollToCenterElement(element: ElementRef) {
    element.nativeElement.scrollIntoView({behavior:"smooth",
    block: 'center',
    inline: 'center'});
  }

  scollToTopElement(element: ElementRef) {
    element.nativeElement.scrollIntoView({behavior:"smooth",
    block: 'start',
    inline: 'start'});
  }

  backInLeftAnimation(element: ElementRef){
    element.nativeElement.classList.add('animate__animated');
    element.nativeElement.classList.add('animate__backInLeft');
    element.nativeElement.classList.add('animate__delay-0.2s');
  }
  backInRightAnimation(element: ElementRef){
    element.nativeElement.classList.add('animate__animated');
        element.nativeElement.classList.add('animate__backInRight');
        element.nativeElement.classList.add('animate__delay-0.2s');
  }
  fadeInUpAnimation(element: ElementRef){
    element.nativeElement.classList.add('animate__animated');
        element.nativeElement.classList.add('animate__fadeInUp');
        element.nativeElement.classList.add('animate__delay-0.4s');
  }
  fadeInAnimation(element: ElementRef){
    element.nativeElement.classList.add('animate__animated');
        element.nativeElement.classList.add('animate__fadeInUp');
        element.nativeElement.classList.add('animate__delay-0.6s');
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
