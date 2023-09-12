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
    nome: '',
    provenienza: '',
    colore: '',
    venature: false,
    colore_v: '',
    dim_x: 0,
    dim_y: 0,
    dim_z: 0,
    qta: 0,
    prezzo: 0
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
        this.ids.push(key)
        data[key]['id'] = key
        return data[key] 
      })
      console.log("PRODOTTI:"+this.prodotti)
      console.log("IDS:"+this.ids)
      })
  }

  get_all_ids() {
    return this.ids
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
    var column = this.get_all_ids();
    if (!(this.id_to_act in column)) {
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

  private rand(range: number){
    return Math.floor(Math.random() * range)
  }

  four_random_cards() {
    this.firebase.retrieveMarble(
      ).subscribe((data: any) => {
        console.log(data)
        this.prodotti = Object.keys(data).map(key => { 
        this.ids.push(key)
        data[key]['id'] = key
        return data[key] 
      })
    });
    let i = 0;
    if (this.prodotti.length > 4) {      
      while (i < 4 && this.pick[3] == 0) {
        this.pick[i] = this.rand(this.prodotti.length)
        for (let index = i; index > 0; index--) {
          if (this.pick[i] == this.pick[index]) {
            this.pick[i] = this.rand(this.prodotti.length)
          } else {
            break;
          }
        }
        i++;
      }
    } else {
      this.pick[0] = this.rand(this.prodotti.length);
      this.pick[1] = this.rand(this.prodotti.length);
      this.pick[2] = this.rand(this.prodotti.length);
      this.pick[3] = this.rand(this.prodotti.length);
    }
  }
}