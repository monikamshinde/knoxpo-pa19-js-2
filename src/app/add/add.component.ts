import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
data;
  constructor(private srv:MyserviceService,private fb:FormBuilder, private rt:Router) { }

  empForm=this.fb.group({
	  name:[''],
	  email:[''],
	  mobile:[''],
	  job:['']
  });
  
  addEmp(obj:Employee){	  
	 this.srv.addemp(obj).subscribe(res=>{this.data=res});
	 alert('rocord inserted');
  }  
  ngOnInit() {
  }

}
