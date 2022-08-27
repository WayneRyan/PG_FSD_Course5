import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Questions} from "../questions";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {

  questions: Array<Questions> = [];
  selectedAnswers: Map<number, string> = new Map();
  submitted: boolean = false;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("/assets/quiz.json").subscribe(
      result => this.questions = result as Array<Questions>,
      error => console.log(error),
      () => console.log("complete")
    );
  }

  correctAnswer(qnumber: number, answer: string) {
    this.selectedAnswers.set(qnumber, answer);
  }

  getResults() {
    this.submitted = true;
  }
}
