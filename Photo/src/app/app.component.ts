import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements AfterViewInit {

  constructor(
  ) { }


  ngAfterViewInit(): void {
    this.cursorStyle();
    this.cursorHoverStyle();
  }

  cursorHoverStyle() {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    const hamburger = document.querySelector(".hamburger") as HTMLElement;
    const navHamburger = document.querySelector(".NavMenuhamburger") as HTMLElement;
    // const ViewMoreButton = document.querySelector(".ViewMoreButton") as HTMLElement;
    // const shortText = document.querySelector("#short-text") as HTMLElement;
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
    // shortText.addEventListener('mouseover', () => {
    //   cursor.classList.add('link-grow');
    // });
    // shortText.addEventListener('mouseleave', () => {
    //   cursor.classList.remove('link-grow');
    // });
    // ViewMoreButton.addEventListener('mouseover', () => {
    //   cursor.classList.add('link-grow');
    // });
    // ViewMoreButton.addEventListener('mouseleave', () => {
    //   cursor.classList.remove('link-grow');
    // });
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