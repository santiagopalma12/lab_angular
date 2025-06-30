import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private quizService: QuizService) {
    // Reiniciamos el quiz cada vez que volvemos a la página de inicio
    this.quizService.resetQuiz();
  }
}