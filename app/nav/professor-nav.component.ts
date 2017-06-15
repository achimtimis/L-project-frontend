import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user/user';
import { AuthenticationService } from '../login/login.service';

@Component(
 {
     selector : 'prof-nav-bar',
     templateUrl: 'app/nav/professor-nav.component.html'
 }   
)
export class ProffessorNavComponent{
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