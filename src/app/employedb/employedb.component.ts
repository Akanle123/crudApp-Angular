import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from '../apimodel';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-employedb',
  templateUrl: './employedb.component.html',
  styleUrls: ['./employedb.component.css']
})
export class EmployedbComponent implements OnInit {
formValue!:FormGroup;
emplyeeModelObj:EmployeeModel=new EmployeeModel();
showAdd!:boolean;
showUpdate!:boolean;
employeeData!:any;
  constructor(private formbuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:[''],
      
    })
    this.getAllEmployee();
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
postEmployeeDetails(){
  this.emplyeeModelObj.firstName=this.formValue.value.firstName;
  this.emplyeeModelObj.lastName=this.formValue.value.lasttName;
  this.emplyeeModelObj.email=this.formValue.value.email;
  this.emplyeeModelObj.mobile=this.formValue.value.mobile;
  this.emplyeeModelObj.salary=this.formValue.value.salary;

  this.api.postEmployee(this.emplyeeModelObj).subscribe(res=>{console.log(res);
  alert("Employee Added Successfully!")
  let ref=document.getElementById('cancel')
  ref?.click();
  this.formValue.reset();
  },
  err=>{
    alert("Something is not right, kindly check!")
  }
  )
}
getAllEmployee(){
  this.api.getEmployee().subscribe(res=>{this.employeeData=res;

  })
}
deleteEmployee(row:any){
  this.api.deleteEmployee(row.id).subscribe(res=>{ alert("employee deleted");
  this.getAllEmployee();
})
}
onedit(row:any){
  this.showAdd=false;
    this.showUpdate=true;
  this.emplyeeModelObj.id=row.id
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['salary'].setValue(row.salary);
}

updateEmployeeDetails(){
  this.emplyeeModelObj.firstName=this.formValue.value.firstName;
  this.emplyeeModelObj.lastName=this.formValue.value.lasttName;
  this.emplyeeModelObj.email=this.formValue.value.email;
  this.emplyeeModelObj.mobile=this.formValue.value.mobile;
  this.emplyeeModelObj.salary=this.formValue.value.salary;
this.api.updateEmployee(this.emplyeeModelObj, this.emplyeeModelObj.id).subscribe(res=>{
  alert("Updaated");
  let ref=document.getElementById('cancel')
  ref?.click();
  this.formValue.reset();
  this.getAllEmployee();
})
}
}