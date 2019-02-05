import { Router } from '@angular/router';
import { DatashareService } from './../dataShare/datashare.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  timer: any = 0;

  constructor(private datashare: DatashareService, private router: Router) { }

  ngOnInit() {
    this.datashare.questionsProgress = 0;
    this.datashare.getQuestions().subscribe(
      (data) => {
        this.datashare.questions = data;
        this.startTimer();
      }, err => {
        console.error(err);
      }
    )
  }

  startTimer() {
    this.datashare.timer = 180;
    this.datashare.timercontroller = setInterval(() => {
      if (this.datashare.timer > 0) {
        this.datashare.timer--;
      }
    }, 1000)
  }

  checkAnswer(i) {
    console.log(i);
    this.datashare.questionsProgress++;
    if (this.datashare.questionsProgress === 3 || this.datashare.timer === 0) {
      clearInterval(this.datashare.timercontroller);
      this.router.navigate(['/result']);
    }
  }

}
