import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  question: string;
  answer: string;
  private _valid: boolean;
  get isValid(): boolean {
    return this._valid;
  }
  set isValid(val: boolean) {
    this._valid = val;
  }
  constructor() {
    this.isValid = false;
    this.question = `What's the tallest building in the world?`;
    this.answer = 'Burj Khalifa';
  }

  verifyAnswer(e: string) {
    this.isValid = this.answer.toLowerCase() === e.toLowerCase();
  }

}
