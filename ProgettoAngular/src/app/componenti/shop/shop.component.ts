import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { MarbleFormComponent } from "./marble-form/marble-form.component";
import { ForumDataDB } from 'src/app/servizi/forum-data-db';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public rows : number = 4;
  public prodotti : ForumDataDB[];
  public marbleform: ForumDataDB = {
    id: 0,
    nome: '',
    provenienza: '',
    colore: '',
    venature: false,
    colore_v: '',
    dim_x: 0,
    dim_y: 0,
    dim_z: 0,
    qta: 0,
    prezzo: 0,
    descrizione: ''
  };
  public pick : number[] = [0,0,0,0];
  private ids : any[] = [];
  private id_to_act : number = 0;

  constructor(private firebase: FirebaseService) { }
  
  ngOnInit(): void { 
      // GET
      this.firebase.retrieveMarble(
      ).subscribe((data: any) => {
        console.log(data)
        this.prodotti = Object.keys(data).map(key => {
        data[key]['id'] = key
        return data[key] 
      })
      console.log("PRODOTTI:"+this.prodotti)
      console.log("IDS:"+this.ids)
      })
  }
  
  onSubmit() {
    // Blocco per inserimento manuale di una lastra (per admin)
    // this.homeform = new FormGroup({
      // ...
    // });

    // POST
    // this.firebase.insertMarble(
    //   'https://progettosdep2023-default-rtdb.europe-west1.firebasedatabase.app/lastra.json',
    //   {***data***}).subscribe(data => console.log(data));
  }

  onDeleteMarble() {
    // DELETE
    // id_to_del : string = prodotti[<prodotto interessato>][id];
    this.firebase.deleteMarble(
      this.id_to_act
    ).subscribe((data : any) => {
      console.log(data)
    })
  }

  onPurchaseMarble() { 
    // PUT/PATCH
    // put ---> body : nuova intera entita'
    // patch -> body : nuovi dati aggiornati
    // id_to_del : string = this.prodotti[<prodotto interessato>][id];
    // marble_purchase : JSON = {};
    return
    if (false) {
      this.firebase.insertMarble(
        this.marbleform
      ).subscribe(data => {
        console.log(data)
      })
    } else {
      this.firebase.updateMarble(
        this.id_to_act,
        this.marbleform
      ).subscribe((data : any) => {
        console.log(data)
      })
    }
  }
  
  filterProducts() {
    // Implement filtering logic here based on user input
    // Update this.filteredProducts with the filtered products
  }

  addToCart(product: any) {
    // Implement add to cart logic here
    // You can use a service to manage the shopping cart
  }

  quick_pop(){
    this.firebase.dummyIMarble(
    ).subscribe(data => {
      console.log(data)
    })
  }
}