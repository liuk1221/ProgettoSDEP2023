import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; //Import di bootstrap

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProgettoAngular';
  constructor(private modalService: NgbModal) {
  }

  //Metodo Open per bootstrap
  public open(modal: any): void {
    this.modalService.open(modal);
  }

}
