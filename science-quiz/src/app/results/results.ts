import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuizService, Question } from '../quiz';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  score: number = 0;
  total: number = 0;
  questions: Question[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    const results = this.quizService.getResults();
    this.score = results.score;
    this.total = results.total;
    this.questions = results.questions;
  }
}