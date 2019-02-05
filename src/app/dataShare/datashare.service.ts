import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class DatashareService {
  userDetails = {
    "Username": "zolo",
    "password": "zolo_123"
  }
  quizzAns = [{
    id: 1,
    Answer: "Shakuntala Devi"
  }, {
    id: 2,
    Answer: "Helium Bat"
  }, {
    id: 3,
    Answer: "Sri Lanka"
  }]
  quizzQuestions = [{
    id: 1,
    question: " The Indian, who holds the pride of beating the computers in mathematical wizard is:",
    options: ["Shakuntala Devi", "Raja Ramanna", "Ramanujam ", "Rina Panigrahi"]
  },
  {
    id: 2,
    question: " Former Australian captain Mark Taylor has had several nicknames over his playing career. Which of the following was NOT one of them?",
    options: ["Tubby", "Stodge", "Helium Bat", "Stumpy"]
  },
  {
    id: 3,
    question: "Which was the 1st non Test playing country to beat India in an international match?",
    options: ["Canada", "Sri Lanka", "Zimbabwe", "East Africa"]
  }]


  questions: any = [];
  questionsProgress: number;
  timer: number = 180;
  timercontroller: any;
  correctAnswer:number = 0;
  constructor() { }

  validateUser(username: string, password: string): Observable<any> {
    if (username === this.userDetails.Username && password === this.userDetails.password) {
      return Observable.of({ "isAuthorised": true, "username": "zolo" });
    }
    else {
      return Observable.of({ "isAuthorised": false, "username": null });
    }
  }

  getQuestions(): Observable<any> {
    return Observable.of(this.quizzQuestions)
  }

  validateResult(){
    
  }


}
