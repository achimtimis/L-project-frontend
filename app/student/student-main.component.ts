import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user/user';
import { AuthenticationService } from '../login/login.service';
@Component({
    template: `
    <student-nav-bar></student-nav-bar>
    Hello student`
})

export class StudentMainComponent {

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ){}

}