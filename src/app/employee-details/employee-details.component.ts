import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private dataService:DataService) { }

  employeeDetails:any;
  ngOnInit(): void {
    this.employeeDetails =this.dataService.getEmployeeData()
  }

}
