import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { EditDetailsComponent } from '../edit-details/edit-details.component';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private dataService: DataService, public dialog: MatDialog,) { }


  employeeDetails: any;

  ngOnInit(): void {
    this.employeeDetails = this.dataService.getEmployeeData()
  }

  removeEmployee(deleteEle: any) {
    this.employeeDetails.splice(deleteEle, 1);
  }
  openDialog(data: any, elementIndex:any) {
    console.log("i have clicked on", data, elementIndex)
    let dialogref = this.dialog.open(EditDetailsComponent, { data });
    dialogref.afterClosed().subscribe(result => {
      console.log("dialog resul", result)
    })


  }
}
