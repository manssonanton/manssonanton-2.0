import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { trigger, transition, useAnimation, style, animate, state } from '@angular/animations';
import { scaleIn, scaleOut, loadIn } from '../../Animations/carousel.animations';
import { PhotoService } from '../../Services/photo.service';
import { AnimationService } from '../../Services/animation.service';

const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-100%)"
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger("slideAnimation", [
      transition("void => *", [useAnimation(scaleIn, { params: { time: '500ms' } })]),
      transition("* => void", [useAnimation(scaleOut, { params: { time: '500ms' } })]),
    ]),
    trigger('showElement', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('600ms ease-in'))
    ])
  ]
})
export class HomeComponent implements AfterViewInit {

  @ViewChildren('centerImg,img1,img2') elementArrayFromLeft;
  @ViewChildren('img2') elementArrayFromRight;
  @ViewChildren('firstHeader,quote,centerImgText,quoteName,secHeader,scrollDown') elementArrayFade;
  @ViewChild('centerImg') centerImg;

  firstHeaderState = 'hide';
  hasAppeared: boolean = false;

  constructor(
    private animationService: AnimationService,
    // private photoService: PhotoService,
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.checkScroll()
    }, 200);
  }

  // onAppear() {
  //   console.log('apperared');
  //   this.hasAppeared = true;

  // }


  toCenterImg() {
    this.animationService.scollToCenterElement(this.centerImg)
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.elementArrayFromLeft.forEach(element => {
      const componentPosition = element.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > componentPosition - window.innerHeight) {
        this.animationService.backInLeftAnimation(element);
      }
    });
    this.elementArrayFromRight.forEach(element => {
      const componentPosition = element.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
      if (scrollPosition > componentPosition - window.innerHeight) {
        this.animationService.backInRightAnimation(element);
      }
    });
    this.elementArrayFade.forEach(element => {
      const componentPosition = element.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
      if (scrollPosition > componentPosition - window.innerHeight) {
        this.animationService.fadeInUpAnimation(element);
      }
    });
  }

  //  getHomePhotos() {
  //     this.photoService.getHomePhotos()
  //       .subscribe(res => {
  //         this.slides = this.slides.concat((res as any).PhotoData.map(p => "https://manssonanton.com/pictures/home/" + p.Url));
  //         this.slides.splice(-1, 1)
  //       })
  //   }
}
