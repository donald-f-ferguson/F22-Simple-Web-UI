import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ColumbiaStudentServiceService } from './columbia-student-service.service';
import {ColumbiaStudent} from './columbia-student';

@Component({
  selector: 'app-columbia-student',
  templateUrl: './columbia-student.component.html',
  styleUrls: ['./columbia-student.component.css']
})
export class ColumbiaStudentComponent implements OnInit {

  toggleStudent: boolean;
  studentName: string;
  studentUni: string;
  studentService: ColumbiaStudentServiceService;
  studentsInfo: ColumbiaStudent[];

  constructor(studentService: ColumbiaStudentServiceService) {
    this.toggleStudent = false;
    this.studentName = undefined;
    this.studentUni = undefined;
    this.studentService = studentService;
    this.studentsInfo = undefined;
  }

  ngOnInit(): void {
  }

  toggleCard(cardId): void {
    if (cardId == 'artist') {
      this.toggleStudent = !this.toggleStudent;
    }
  }

  setStudentInfo(theStudent: ColumbiaStudent): void {
    console.log("Students = \n" + JSON.stringify(theStudent, null, 2));
    this.studentsInfo = [theStudent];
  }


  onSomethingInput(e: Event) : void {
    // console.log("Input = ", (<HTMLInputElement> e.target).value);
    this.studentUni = (<HTMLInputElement> e.target).value;
    if (this.studentUni.length > 2) {
      this.studentService.getStudents(this.studentUni)
        .subscribe((data) => this.setStudentInfo(data));
    }
  }

  onLookup(): void {
    if (this.studentUni.length > 3) {
      this.studentService.getStudents(this.studentUni)
        .subscribe((data) => this.setStudentInfo(data));
    }
  }

}
