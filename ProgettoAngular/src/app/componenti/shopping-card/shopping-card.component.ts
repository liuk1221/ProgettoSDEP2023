import { Component } from '@angular/core';
import { ForumDataDB } from "../../servizi/forum-data-db";

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
})
export class ShoppingCardComponent {

  public desrizioni = {
    'Travertino': 'Travertino',
    'Marmo di Carrara': 'Il marmo Statuario di Carrara è una pietra naturale pregiata apprezzata per la sua eleganza, il colore bianco puro e le venature uniche. È una scelta popolare per progetti di design e architettura di alta qualità in tutto il mondo.',
    'Calacatta' : 'Calacatta',
    'Lasa': 'Lasa',
    'Rosso di Verona': 'Rosso di Verona',
    'Rosso di Levanto': 'Rosso di Levanto',
    'Breccia Medicea': 'Braccia Medicea',
    'Marmo di Siena': 'Marmo di Siena'
  }

}