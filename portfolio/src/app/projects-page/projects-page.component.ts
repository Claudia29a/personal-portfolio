import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
}
