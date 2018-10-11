import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent {
  @Input()
  question: string;
  @Input()
  isValid: boolean;
  @Output()
  questionAnswered = new EventEmitter<string>();

  answer = new FormControl('', Validators.required);
  formSubmitted: boolean;
  constructor() {
    this.formSubmitted = false;
  }
  clickBtn() {
    this.formSubmitted = true;
    this.questionAnswered.emit(this.answer.value);
  }
  setValue(e) {
    console.log(e);
  }
}
