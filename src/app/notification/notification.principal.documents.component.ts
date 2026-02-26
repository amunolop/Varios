import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationSearchDocumentComponent, SearchCriteria } from './search/notificacion.search.document.component';
import { NotificationScoreDocumentComponent, ScorePayload } from './score/notification.score.document.component';
import { NotificationResultsDocumentComponent, NotificationResultRow } from './results/notification.results.document.component';

@Component({
  selector: 'app-notification-principal-documents',
  standalone: true,
  imports: [
    CommonModule,
    NotificationSearchDocumentComponent,
    NotificationScoreDocumentComponent,
    NotificationResultsDocumentComponent,
  ],
  templateUrl: './notification.principal.documents.component.html',
  styleUrls: ['./notification.principal.documents.component.css'],
})
export class NotificationPrincipalDocumentsComponent {
  results: NotificationResultRow[] = [];

  // Invocado por el hijo Search vía Output
  search(criteria: SearchCriteria) {
    // TODO: sustituir por llamada real a servicio/API
    console.log('search criteria:', criteria);

    // Mock de resultados para probar renderizado
    this.results = [
      {
        fAlta: '1',
        fCoincide: '2,3,4',
        fechaMatch: '1/1/25',
        grupoAlerta: '1',
        sensibilidad: '0,5',
        gestionado: 'Si',
      },
      {
        fAlta: '76',
        fCoincide: '5,6,7',
        fechaMatch: '1/3/25',
        grupoAlerta: '3',
        sensibilidad: '0,7',
        gestionado: 'No',
      },
    ];
  }

  // Invocado por el hijo Score vía Output
  score(payload: ScorePayload) {
    // TODO: sustituir por guardado real a servicio/API
    console.log('score payload:', payload);
  }
}