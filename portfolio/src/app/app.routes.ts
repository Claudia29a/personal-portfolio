import { Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { IntroductionPageComponent } from './second-page/introduction-page.component';
import { ExpertisePageComponent } from './expertise-page/expertise-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { OtherWorkPageComponent } from './other-work-page/other-work-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    { path: '', component: FirstPageComponent, data: { animation: 'HomePage' } },
    { path: 'introduction', component: IntroductionPageComponent, data: { animation: 'IntroductionPage' } },
    { path: 'expertise', component: ExpertisePageComponent, data: { animation: 'ExpertisePage' } },
    { path: 'projects', component: ProjectsPageComponent, data: { animation: 'ProjectsPage' } },
    { path: 'other-work', component: OtherWorkPageComponent, data: { animation: 'OtherWorkPage' } },
    { path: 'skills', component: SkillsPageComponent, data: { animation: 'SkillsPage' } },
    { path: 'contact', component: ContactPageComponent, data: { animation: 'ContactPage' } }
];
