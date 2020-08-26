import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { useAnimation, trigger, transition, state, style, animate } from '@angular/animations';
import { scaleIn, scaleOut } from '../carousel.animations';
import {
  gsap,
  CSSPlugin,
  TweenMax,
  TimelineMax,
  Linear
} from "gsap/all";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  // animations: [
  //   trigger('test', [
  //       state('true', style({ transform: "translate(0px, -100%)", overflow: "hidden" })),
  //       state('false', style({ transform: "translate(0px, 0px)"
  //       ,overflow: "visible"})),
  //       transition('1 => 0', animate("0.5s ease-in-out")),
  //       transition('0 => 1', animate("0.3s ease-in-out"))
  //   ])
  // ]
})
export class NavbarComponent implements OnInit {
  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // @ViewChild('NavLink') NavLink: HTMLElement;
  prevScrollpos = window.pageYOffset;
  isToggled: Boolean;
  tl = new TimelineMax({ delay: 1, paused: true, reversed: true });

  constructor() {
    gsap.registerPlugin(TimelineMax);
  }

  ngOnInit(): void {
    var nalinks = document.getElementsByClassName('NavLink');
    var bar1 = document.getElementById('bar1');
    var bar2 = document.getElementById('bar2');
    var bar3 = document.getElementById('bar3');
    var navDivName = document.getElementById('navDivName');
    var topNav = document.getElementById('topNav');
    var bottomLeft = document.getElementById('bottom-left');
    var bottomRight = document.getElementById('bottom-right');
    var menu = document.getElementById('navMenuContainer');
    var cross1 = document.getElementById('cross1');
    var cross2 = document.getElementById('cross2');
    this.tl.fromTo(bar1, 0.1, { transform: "translate(0px, 0px)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, -300px)", overflow: "hidden", opacity: "0" })
    this.tl.fromTo(bar2, 0.1, { transform: "translate(0px, 0px)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, -300px)", overflow: "hidden", opacity: "0" })
    this.tl.fromTo(bar3, 0.1, { transform: "translate(0px, 0px)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, -300px)", overflow: "hidden", opacity: "0" })
    this.tl.fromTo(navDivName, 0.3, { transform: "translate(0px, 0px)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, -300px)", overflow: "hidden", opacity: "0" }, "-=0.2")
    this.tl.fromTo(topNav, 0.1, { transform: "translate(0px, 0px)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, -300px)", overflow: "hidden", opacity: "0" }, "-=0.2")
    this.tl.fromTo(bottomLeft, 0.3, { transform: "translate(0px, 0px) rotate(-90deg)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, 300px) rotate(-90deg)", overflow: "hidden", opacity: "0" }, "-=0.2")
    this.tl.fromTo(bottomRight, 0.3, { transform: "translate(0px, 0px) rotate(90deg)", overflow: "hidden", opacity: "1" }, { transform: "translate( 0px, 300px) rotate(90deg)", overflow: "hidden", opacity: "0" }, "-=0.3")
    this.tl.fromTo(menu, 0.4, { transform: "translate(0px, -100%)", overflow: "hidden", visibility: "hidden" }, { transform: "translate(0px, 0px)", overflow: "visible", visibility: "Visible" }, "+=0")
    this.tl.fromTo(cross1, 0.3, { opacity: "0" }, { transform: "translateY(0.043rem) rotate(134deg)", opacity: "1" }, "+=0")
    this.tl.fromTo(cross2, 0.3, { opacity: "0" }, { transform: "translateY(-0.57rem) rotate(-134deg)", opacity: "1" })
    Array.from(nalinks).forEach((el) => {
      // this.tl.fromTo(el, 0.1, { opacity: "0", width: "30%" }, { opacity: "1", width: "100%" });
      this.tl.fromTo(el, 0.3, { opacity: "0", transform: "translateY( 100vh)" }, { opacity: "1", transform: "translateY( 0px)" }, "-=0.2");
    });
  }

  toggleMenu() {
    this.isToggled = !this.isToggled;

    if (this.isToggled) {
      console.log("play");
      this.tl.play();
    }
    else {
      console.log("revers");
      this.tl.reverse();
    }
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    let navBar = document.getElementById("topNav") as HTMLElement;
    var bottomRight = document.getElementById('bottom-right') as HTMLElement;
    var currentScrollPos = window.pageYOffset;

    if (this.prevScrollpos > currentScrollPos) {
      navBar.style.transform = "translateY(0)";
    } else {
      navBar.style.transform = "translateY(-100%)";
    }
    this.prevScrollpos = currentScrollPos;
    if (currentScrollPos === 0) {
      bottomRight.style.visibility = "Hidden";
      bottomRight.style.opacity = "0";
    }
    else {
      bottomRight.style.visibility = "Visible";
      bottomRight.style.opacity = "1";
    }
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
