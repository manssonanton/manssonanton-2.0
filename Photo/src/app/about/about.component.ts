import { Component, OnInit } from '@angular/core';
import { trigger, useAnimation, transition } from '@angular/animations';
import { scaleIn, scaleOut } from '../carousel.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, {params: { time: '700ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
