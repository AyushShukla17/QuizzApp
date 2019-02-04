import { Routes } from '@angular/router';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
export const QuizzRoutes: Routes = [
    {path: 'register' , component:RegisteruserComponent},
    {path:'quizz', component:QuizComponent},
    {path: 'result', component: ResultComponent},
    {path:'',redirectTo:'/register',pathMatch:'full'}
]