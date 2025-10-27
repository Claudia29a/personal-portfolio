import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-other-work',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './other-work-page.component.html',
    styleUrls: ['./other-work-page.component.css']
})
export class OtherWorkPageComponent {
}
