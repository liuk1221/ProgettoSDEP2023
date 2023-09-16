import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { OrdineDB } from 'src/app/servizi/forum-data-db';
import { ShopNowComponent } from '../shop-now/shop-now.component';
import { AuthService } from 'src/app/servizi/auth.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit{

  constructor (
    public database: FirebaseService,
    public listdb: ShopNowComponent,
    public user: AuthService
  ) {}

  public lista : OrdineDB[];

  ngOnInit(): void {
      this.database.retrieveOrdine(
      ).subscribe((data : any) => {
        this.lista = Object.keys(data).map(key => {
          data[key]['id_ordine'] = key
          return data[key]
        })
      })
      console.log("ORDINI: "+this.lista)
  }

  print_list(usermail: string) : OrdineDB[] {
    if (usermail == null) {
      alert("Please log in")
      return [];
    } 
    if (this.user.isAdmin) {
      return this.lista
    } else {
      let ordini_utente = [];
      for (let index = 0; index < this.lista.length; index++) {
        const element = this.lista[index];
        if (element.email == usermail) {
          ordini_utente.push(element)
        }
      }
      return ordini_utente;
    }
  }

}
