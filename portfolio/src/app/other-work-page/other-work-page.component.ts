import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-other-work',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './other-work-page.component.html',
    styleUrls: ['./other-work-page.component.css']
})
export class OtherWorkPageComponent {
    currentSlide: number = 0;
    
    slides: string[] = [
        'assets/wildlife.jpg',
        'assets/livewall.png',
        'assets/breda.png',
    ];

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    }

    goToSlide(index: number) {
        this.currentSlide = index;
    }

    // Mobile popup state
    showMobilePopup: boolean = false;

    openPopup() {
        this.showMobilePopup = true;
    }

    closePopup() {
        this.showMobilePopup = false;
    }
}
