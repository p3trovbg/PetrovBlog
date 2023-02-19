"use strict";
exports.__esModule = true;
exports.slideInAnimation = exports.transitionAnimation = void 0;
var animations_1 = require("@angular/animations");
exports.transitionAnimation = animations_1.animation([
    animations_1.style({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    animations_1.animate('{{ time }}')
]);
// Routable animations
exports.slideInAnimation = animations_1.trigger('routeAnimations', [
    animations_1.transition('HomePage <=> AboutPage', [
        animations_1.style({ position: 'relative' }),
        animations_1.query(':enter, :leave', [
            animations_1.style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        animations_1.query(':enter', [
            animations_1.style({ left: '-100%' })
        ]),
        animations_1.query(':leave', animations_1.animateChild()),
        animations_1.group([
            animations_1.query(':leave', [
                animations_1.animate('300ms ease-out', animations_1.style({ left: '100%' }))
            ]),
            animations_1.query(':enter', [
                animations_1.animate('300ms ease-out', animations_1.style({ left: '0%' }))
            ]),
        ]),
    ]),
    animations_1.transition('* <=> *', [
        animations_1.style({ position: 'relative' }),
        animations_1.query(':enter, :leave', [
            animations_1.style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        animations_1.query(':enter', [
            animations_1.style({ left: '-100%' })
        ]),
        animations_1.query(':leave', animations_1.animateChild()),
        animations_1.group([
            animations_1.query(':leave', [
                animations_1.animate('200ms ease-out', animations_1.style({ left: '100%', opacity: 0 }))
            ]),
            animations_1.query(':enter', [
                animations_1.animate('300ms ease-out', animations_1.style({ left: '0%' }))
            ]),
            animations_1.query('@*', animations_1.animateChild())
        ]),
    ])
]);
