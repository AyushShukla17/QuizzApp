import { AuthGuard } from './authentication/auth.guard';
import { Routes } from '@angular/router';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
export const QuizzRoutes: Routes = [
    {path: 'login' , component:RegisteruserComponent},
    {path:'quizz', component:QuizComponent,canActivate:[AuthGuard]},
    {path: 'result', component: ResultComponent,canActivate:[AuthGuard]},
    {path:'',redirectTo:'/login',pathMatch:'full'}
]