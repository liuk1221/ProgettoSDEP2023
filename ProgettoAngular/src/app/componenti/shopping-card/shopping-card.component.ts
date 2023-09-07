import { Component } from '@angular/core';
@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
})
export class ShoppingCardComponent {

  private name(parole: string[]) {
    for (let index = 0; index < parole.length; index++) {
      const element = parole[index];
      parole[index] = element.charAt(0).toUpperCase() + element.slice(1);
    }
    return parole.join().replace(',', ' ');
  }
  // prova di 10 card da prendere a random
  // in seguito: possibile implementazione dinamica presa dal DB
  private prename = 'marmo-';
  private extension = '.jpg';
  private materiale = ['arabescato', 'bardiglio-carrara', 'calacatta', 'di-siena'];
  public MARMI = [
    {
      'title': this.name(this.materiale[0].split('-')),
      'filename': this.prename + 'arabescato-copertina' + this.extension,
      'descrizione': 'Bulo'
    },
    {
      'title': this.name(this.materiale[1].split('-')),
      'filename': this.prename + 'bardiglio-di-carrara' + this.extension,
      'descrizione': 'Figo'
    },
    {
      'title': this.name(this.materiale[2].split('-')),
      'filename': this.prename + 'calacatta' + this.extension,
      'descrizione': 'Minchia'
    },
    {
      'title': this.name(this.materiale[3].split('-')),
      'filename': this.prename + 'di-siena' + this.extension,
      'descrizione': 'Aonna sgocciola popo cade a pezzi è sfuso sfatto madonna ragazzi'
    },
  ]

}
