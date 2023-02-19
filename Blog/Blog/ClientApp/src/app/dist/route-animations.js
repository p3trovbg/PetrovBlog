"use strict";
exports.__esModule = true;
exports.slideInAnimation = void 0;
var animations_1 = require("@angular/animations");
exports.slideInAnimation = animations_1.trigger('routeAnimations', [
    animations_1.transition('Home => *', [
        animations_1.query(':enter, :leave', animations_1.style({ position: 'fixed', width: '100%' }), { optional: true }),
        animations_1.group([
            animations_1.query(':enter', [
                animations_1.style({ transform: 'translateX(100%)' }),
                animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            animations_1.query(':leave', [
                animations_1.style({ transform: 'translateX(0%)' }),
                animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    animations_1.transition('Article => Home', [
        animations_1.query(':enter, :leave', animations_1.style({ position: 'fixed', width: '100%' }), { optional: true }),
        animations_1.group([
            animations_1.query(':enter', [
                animations_1.style({ transform: 'translateX(-100%)' }),
                animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            animations_1.query(':leave', [
                animations_1.style({ transform: 'translateX(0%)' }),
                animations_1.animate('0.5s ease-in-out', animations_1.style({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
]);
