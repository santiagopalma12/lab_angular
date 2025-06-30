import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService, Question } from '../quiz';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrls: ['./question.css']
})
export class QuestionComponent implements OnInit {
  currentQuestion: Question | undefined;
  questionIndex: number = 0;
  totalQuestions: number = 0;
  
  selectedOption: string | null = null;
  isAnswered: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.totalQuestions = this.quizService.getQuestions().length;
    
    this.route.paramMap.subscribe(params => {
      this.questionIndex = Number(params.get('id'));
      if (this.questionIndex >= this.totalQuestions) {
        this.router.navigate(['/results']);
      } else {
        this.currentQuestion = this.quizService.getQuestions()[this.questionIndex];
        this.isAnswered = false;
        this.selectedOption = null;
      }
    });
  }

  selectOption(option: string) {
    if (!this.isAnswered) {
      this.selectedOption = option;
    }
  }

  submitAnswer() {
    if (!this.selectedOption) return;

    this.isAnswered = true;
    this.quizService.answerQuestion(this.selectedOption);

    // Espera 1.5 segundos para mostrar el feedback antes de pasar a la siguiente
    setTimeout(() => {
      const nextIndex = this.questionIndex + 1;
      if (nextIndex < this.totalQuestions) {
        this.router.navigate(['/question', nextIndex]);
      } else {
        this.router.navigate(['/results']);
      }
    }, 1500);
  }

  getOptionClass(option: string): string {
    if (!this.isAnswered) {
      return this.selectedOption === option ? 'selected' : '';
    }
    // Si ya se respondió
    if (option === this.currentQuestion?.correctAnswer) {
      return 'correct';
    }
    if (option === this.selectedOption && option !== this.currentQuestion?.correctAnswer) {
      return 'incorrect';
    }
    return '';
  }
}