import { Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { IntroductionPageComponent } from './second-page/introduction-page.component';
import { ExpertisePageComponent } from './expertise-page/expertise-page.component';

export const routes: Routes = [
    { path: '', component: FirstPageComponent },
    { path: 'introduction', component: IntroductionPageComponent },
    { path: 'expertise', component: ExpertisePageComponent }
];
