import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Constants } from '../core/constants';
import { StudentService } from './shared/services/student.service';
import { Student } from './shared/models/student';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  providers: [StudentService]
})
export class DepartmentsComponent implements OnInit {

  ngOnInit(): void {

  }


}
  

