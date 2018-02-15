import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmployeeService } from '../shared/employee.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({ 
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  customerForm: FormGroup;        
  title: string = "Add";
  errorMessage: any;
  currentempId: number = 0;        

  constructor(private employeeService: EmployeeService, private _fb: FormBuilder,
  private router: Router,
private activatedRoute: ActivatedRoute) {
    this.customerForm = this._fb.group({
      empId: [''],
      fname: ['', [Validators.required,
                  Validators.minLength(3),
                  Validators.maxLength(30)]],
      lname: ['', [Validators.required]],
      mobileNo: ['', [Validators.pattern("[1-9][0-9]{9}")]],
    })
   }

  ngOnInit() {
    if(this.activatedRoute.snapshot.params["empId"])
  this.currentempId = parseInt(this.activatedRoute.snapshot.params["empId"]);

  }

  save(){ 
    this.employeeService.saveCustomer(this.customerForm.value)
    .subscribe(
        // alert('Saved Successfully!')
        (customerForm) => { console.log(customerForm)
        // this.router.navigate(['list', {empId: custempId}]);
     }, error => this.errorMessage = error )
  }
 
  add(){
    this.router.navigate(['list/add']);
}
edit(empId){
    this.router.navigate(['list/edit/'+ empId])
}
// cancel(empId){
//   this.router.navigate(["list", {empId: this.empId}]);
// }
}
