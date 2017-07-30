import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	data = {};


  constructor(private dataservice:DataService) {
  	
  }

  ngOnInit() {
  	console.log("ngConstructor....");
  	
  }

  formSubmit(){
  	
  	this.dataservice.registerUser(this.data)
  		.subscribe(
  			data => {
  				if(data.success){
  					console.log("user registered");
  				}
  				else if(data.error){
  					console.log("some error occured registering user");
  				}
  				else if(data.found){
  					console.log("email already exists");
  				}
  			}
  		);
  }

}
