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
import {GradeQuizListComponent} from './professor/gradequiz/grade-quiz.list.component'
import {QuizResultsListComponent} from './professor/quizresults/quizresults-list.component'
import {MAQuizComponent} from './professor/createquiz/ma-quiz.component'
import {IAQuizComponent} from './professor/createquiz/ia-quiz.component'
import {GradeQuizComponent} from './professor/gradequiz/grade/gradequiz.component'
import {ProfessorQuizResultComponent} from './professor/quizresults/quiz-result.component'
import {StudentQuizStats} from './student/quizresult/quiz-stats'


export const AppRoutes:Routes = [
    {path : 'login', component: LoginComponent},
    {path : 'create/ia' ,component : IAQuizComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}, canDeactivate:["canDeactivateQuizCreation"]},
    {path : 'create/ma' ,component : MAQuizComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}, canDeactivate:["canDeactivateQuizCreation"]},
    {path : 'create/sa' ,component : SAQuizComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}, canDeactivate:["canDeactivateQuizCreation"]},
    {path: 'student/results/stats', component:StudentQuizStats, canActivate: [LoginRouteActivator], data: { roles: ['NORMAL_USER']}} ,
    {path: 'student/results/quiz', component:QuizResultComponent, canActivate: [LoginRouteActivator], data: { roles: ['NORMAL_USER']}} ,
    {path: 'student/results', component:QuizResultListComponent, canActivate: [LoginRouteActivator], data: { roles: ['NORMAL_USER']}} ,
    {path : 'student', component: StudentMainComponent,  canActivate: [LoginRouteActivator], data: { roles: ['NORMAL_USER']}},
    {path : 'professor/results/quiz', component: ProfessorQuizResultComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}},
    {path : 'professor/results', component: QuizResultsListComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}},
    {path : 'professor/tograde/response', component: GradeQuizComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}},
    {path : 'professor/tograde', component: GradeQuizListComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}},
    {path : 'professor', component: ProfessorMainComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}},
    {path : 'quiz', component: QuizResponseComponent, canActivate: [LoginRouteActivator],data: { roles: ['NORMAL_USER']}, canDeactivate:["canDezactivateQuizResponse"] },
    {path : '', redirectTo :'/login', pathMatch : 'full'},
    {path: '**', redirectTo: '/login' }

]   