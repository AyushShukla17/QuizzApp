import { AuthGuard } from './authentication/auth.guard';
import { DatashareService } from './dataShare/datashare.service';
import { QuizzRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegisteruserComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(QuizzRoutes)
  ],
  providers: [DatashareService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
