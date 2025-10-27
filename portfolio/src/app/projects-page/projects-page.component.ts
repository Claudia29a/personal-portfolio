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
    currentSlide: number = 0;
    
    slides: string[] = [
        'assets/wildlife.jpg',
        'assets/livewall.png',
        'assets/breda.png',
        'assets/studio.png',
        'assets/trendradar.png',
        'assets/acdc.png',
        'assets/musicapp.png',
        'assets/petapp.png',
        'assets/photoblog.png',
        'assets/senzor.png'
    ];

    projectTexts: string[] = [
        'Currently, I am developing a new app from the ground up and enhancing an existing one, using Flutter and Dart for both implementation and design. This includes crafting intuitive user interfaces and refining overall app experiences through thoughtful design work.',
        'I developed an app from scratch as part of a collaborative team effort, actively brainstorming, researching, designing, and implementing solutions together with my peers. My contributions included research, design and coding with Node.js, MongoDB, and React, as well as integrating AI-powered text-to-voice storytelling features to enhance the user experience.',
        'I collaborated with a team to create a media campaign promoting a city for the company. My contributions included designing posters, developing brand guidelines, coding the frontend of the campaign website, and producing a promotional video in which I also starred as the actor.',
        'I helped establish a studio with my team, contributing to building the frontend of the website, designing the user experience, conducting user testing with stakeholders, and promoting the studio to our target audience.',
        'I collaborated with a team to create a trend radar app for our company as a school project. I designed and refined key features such as trend editing, adding/removing trends, and the login page based on initial concepts from my colleagues. Then, I translated those designs into a fully functional Flutter app using Dart, ensuring a seamless user experience throughout.',
        'I created a website for purchasing tickets to a rock band’s events, which included rebranding the band and producing detailed documentation. My role encompassed both design and development, implementing the system with Node.js, React, and Tailwind, along with a login feature supported by a MongoDB database.',
        'I also developed a media player app where users could listen to music, create libraries add/remove songs and search for certain playlists or songs. The application was designed, user tested and developed using Kotlin, Java.',
        'I developed a pet-matching app, similar to Tinder, where users can connect based on their pets’ profiles and location to chat and arrange meetups. This was a collaborative project with my colleague, where we divided tasks. I designed and implemented several key features using Flutter and Dart.',
        'I developed a photography blog where I sell my original photos taken with my camera. I conducted extensive research on why my work offers unique value compared to AI-generated images and why customers should choose my photos. I was responsible for designing, user testing, and coding the website using Node.js, React, Tailwind, and MongoDB.',
        'I developed both the backend and frontend of an app that uses phone sensors to detect when the phone is thrown in the air. The app measures the timing and height of the throw, turning it into a game where two players can compete on separate devices. This project was built using Flutter and Dart.'
    ];

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    }

    goToSlide(index: number) {
        this.currentSlide = index;
    }
}
