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
import {ProffessorNavComponent} from './nav/professor-nav.component'
import {ProfessorMainComponent} from './professor/professor-main.component'
import {LoginRouteActivator} from './login/login-route.activator.component'
import {QuizServiceComponent} from './service/quiz/quiz-service.component'
import {SAQuizComponent} from './professor/createquiz/sa-quiz.component'
import {AppRoutes} from './routes'; 

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(AppRoutes)],
  declarations: [QuizAppComponent, LoginComponent, DefaultNavComponent,
     StudentMainComponent, StudentNavComponent,ProffessorNavComponent, ProfessorMainComponent,
     SAQuizComponent],
  bootstrap: [QuizAppComponent],
  providers: [AuthenticationService,QuizServiceComponent,
  {provide : "canDeactivateQuizCreation", useValue: checkFormWasPosted},
  {provide: LocationStrategy, useClass: HashLocationStrategy}, LoginRouteActivator]
})
export class AppModule {}

function checkFormWasPosted(component: SAQuizComponent){
    if(component.getFormState()){
      return window.confirm('You have not saved this quiz. Do you really want to cancel?');
    }
    return true;

}