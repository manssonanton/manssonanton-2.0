import { Component, OnInit } from '@angular/core';
import { trigger, useAnimation, transition, query, style, group, animate } from '@angular/animations';
import { scaleIn, scaleOut, routeFadeAnimation, resetRoute } from '../carousel.animations';

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
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
