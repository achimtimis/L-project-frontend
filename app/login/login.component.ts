import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user/user';
import { AuthenticationService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html'
})

export class LoginComponent implements OnInit {
  user: User;
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ){}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(
      data => {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.user.role === "ADMIN"){
          this.router.navigate(['/professor'])
        }else{
          this.router.navigate(['/student']);
        }
      },
      error => {
        alert("Username or password invalid!");
        this.loading = false;
      });
  }
}
