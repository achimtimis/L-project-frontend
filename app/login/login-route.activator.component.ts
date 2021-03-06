import { User } from '../models/user/user'
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginRouteActivator implements CanActivate{
      constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("is it here?");
    if (!localStorage.getItem('currentUser')) {
      console.log("it did not find a user");
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    let roles = route.data["roles"] as Array<string>;
    let tempUser: User = JSON.parse(localStorage.getItem('currentUser'));
    let currentRole = tempUser.role;

    let exist: boolean;
    if (roles == null) {
      return true;
    } else {
      if (roles.length == 0) {
        return true;
      }
    }
    for (let entry of roles) {
      if (entry === currentRole) {
        exist = true;
      }
    }
    if (exist) {
      return true;
    }
    console.log("it did not what");
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
    // return true;
  }
}