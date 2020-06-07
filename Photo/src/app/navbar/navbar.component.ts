import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { useAnimation, trigger, transition, state, style, animate } from '@angular/animations';
import { scaleIn, scaleOut } from '../carousel.animations';

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
  // @ViewChild('topNav') topNav: HTMLElement;
  prevScrollpos = window.pageYOffset;
  isToggled: Boolean;

  constructor() { }

  ngOnInit(): void {
    this.toggleMenu();
  }

  toggleMenu(){
    console.log(this.isToggled);  
    this.isToggled = !this.isToggled;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    console.log("scrolling");
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
