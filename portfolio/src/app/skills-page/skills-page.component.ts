import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './skills-page.component.html',
    styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent {
}
