import { Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { ExpertisePageComponent } from './second-page/expertise-page.component';

export const routes: Routes = [
    { path: '', component: FirstPageComponent },
    { path: 'expertise', component: ExpertisePageComponent }
];
