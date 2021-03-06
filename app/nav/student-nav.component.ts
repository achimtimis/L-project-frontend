import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user/user';
import { AuthenticationService } from '../login/login.service';
@Component(
 {
     selector : 'student-nav-bar',
     templateUrl: 'app/nav/student-nav.component.html'
 }   
)
export class StudentNavComponent{

constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ){}
logout(){
    console.log("logging out");
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}