import { Injectable } from '@angular/core';
import {Employee } from '../shared/employee.model';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  constructor(private http: Http) { }

  saveCustomer(customer){
    return this.http.post('http://192.168.1.103:8101/DemoAPI/rest/admin/registerEmployee' , customer)
            .map((response: Response) => response.json());
  }
  
  deleteCustomer(empId){
    return this.http.delete('http://192.168.1.103:8101/DemoAPI/rest/deleteemp' + empId)
              .map((response:Response) =>  response.json());
  }
  
  getCustomerById(empId){
    return this.http.get('http://:192.168.1.103:8101/DemoAPI/rest/employee' )
    .map((response: Response) => response.json());
  }
}
