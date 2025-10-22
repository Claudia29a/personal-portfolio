import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-introduction',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './introduction-page.component.html',
    styleUrls: ['./introduction-page.component.css']
})
export class IntroductionPageComponent { }
