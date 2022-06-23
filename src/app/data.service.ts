import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  tempData = [];
  setEmployeeData(data: any) {
    this.tempData= data;
    console.log("service", data);
  }

  getEmployeeData() {
    return this.tempData;
  }
}
