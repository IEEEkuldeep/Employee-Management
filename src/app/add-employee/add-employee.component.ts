import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  @ViewChild('name') inputName:any;
  @ViewChild('mySelect') selectName:any;

  handleClear(){
    this.inputName.nativeElement.value = ' ';
    this.selectName.nativeElement.value = ' ';
  }

  designations = [
    "CTO",
    "CIO/Chief Digital Officer/Chief Innovation Officer",
    "VP of Product Management/Head of Product",
    "Product Manager",
    "VP of Marketing",
    "VP of Engineering/Director of Engineering",
    "Chief Architect",
    "Software Architect",
    "Engineering Project Manager/Engineering Manager",
    "Technical Lead/Engineering Lead/Team Lead",
    "Principal Software Engineer",
    "Senior Software Engineer/Senior Software Developer",
    "Software Engineer",
    "Software Developer",
    "Junior Software Developer",
    "Intern Software Developer",
  ]

  employeeData:any = [];

  addEmployee(employee: Object){
    // console.log(employee);
    this.employeeData.push(employee);
    this.dataService.setEmployeeData(this.employeeData);
  }


}
