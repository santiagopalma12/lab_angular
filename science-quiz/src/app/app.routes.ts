import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { QuestionComponent } from './question/question';
import { ResultsComponent } from './results/results';

export const routes: Routes = [
    // Ruta por defecto que muestra la página de inicio
    { path: '', component: HomeComponent },
    
    // Ruta para mostrar una pregunta específica por su ID (índice)
    { path: 'question/:id', component: QuestionComponent },
    
    // Ruta para mostrar la pantalla de resultados finales
    { path: 'results', component: ResultsComponent },
    
    // Redirige cualquier otra ruta a la página de inicio
    { path: '**', redirectTo: '' }
];