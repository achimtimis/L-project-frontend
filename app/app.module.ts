import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {QuizAppComponent } from './quiz-app.component'
import {LoginComponent} from './login/login.component'
import {AuthenticationService} from './login/login.service'
import {DefaultNavComponent} from './nav/default-nav.component'
import {StudentMainComponent} from './student/student-main.component'
import {StudentNavComponent} from './nav/student-nav.component'
import {AppRoutes} from './routes';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(AppRoutes)],
  declarations: [QuizAppComponent, LoginComponent, DefaultNavComponent, StudentMainComponent, StudentNavComponent],
  bootstrap: [QuizAppComponent],
  providers: [AuthenticationService, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {}