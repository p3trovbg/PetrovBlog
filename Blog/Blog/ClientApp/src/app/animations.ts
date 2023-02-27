import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, AnimationMetadata
  } from '@angular/animations';
  
  export const transitionAnimation = animation([
    style({
      height: '{{ height }}',
      opacity: '{{ opacity }}',
      backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
  ]);
  
  // Routable animations
  export const slideInAnimation =
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'inherit',
            transform: 'translateY(-100%)'
          })
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'translateY(-100%)' },)
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('700ms ease-out', style({ transform: 'translateY(100%)', opacity: 0 })),
          ], { optional: true }),
          query(':enter', [
            animate('900ms ease-out', style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query('@*', animateChild(), { optional: true })
        ]),
      ])
    ]);