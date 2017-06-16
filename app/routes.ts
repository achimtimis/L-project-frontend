import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {QuizAppComponent} from './quiz-app.component';
import {StudentMainComponent} from './student/student-main.component'
import {ProfessorMainComponent} from './professor/professor-main.component'
import {LoginRouteActivator} from './login/login-route.activator.component'
import {SAQuizComponent} from './professor/createquiz/sa-quiz.component'
import {QuizResponseComponent} from './student/quizes/quizresponse/quiz-response.component'
import {QuizResultListComponent} from './student/quizresult/quizresult-list.component'
import {QuizResultComponent} from './student/quizresult/quizresult.component'


export const AppRoutes:Routes = [
    {path : 'login', component: LoginComponent},
    {path : 'create/sa' ,component : SAQuizComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}, canDeactivate:["canDeactivateQuizCreation"]},
    {path: 'student/results/quiz', component:QuizResultComponent, canActivate: [LoginRouteActivator], data: { roles: ['NORMAL_USER']}} ,
    {path: 'student/results', component:QuizResultListComponent, canActivate: [LoginRouteActivator], data: { roles: ['NORMAL_USER']}} ,
    {path : 'student', component: StudentMainComponent,  canActivate: [LoginRouteActivator], data: { roles: ['NORMAL_USER']}},
    {path : 'professor', component: ProfessorMainComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}},
    {path : 'quiz', component: QuizResponseComponent, canActivate: [LoginRouteActivator],data: { roles: ['NORMAL_USER']}, canDeactivate:["canDezactivateQuizResponse"] },
    {path : '', redirectTo :'/login', pathMatch : 'full'},
    {path: '**', redirectTo: '/login' }

]   