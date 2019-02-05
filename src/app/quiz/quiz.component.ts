import { Router } from '@angular/router';
import { DatashareService } from './../dataShare/datashare.service';
import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  timer: any = 0;

  constructor(private datashare: DatashareService, private router: Router, public toastr: ToastrManager) { }

  ngOnInit() {
    this.datashare.correctAnswer = 0;
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
      } else {
        clearInterval(this.datashare.timercontroller);
        this.router.navigate(['/result']);
      }
    }, 1000)
  }

  setAnswer(answer) {
    if (this.datashare.userAns[this.datashare.questionsProgress]) {
      this.datashare.userAns[this.datashare.questionsProgress]["answer"] = answer;
    }
    else {
      this.datashare.userAns.push({
        "id": this.datashare.questionsProgress,
        "answer": answer
      });
    }
  }

  checkAnswer() {
    if (!this.datashare.userAns[this.datashare.questionsProgress]) {
      this.toastr.warningToastr("Please select atleast one option", "Warning");
      return;
    }
    if (this.datashare.quizzAns[this.datashare.questionsProgress].Answer === this.datashare.userAns[this.datashare.questionsProgress].answer) {
      this.toastr.successToastr("Right Answer!!", "Congrats");
      this.datashare.correctAnswer++;
    } else {
      this.toastr.errorToastr("Wrong Answer!!", "Oops!!")
    }
    this.datashare.questionsProgress++;
    if (this.datashare.questionsProgress === 3) {
      clearInterval(this.datashare.timercontroller);
      this.router.navigate(['/result']);
    }
  }

}
