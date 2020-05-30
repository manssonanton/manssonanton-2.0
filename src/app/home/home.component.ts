import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { scaleIn, scaleOut } from '../carousel.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
    ])
  ]
})
export class HomeComponent implements OnInit {
  public slides = [
    { src: "../assets/Pictures/Kyoto.jpg" },
    { src: "../assets/Pictures/niseko.jpg" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
