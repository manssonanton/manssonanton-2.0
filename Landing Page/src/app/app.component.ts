import { Component, AfterViewInit, AfterContentInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, sequence, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [       // metadata array
    trigger('loadingAnimation', [     // trigger block
      state('true', style({      // final CSS following animation
        opacity: '0',
        transform: 'translateY(-10px)'
      })),
      state('false', style({
        // backgroundColor: 'red'
      })),
      transition('false => true', sequence([animate('900ms 700ms ease-in', keyframes([
        style({ transform: 'scale(1,1) translateY(0)' }),
        style({ color: 'green' }),
        style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
        style({ transform: 'scale(0.95, 1.05) translateY(-7px)' }),
        style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
        style({ transform: 'scale(1,1) translateY(-3px)' }),
        style({ transform: 'scale(1,1) translateY(0)' }),
        style({ transform: 'rotateX(-90deg)', transformStyle: 'preserve-3d' }),
      ])),
      ]))
    ]),
    trigger('welcomeAnimation', [
      state('true', style({
        opacity: '1',
      })),
      state('false', style({
        opacity: '0',
      })),
      transition('false => true', [
        style({ width: '0px', overflow: 'hidden' }),
        group([
          animate('900ms 600ms ease-out', style({ width: '!' })),

          query('#welcome-text', [
            style({ transform: 'translateX(-110%)' }),
          ], { optional: true }),
        ]),
      ]),
    ]),
    trigger('nameAnimation', [
      state('true', style({
        opacity: '1',
        width: '!',
      })),
      state('false', style({
        opacity: '0',
      })),
      transition('false => true', [
          animate('50ms 700ms ease-out'),
      ]),
    ]),
    trigger('changeView', [
      state('initial', style({      
        width: '70vh',
        opacity: '1'
      })),
      state('final', style({
        width: '0vh',
        opacity: '0',
        transform: 'translateX(-110vw)'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class AppComponent implements AfterContentInit {

  private typewriter_text: string = "WELCOME I'M";
  public typewriter_display: string = "";
  public countdown_value: number = 0;
  public isLoaded = 'false'
  public isCompleted = 'false'
  currentState = 'initial';

changeState() {
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
}

  ngAfterContentInit() {
    this.counterCallback(this);
    this.typingCallback(this);
    // this.cursorStyle();
    this.cursorHoverStyle();
  }


  counterCallback(that) {
    if (that.countdown_value < 100) {
      that.countdown_value++;
      setTimeout(that.counterCallback, (90 - that.countdown_value), that);
    } else {
      that.isLoaded = 'true';
      that.cursorStyle();
    }

  }
  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length === 0) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 7000, that);
    } else {
      if (current_length < total_length) {
        that.typewriter_display += that.typewriter_text[current_length];
        setTimeout(that.typingCallback, 200, that);
      }else{
        that.isCompleted = true
      }
    }
  }

  cursorHoverStyle() {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    const btn = document.querySelector(".continue-btn") as HTMLElement;

    btn.addEventListener('mouseover', () => {
      cursor.classList.add('link-grow');
    });
    btn.addEventListener('mouseleave', () => {
      cursor.classList.remove('link-grow');
    });
  }
  cursorStyle() {
    window.addEventListener('mousemove', this.cursorFunction);
  }

  cursorFunction(e) {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    cursor.style.top = (e.pageY + 'px');
    cursor.style.left = (e.pageX + 'px');
  }
}
