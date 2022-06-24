import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit,Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit, OnDestroy {

  // constructor(private route:ActivatedRoute,) { }

  selectedEmpData:any;
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
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private route:ActivatedRoute ){

    this.selectedEmpData = data;
    console.log(data, "EDIT KA DATA");
    
  }

  id: number | undefined;
  name:string | undefined;
  paramSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.params['name'];


    this.paramSubscription = this.route.params.subscribe((params)=>{
      this.id = params['id'];
      this.name = params['name'];

      console.log("EDIT DETAILS WORKS SUBSCRIPTION",this.id,this.name);
        
    })
  }

  saveData(){
    console.log("SAVADATA");
    
  }


  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
 
}
