import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('Contact => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateY(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateY(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.01s ease-in-out',
                        style({ transform: 'translateY(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Home => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateY(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateY(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.01s ease-in-out',
                        style({ transform: 'translateY(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('About => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateY(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateY(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.01s ease-in-out',
                        style({ transform: 'translateY(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Portfolio => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%', minHeight: '100vh' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateY(100%)' }),
                    animate('0.1s ease-in-out',
                        style({ transform: 'translateY(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.01s ease-in-out',
                        style({ transform: 'translateY(100%)' }))
                ], { optional: true }),
            ])
        ]),
        //  transition('About => Contact', [
        //        query(':enter, :leave', 
        //            style({ position: 'fixed', width: '100%' }), 
        //            { optional: true }),
        //        group([
        //            query(':enter', [
        //                style({ transform: 'translateY(100%)' }),
        //                animate('0.5s ease-in-out', 
        //                style({ transform: 'translateY(0%)' }))
        //            ], { optional: true }),
        //            query(':leave', [
        //                style({ transform: 'translateY(0%)' }),
        //                animate('0.1s ease-in-out', 
        //                style({ transform: 'translateY(100%)' }))
        //            ], { optional: true }),
        //        ])
        //  ]),
        //  transition('About => Home', [
        //        query(':enter, :leave', 
        //            style({ position: 'fixed', width: '100%' }), 
        //            { optional: true }),
        //        group([
        //            query(':enter', [
        //                style({ transform: 'translateY(100%)' }),
        //                animate('0.5s ease-in-out', 
        //                style({ transform: 'translateY(0%)' }))
        //            ], { optional: true }),
        //            query(':leave', [
        //                 style({ transform: 'translateY(0%)' }),
        //                 animate('0.1s ease-in-out', 
        //                 style({ transform: 'translateY(100%)' }))
        //            ], { optional: true }),
        //        ])
        // ]),
    ]);