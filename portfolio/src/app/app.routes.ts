import { Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { IntroductionPageComponent } from './second-page/introduction-page.component';
import { ExpertisePageComponent } from './expertise-page/expertise-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { OtherWorkPageComponent } from './other-work-page/other-work-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    { path: '', component: FirstPageComponent },
    { path: 'introduction', component: IntroductionPageComponent },
    { path: 'expertise', component: ExpertisePageComponent },
    { path: 'projects', component: ProjectsPageComponent },
    { path: 'other-work', component: OtherWorkPageComponent },
    { path: 'skills', component: SkillsPageComponent },
    { path: 'contact', component: ContactPageComponent }
];
