import {
  style,
  animate,
  animation,
  keyframes,
  query,
  trigger,
  transition,
  group
} from "@angular/animations";


// =========================
// Fade
// =========================
export const fadeIn = animation([
  style({ opacity: 0 }), // start state
  animate('100ms', style({ opacity: 1 }))
]);

export const fadeOut = animation([
  animate('100ms', style({ opacity: 0 }))
]);

export const scaleIn = animation([
  style({ opacity: 0, transform: "scale(0.8)" }), // start state
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1, transform: "scale(1)" })
  )
]);

export const scaleOut = animation([
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 0, transform: "scale(0.5)" })
  )
]);

export const sideIn = animation([
  style({ opacity: 0, transform: "scale(0.5)" }), // start state
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1, transform: "scale(1)" })
  )
]);

export const sideOut = animation([
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 0, transform: "scale(0.5)" })
  )
]);

export const loadIn = animation([
  style({ opacity: 0, transform: "scale(0.5)" }), // start state
  animate(
    "{{time}} 1s cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1, transform: "scale(1)" })
  )
]);

export const loadOut = animation([
  animate(
    "{{time}} 1s cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 0, transform: "scale(0)" })
  )
]);


export const resetRoute = [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'fixed', // using absolute makes the scroll get stuck in the previous page's scroll position on the new page
        top: 0, // adjust this if you have a header so it factors in the height and not cause the router outlet to jump as it animates
        left: 0,
        width: '100%',
        opacity: 0,
      }),
    ],
    { optional: true }
  ),
];

// Fade Animation
export const routeFadeAnimation = animation([
  trigger('routeFadeAnimation', [
    transition('* => *', [
      // ...resetRoute,
      query(':enter', [style({ opacity: 0 })], {
        optional: true,
      }),
      group([
        query(
          ':leave',
          [style({ opacity: 1 }), animate('0.9s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.9s', style({ opacity: 1 }))],
          { optional: true }
        ),
      ]),
    ]),
  ])
]);