import { Component, OnInit, AfterViewInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements AfterViewInit {

  constructor(
    private renderer: Renderer2,
    private elem: ElementRef
  ) { }


  ngAfterViewInit(): void {
    this.cursorStyle();
    this.cursorHoverStyle();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  cursorHoverStyle() {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    const hamburger = document.querySelector(".hamburger") as HTMLElement;
    const navHamburger = document.querySelector(".NavMenuhamburger") as HTMLElement;
    const links = document.getElementsByTagName('a');
    for (let link of links) {
      link.addEventListener('mouseover', () => {
        cursor.classList.add('link-grow');
      });
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-grow');
      });
    }
    hamburger.addEventListener('mouseover', () => {
      cursor.classList.add('link-grow');
    });
    hamburger.addEventListener('mouseleave', () => {
      cursor.classList.remove('link-grow');
    });
    navHamburger.addEventListener('mouseover', () => {
      cursor.classList.add('link-grow');
    });
    navHamburger.addEventListener('mouseleave', () => {
      cursor.classList.remove('link-grow');
    });
  }
  cursorStyle() {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    window.addEventListener('mousemove', e =>{
      cursor.style.top = (e.pageY + 'px');
      cursor.style.left = (e.pageX + 'px');
    });

    window.addEventListener('click', e =>{
      cursor.classList.add('expand');
      setTimeout(() =>{
        cursor.classList.remove('expand');
      }, 500);
    });
  }
}


// cursorStyle() {
//   window.addEventListener('mousemove', this.cursorFunction);
// }

// cursorFunction(e) {
//   const cursor = document.querySelector(".cursor") as HTMLElement;
//   cursor.style.top = (e.pageY + 'px');
//   cursor.style.left = (e.pageX + 'px');
// }