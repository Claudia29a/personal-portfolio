import { Component } from '@angular/core';
import { RouterModule, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="page-wrapper" [class.page-flip]="isFlipping">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .page-wrapper {
      transition: transform 0.6s ease-out, opacity 0.6s ease-out;
      transform-origin: center;
      transform-style: preserve-3d;
    }
    
    .page-wrapper.page-flip {
      animation: flipPage 0.6s ease-out;
    }
    
    @keyframes flipPage {
      0% {
        transform: perspective(2000px) rotateY(0deg);
        opacity: 1;
      }
      50% {
        transform: perspective(2000px) rotateY(90deg);
        opacity: 0;
      }
      100% {
        transform: perspective(2000px) rotateY(0deg);
        opacity: 1;
      }
    }
  `]
})
export class AppComponent {
  isFlipping = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isFlipping = true;
        setTimeout(() => {
          this.isFlipping = false;
        }, 600);
      }
    });
  }
}
