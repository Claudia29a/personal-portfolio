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
    // Popup state
    showMobilePopup: boolean = false;
    selectedCategory: string = '';

    // Skills data
    technicalSkills = [
        'HTML & CSS',
        'JavaScript',
        'Angular',
        'React.js',
        'Node.js',
        'MongoDB',
        'Figma',
        'Bootstrap',
        'Tailwind CSS',
        'Responsive Design',
        'Version Control (GIT)',
        'Flutter/Dart',
        'Kotlin/Java'
    ];

    professionalSkills = [
        'Project Management',
        'Agile Methodologies',
        'Scrum',
        'Project documentation',
        'Presenting',
        'Communication',
        'Organizing',
        'Punctuality'
    ];

    researchSkills = [
        'UX research',
        'Technical writing',
        'Market Research',
        'Data Analysis',
        'Target audience'
    ];

    openPopup(category: string) {
        this.selectedCategory = category;
        this.showMobilePopup = true;
    }

    closePopup() {
        this.showMobilePopup = false;
    }

    getSkillsList() {
        if (this.selectedCategory === 'technical') return this.technicalSkills;
        if (this.selectedCategory === 'professional') return this.professionalSkills;
        if (this.selectedCategory === 'research') return this.researchSkills;
        return [];
    }
}
