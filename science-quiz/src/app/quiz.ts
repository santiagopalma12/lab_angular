import { Injectable } from '@angular/core';

// Definimos una estructura para nuestras preguntas
export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer?: string; // Guardaremos la respuesta del usuario aquí
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    { question: '¿Cuál es la fórmula química del agua?', options: ['H2O', 'CO2', 'O2'], correctAnswer: 'H2O' },
    { question: '¿Cuál es la ley de Newton que describe la acción y la reacción?', options: ['Primera ley', 'Segunda ley', 'Tercera ley'], correctAnswer: 'Tercera ley' },
    { question: '¿Cuál es el planeta más grande del sistema solar?', options: ['Tierra', 'Júpiter', 'Saturno'], correctAnswer: 'Júpiter' },
    { question: '¿Cuál es el hueso más largo del cuerpo humano?', options: ['Fémur', 'Húmero', 'Tibia'], correctAnswer: 'Fémur' },
    { question: '¿Proceso por el cual las plantas convierten luz en energía?', options: ['Fotosíntesis', 'Respiración', 'Transpiración'], correctAnswer: 'Fotosíntesis' },
    { question: '¿Cuál es la unidad básica del ADN y ARN?', options: ['Aminoácido', 'Nucleótido', 'Glucosa'], correctAnswer: 'Nucleótido' },
    { question: '¿Velocidad de la luz en el vacío (aprox.)?', options: ['300,000 km/s', '150,000 km/s', '450,000 km/s'], correctAnswer: '300,000 km/s' },
    { question: '¿Qué elemento químico tiene el símbolo \'Fe\'?', options: ['Hierro', 'Fósforo', 'Francio'], correctAnswer: 'Hierro' },
    { question: '¿Quién descubrió la ley de la gravitación universal?', options: ['Einstein', 'Newton', 'Galileo'], correctAnswer: 'Isaac Newton' }
  ];

  private score = 0;
  private currentQuestionIndex = 0;

  // Reinicia el juego a su estado inicial
  resetQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.questions.forEach(q => q.userAnswer = undefined); // Limpia respuestas anteriores
  }

  // Devuelve todas las preguntas
  getQuestions(): Question[] {
    return this.questions;
  }

  // Procesa una respuesta y actualiza el puntaje
  answerQuestion(selectedOption: string) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    currentQuestion.userAnswer = selectedOption;

    if (selectedOption === currentQuestion.correctAnswer) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }

  // Devuelve el estado actual para la página de resultados
  getResults() {
    return {
      score: this.score,
      total: this.questions.length,
      questions: this.questions
    };
  }
}