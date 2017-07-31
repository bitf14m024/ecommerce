import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule  } from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})

export class RegisterComponent implements OnInit {
	data = {};
  rForm:FormGroup;
  post:any;


  constructor(private dataservice:DataService,
          private fb: FormBuilder) {
          this.rForm = fb.group({
      'fname' : [null, Validators.required],
      'lname' : [null, Validators.required],
      'email' : [null, Validators.required],
      'country' : [null, Validators.required],
      'state' : [null, Validators.required],
      'address' : [null, Validators.required],
       'gender' : [null, Validators.required],

      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(500)])],
      
    });
  	
  }


  ngOnInit() {
  	console.log("ngConstructor.... register");
  	
  }

  formSubmit(){
  	console.log("in form submit")
  	this.dataservice.registerUser(this.data)
  		.subscribe(
  			data => {
          console.log(data);
          console.log(data.empty);
          
  				if(data.success==1){
  					console.log("user registered");
  				}
  				else if(data.error==0){
  					console.log("some error occured registering user");
  				}
          else if (data.empty==0){
            console.log("Empty fields");
          }
  				else if(data.found != 'undefined'){
  					console.log("email already exists");
  				}
  			}
  		);
  }

}
