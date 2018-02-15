import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { EmployeeService } from '../shared/employee.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  title: string = "Add";
  empId: number = 0;
  errorMessage: any;
customers = [];
customerForm: FormGroup;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private _fb: FormBuilder, 
    private _avRoute: ActivatedRoute) {
      if(this._avRoute.snapshot.params["empId"]){
        this.empId = parseInt( this._avRoute.snapshot.params["empId"]);
        console.log(this.empId);
      }
   }

  ngOnInit() {
    
    if(this.empId > 0){
      this.title = 'Edit';
      this.employeeService.getCustomerById(this.empId)
        .subscribe(resp => this.customerForm.setValue(resp)
                 , error => this.errorMessage = error);         
    }
    
    
  }
//   get fname() { return this.customerForm.get('name'); }
// // similarly for address and phone
// get lname() { return this.customerForm.get('address'); }
// get mobileNo() { return this.customerForm.get('phone'); }


  delete(empId){
    var ans = confirm("Do you want to delete customer with Id: " + empId);
    if(ans){
      this.employeeService.deleteCustomer(empId)
       .subscribe(  data=> {
         var index = this.customers.findIndex(x=>x.empId == empId);
         this.customers.splice(index, 1);
       }, error=> this.errorMessage = error )
    }
 }
 
}
