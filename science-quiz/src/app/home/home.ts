import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuizService } from '../quiz';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  constructor(private quizService: QuizService) {
    // Reiniciamos el quiz cada vez que volvemos a la página de inicio
    this.quizService.resetQuiz();
  }
}