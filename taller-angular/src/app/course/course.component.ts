import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  standalone: false,
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  courses: Array<Course> = [];
  promedioTemporadas: number = 0;
  
  constructor(private courseService: CourseService) { }

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.promedioTemporadas = this.calculadorapromedio(courses);
    });
  }

  calculadorapromedio(courses: Course[]): number {
    const total = courses.reduce((sum, course) => sum + course.seasons, 0);
    return courses.length > 0 ? total/courses.length: 0;
  }
  
  

  ngOnInit() {
    this.getCourses();
  }

}
