import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  emp:Employee[];
  EmpUrl:string = 'http://localhost:3000/Employee';
  constructor(private sr:MyserviceService, private http:HttpClient) { }

 deleteEmp(obj:Employee){
	  this.sr.deleteEmp(obj).subscribe();
	  confirm("Do you want to delete this record.");
	  //window.location.reload();
  }
 
  ngOnInit(){
  this.http.get<Employee[]>(this.EmpUrl).subscribe((res)=> this.emp=res);
 
  }
  

}
