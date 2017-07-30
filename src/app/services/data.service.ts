import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
  	console.log("DataService constructor....");
  }

  registerUser(data){
  	
  	var param = JSON.stringify(data);
  	param = '{"data":'+param+'}';
  	console.log(param);
  	var headers = new Headers();
  	headers.append('Content-Type','application/x-www-form--urlencoded');

  	return this.http.post('https://ecommerce-freelance.herokuapp.com/register',param,{headers:headers})
  	.map(res=>res.json());

  	}

}
