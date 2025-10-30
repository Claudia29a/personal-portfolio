import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh',
        backfaceVisibility: 'hidden',
      })
    ], { optional: true }),
    
    query(':enter', [
      style({ 
        transform: 'rotateY(-90deg)',
        transformOrigin: 'left center',
        opacity: 0,
        zIndex: 1
      })
    ], { optional: true }),
    
    query(':leave', [
      style({
        zIndex: 2
      })
    ], { optional: true }),
    
    group([
      query(':leave', [
        animate('600ms ease-out', style({ 
          transform: 'rotateY(90deg)',
          transformOrigin: 'right center',
          opacity: 0
        }))
      ], { optional: true }),
      
      query(':enter', [
        animate('600ms 50ms ease-out', style({ 
          transform: 'rotateY(0deg)',
          opacity: 1
        }))
      ], { optional: true })
    ])
  ])
]);
