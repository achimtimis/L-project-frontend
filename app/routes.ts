import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {QuizAppComponent} from './quiz-app.component';
import {StudentMainComponent} from './student/student-main.component'

export const AppRoutes:Routes = [
    {path : 'login', component: LoginComponent},
    {path : 'student/:id', component: StudentMainComponent},
    {path : '', redirectTo :'/login', pathMatch : 'full'},
    {path: '**', redirectTo: '/login' }

]