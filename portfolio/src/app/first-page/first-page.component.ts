import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-first-page',
    standalone: true,
    imports: [RouterModule], // <-- add this
    templateUrl: './first-page.component.html',
})
export class FirstPageComponent { }
