import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { useAnimation, trigger, transition, state, style, animate } from '@angular/animations';
import { scaleIn, scaleOut } from '../carousel.animations';
import {
  CSSPlugin,
  TweenMax,
  TimelineMax,
  Linear
} from "gsap/all";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('test', [
        state('true', style({ transform: "translate(0px, -100%)", overflow: "hidden" })),
        state('false', style({ transform: "translate(0px, 0px)"
        ,overflow: "visible"})),
        transition('1 => 0', animate("0.5s ease-in-out")),
        transition('0 => 1', animate("0.3s ease-in-out"))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // @ViewChild('NavLink') NavLink: HTMLElement;
  prevScrollpos = window.pageYOffset;
  isToggled: Boolean;


  constructor(

  ) { }

  ngOnInit(): void {

    this.toggleMenu();
  }

  toggleMenu(){
    this.isToggled = !this.isToggled;
    const tl = new TimelineMax({delay: 0.5});
    if (!this.isToggled){
      var targetObject = document.getElementsByClassName('NavLink');
      Array.from(targetObject).forEach((el) => {
        tl.fromTo(el, 0.25, { opacity:"0" },
        { opacity:"1" });
        tl.play();
    });

    }
    else{

    }
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    let navBar = document.getElementById("topNav") as HTMLElement;
    var currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      navBar.style.transform = "translateY(0)";
    } else {
      navBar.style.transform = "translateY(-100%)";
    }
    this.prevScrollpos = currentScrollPos;
  } 
}
