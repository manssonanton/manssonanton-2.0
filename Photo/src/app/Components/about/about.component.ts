import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { trigger, transition, query, style, group, animate } from '@angular/animations';
import { resetRoute } from '../../Animations/carousel.animations';
import { AnimationService } from '../../Services/animation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('routeFadeAnimation', [
      transition('* => *', [
        ...resetRoute,
        query(':enter', [style({ opacity: 0 })], {
          optional: true,
        }),
        group([
          query(
            ':leave',
            [style({ opacity: 1 }), animate('3s', style({ opacity: 0 }))],
            { optional: true }
          ),
          query(
            ':enter',
            [style({ opacity: 0 }), animate('3s', style({ opacity: 1 }))],
            { optional: true }
          ),
        ]),
      ]),
    ])
  ]
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutText') aboutText;
  @ViewChildren('aboutHeader,img1') elementArrayFromLeft;
  @ViewChildren('img2,articleText') elementArrayFromRight;
  @ViewChildren('nameHeader,nameSubHeader,scrollClick') elementArrayFade;

  constructor(private animationService: AnimationService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.checkScroll()
    }, 100);
  }

  ngOnInit(): void {
  }

  scrollDown() {
    this.animationService.scollToTopElement(this.aboutText)
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
}
