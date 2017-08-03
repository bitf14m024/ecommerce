import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userData: any;
     
 id: number;
  private sub: any;

  constructor(private route: ActivatedRoute,private router: Router) { 



  this.user();
}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       console.log("in porgile params");
       var result=JSON.parse(params.userData);
       console.log(result);
       this.userData=result;
       console.log(result.user.photoURL);
     });
   


   // x`(+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    

  }
  user() {

    if (localStorage.getItem('userData')) {
      this.userData = JSON.parse(localStorage.getItem('userData'));
    }
    else {
      console.log("No Data");
    }
  }

}

