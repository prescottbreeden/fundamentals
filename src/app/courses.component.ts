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
    <button class="btn btn-primary" [class.active]="isActive">save</button>
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
    isActive = true;
    // tslint:disable-next-line:max-line-length
    imageUrl = 'https://images.unsplash.com/photo-1506108198627-b100e11bbc47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec77747e2fa7b03bb394aa4e78c4434b&auto=format&fit=crop&w=1950&q=80';
    colSpan = 2;


    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }
}
