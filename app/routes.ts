import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {QuizAppComponent} from './quiz-app.component';
import {StudentMainComponent} from './student/student-main.component'
import {ProfessorMainComponent} from './professor/professor-main.component'
import {LoginRouteActivator} from './login/login-route.activator.component'
import {SAQuizComponent} from './professor/createquiz/sa-quiz.component'

export const AppRoutes:Routes = [
    {path : 'login', component: LoginComponent},
    {path : 'create/sa' ,component : SAQuizComponent, canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}, canDeactivate:["canDeactivateQuizCreation"]},
    {path : 'student/:id', component: StudentMainComponent,  canActivate: [LoginRouteActivator], data: { roles: ['NORMAL_USER']}},
    {path : 'professor/:id', component: ProfessorMainComponent,  canActivate: [LoginRouteActivator], data: { roles: ['ADMIN']}},
    {path : '', redirectTo :'/login', pathMatch : 'full'},
    {path: '**', redirectTo: '/login' }

]