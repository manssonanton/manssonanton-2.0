import { Component, OnInit, HostListener } from '@angular/core';
import {
  gsap,
  TimelineMax
} from "gsap/all";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  prevScrollpos = window.pageYOffset;
  isToggled: Boolean;
  tl = new TimelineMax({ delay: 1, paused: true, reversed: true });

  constructor() {
    gsap.registerPlugin(TimelineMax);
    // gsap.config(
    //   nullTargetWarn: false
    // )
  }

  ngOnInit(): void {
    const navlinks = document.getElementsByClassName('NavLink');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    const navDivName = document.getElementById('navDivName');
    const topNav = document.getElementById('topNav');
    // const bottomLeft = document.getElementById('bottom-left');
    // const bottomRight = document.getElementById('bottom-right');
    const menu = document.getElementById('navMenuContainer');
    // const cross1 = document.getElementById('cross1');
    // const cross2 = document.getElementById('cross2');
    this.tl.fromTo(bar1, 0.1, { transform: "translate(0px, 0px)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, -200px)", overflow: "hidden", opacity: "0" })
    this.tl.fromTo(bar2, 0.1, { transform: "translate(0px, 0px)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, -200px)", overflow: "hidden", opacity: "0" })
    this.tl.fromTo(bar3, 0.1, { transform: "translate(0px, 0px)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, -200px)", overflow: "hidden", opacity: "0" })
    this.tl.fromTo(navDivName, 0.1, { transform: "translate(0px, 0px)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, -200px)", overflow: "hidden", opacity: "0" }, "-=0.2")
    this.tl.fromTo(topNav, 0.1, { transform: "translate(0px, 0px)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, -300px)", overflow: "hidden", opacity: "0" }, "-=0.2")
    // this.tl.fromTo(bottomLeft, 0.2, { transform: "translate(0px, 0px) rotate(-90deg)", overflow: "visible", opacity: "1" }, { transform: "translate( 0px, 300px) rotate(-90deg)", overflow: "hidden", opacity: "0" }, "-=0.2")
    // this.tl.fromTo(bottomRight, 0.2, { transform: "translate(0px, 0px) rotate(90deg)", overflow: "hidden", opacity: "1" }, { transform: "translate( 0px, 300px) rotate(90deg)", overflow: "hidden", opacity: "0" }, "-=0.3")
    this.tl.fromTo(menu, 0.4, { transform: "translate(0px, -100%)", overflow: "hidden", visibility: "hidden" }, { transform: "translate(0px, 0px)", overflow: "visible", visibility: "Visible" }, "0")
    // this.tl.fromTo(cross1, 0.2, { opacity: "0" }, { transform: "translateY(0.043rem) rotate(134deg)", opacity: "1" }, "+=0")
    // this.tl.fromTo(cross2, 0.2, { opacity: "0" }, { transform: "translateY(-0.57rem) rotate(-134deg)", opacity: "1" })
    // this.tl.delay(2)
    Array.from(navlinks).forEach((el) => {
      this.tl.fromTo(el, 0.2, { opacity: "0", transform: "translateY( -100vh)" }, { opacity: "1", transform: "translateY( 0px)" }, ">0.1");
    });
  }

  toggleMenu() {
    this.isToggled = !this.isToggled;

    if (this.isToggled) {
      this.tl.play();
    }
    else {
      this.tl.reverse();
    }
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const navBar = document.getElementById("topNav") as HTMLElement;
    // const bottomRight = document.getElementById('bottom-right') as HTMLElement;
    const currentScrollPos = window.pageYOffset;


    if (this.prevScrollpos > currentScrollPos) {
      navBar.style.transform = "translateY(0)";
    } else {
      navBar.style.transform = "translateY(-100%)";
    }
    this.prevScrollpos = currentScrollPos;
    // if (currentScrollPos === 0) {
    //   bottomRight.style.visibility = "Hidden";
    //   bottomRight.style.opacity = "0";
    // }
    // else {
    //   bottomRight.style.visibility = "Visible";
    //   bottomRight.style.opacity = "1";
    // }
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
