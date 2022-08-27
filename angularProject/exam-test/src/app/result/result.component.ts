import {Component, Input, OnInit} from '@angular/core';
import {Answers} from "../answers";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input()
  get answers(): Map<number, string> {
    return this._answers;
  }

  set answers(answers: Map<number, string>) {
    this._answers = answers;
    this.computeScore();
  }

  private _answers!: Map<number, string>;

  correct_answers: Array<Answers> = [];
  score: number = 0;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("/assets/answers.json").subscribe(
      result => this.correct_answers = result as Array<Answers>,
      error => console.log(error),
      () => this.computeScore()
    );
  }

  private computeScore() {
    this.score = 0;
    for (let correct_answer of this.correct_answers) {
      if (this._answers.get(correct_answer.qnumber) === correct_answer.answer) {
        this.score++;
      }
    }
  }
}
