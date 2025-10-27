import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-expertise',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './expertise-page.component.html',
    styleUrls: ['./expertise-page.component.css']
})
export class ExpertisePageComponent {
    isExpanded: boolean = false;

    expandPanel() {
        this.isExpanded = true;
    }

    closePanel() {
        this.isExpanded = false;
    }
}
