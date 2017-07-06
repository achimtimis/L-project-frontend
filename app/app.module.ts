import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';  
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
import {MAQuizComponent} from './professor/createquiz/ma-quiz.component'
import {IAQuizComponent} from './professor/createquiz/ia-quiz.component'

import {QuizListComponent} from './student/quizes/quiz-list.component'
import {QuizResponseComponent} from './student/quizes/quizresponse/quiz-response.component'
import {QuizResultListComponent} from './student/quizresult/quizresult-list.component'
import {QuizResultComponent} from './student/quizresult/quizresult.component'
import {StudentQuizStats} from './student/quizresult/quiz-stats'

import {QuizResultsListComponent} from './professor/quizresults/quizresults-list.component'
import {GradeQuizComponent} from './professor/gradequiz/grade/gradequiz.component'

import {GradeQuizListComponent} from './professor/gradequiz/grade-quiz.list.component'
import {ProfessorQuizResultComponent} from './professor/quizresults/quiz-result.component'
import {AppRoutes} from './routes'; 

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(AppRoutes), CommonModule],
  declarations: [QuizAppComponent, LoginComponent, DefaultNavComponent,
     StudentMainComponent, StudentNavComponent,ProffessorNavComponent, ProfessorMainComponent,
     SAQuizComponent,
     QuizListComponent,
     QuizResponseComponent,QuizResultListComponent, QuizResultComponent, GradeQuizListComponent
     ,QuizResultsListComponent,
     MAQuizComponent,
     IAQuizComponent,
     GradeQuizComponent,
     ProfessorQuizResultComponent,
     StudentQuizStats],
  bootstrap: [QuizAppComponent],
  providers: [AuthenticationService,QuizServiceComponent,
  {provide : "canDeactivateQuizCreation", useValue: checkFormWasPosted},
  {provide : "canDezactivateQuizResponse", useValue: checkResponseFormWasPosted},
  {provide: LocationStrategy, useClass: HashLocationStrategy}, LoginRouteActivator]
})
export class AppModule {}

function checkFormWasPosted(component: SAQuizComponent){
    if(component.getFormState()){
      return window.confirm('You have not saved this quiz. Do you really want to cancel?');
    }
    return true;

}

function checkResponseFormWasPosted(component: QuizResponseComponent){
  if(component.getFormState()){
      return window.confirm('You have not sent this quiz response. Do you really want to cancel?');
    }
    return true;
}