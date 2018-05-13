import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// <courses></courses> "courses"
// <div class="courses"></div> ".courses"
// <div id="courses"></div> "#courses"

@Component({
    selector: 'app-courses',
    // template: '<h2>{{ "Title: " + title }}</h2>'
    template: `
    <h2>{{ getTitle() }}</h2>
    <div></div>
    {{ course.title | uppercase | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'1.2-2' }} <br/>
    {{ course.price | currency:'EUR':false:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }} <br/>
    <div></div>
    {{ text | summary:10 }}
    <div></div>
    <input #emailTag (keyup.enter)="onKeyUp(emailTag.value)" />
    <div></div>
    <input [value]="email" (keyup.enter)="email = $event.target.value; onAltKeyUp()" />
    <div></div>
    <input [(ngModel)]="email" (keyup.enter)="onAltKeyUp()" />
    <div></div>
    <button class="btn btn-primary" [class.active]="isActive">Class Binding</button>
    <div></div>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Style Binding</button>
    <div></div>
    <div (click)="onParentClick()">
        <div (click)="onDivClick()">
            <button (click)="onSave($event)">Event Binding</button>
        </div>
    </div>
    <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    `
})

export class CoursesComponent {
    title = 'List of Courses';
    courses;
    isActive = false;
    imageUrl = '';
    colSpan = 2;
    email = 'me@example.com';
    // tslint:disable-next-line:max-line-length
    text = `Mosh (Moshfegh) Hamedani is a passionate and creative software engineer with a strong focus on pragmatism and simplicity. He started programming at the age of seven on a Commodore 64. Later, during his high school years, he started learning C and C++ . In 2002, along with the first release of .NET, he shifted his focus to C#. Since then he has been involved in the design and implementation of numerous software projects, including modern web applications, mobile apps, desktop applications and frameworks. He started teaching on Udemy in 2014 and currently he has over 100,000 students in 182 countries. He's the author of several best-selling courses on Udemy and #1 ranking course on Pluralsight (Become a Full-stack .NET Developer). Mosh has a Master of Science in Network Systems and a Bachelor of Science in Software Engineering. He is also a Microsoft Certified Application Developer, Technology Specialist (Web Applications) and Professional. Outside the software world, Mosh is a photographer, a pianist and a passionate Latin dancer.
    `;

    course = {
        title: 'the complete angular course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    onSave($event) {
        $event.stopPropagation();
        console.log('button was clicked', $event);
    }

    onDivClick() {
        console.log('div was clicked');
    }

    onParentClick() {
        console.log('parent was clicked');
    }

    onKeyUp(email) {
        console.log(email);
    }

    onAltKeyUp() {
        console.log(this.email);
    }
}
