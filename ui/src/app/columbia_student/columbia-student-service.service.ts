import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ColumbiaStudent } from './columbia-student';
import { ColumbiaStudentRsp } from "./columbia-student";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ColumbiaStudentServiceService {

  students: ColumbiaStudent[];
  studentServiceUrl: string;

  constructor(private http: HttpClient) {
    // console.log('The URL = ' + window.location.href);
    this.students = undefined;
  }

  getStudentServiceUrl(): string {
    const theUrl = window.location.href;
    let result: string;

    // This is some seriously bad code.
    // If you do this on a job interview, you did not learn this in my class.
    if (theUrl.includes('amazonaws')) {
      /* This can change over time */
      result = undefined;
    }
    else {
      result = 'http://127.0.0.1:5011/api/students/';
    }
    return result;
  }


  /** GET heroes from the server */
  getStudents(studentUni): Observable<ColumbiaStudent> {
    let theUrl: string;

    theUrl = this.getStudentServiceUrl() + studentUni;
    return this.http.get<ColumbiaStudent>(theUrl);
  }
}
