import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './Employee';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
data;
  constructor(private http:HttpClient,private rt:Router) { }
  EmpUrl:string = 'http://localhost:3000/Employee';
  addemp(obj:Employee):Observable<Employee>{
	this.data=JSON.stringify(obj);
	return this.http.post<Employee>(this.EmpUrl,this.data);
  } 
  
  name;
  deleteurl;
  deleteEmp(obj:Employee):Observable<Employee>{
	this.name=obj.name;
	
	return this.http.delete<Employee>(`${this.EmpUrl}?name=${this.name}`);
  }
}

