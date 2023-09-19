import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { FilterDB, ForumDataDB } from 'src/app/servizi/forum-data-db';
import { ShopNowComponent } from '../shop-now/shop-now.component';
import { AuthService } from 'src/app/servizi/auth.service';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public rows : number = 4;
  public prodotti : ForumDataDB[];
  public marbleform: ForumDataDB = {
    id: '',
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
  private id_to_act : string = '';
  public preorder : boolean;
  public filter : FilterDB = {};

  constructor(
    private firebase: FirebaseService,
    public user: AuthService) { }
  
  ngOnInit(): void {
    this.preorder = false;
    // GET
    this.firebase.retrieveMarble(
    ).subscribe((data: any) => {
      this.prodotti = Object.keys(data).map(key => {
      data[key]['id'] = key
      return data[key] 
      })
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
    })
  }

  purchaseMarble(details: ForumDataDB) {
    this.marbleform = details;
    // console.log(this.marbleform)
    this.preorder = true;
  }

  preorderOption() {
    return this.preorder
  }

  displayPurchaseDetailes() {
    return this.marbleform
  }
  
  filterProducts(product: ForumDataDB) {
    // Implement filtering logic here based on user input
    // Update this.filteredProducts with the filtered products
    let res : boolean = true;
    Object.keys(product).forEach(key => {
      if (this.filter[key] != undefined){
          if (key == 'nome'){
            res = res && (product.nome == this.filter[key])
          }
          if (key == 'prezzo_max'){
            res = res && (product.prezzo <= this.filter[key])
          }
          if (key == 'prezzo_min'){
            res = res && (product.prezzo >= this.filter[key])
          }
          if (key == 'provenienza'){
            res = res && (product.provenienza == this.filter[key])
          }
          if (key == 'colore'){
            res = res && (product.colore == this.filter[key])
          }
          if (key == 'venature'){
            res = res && (product.venature == this.filter[key])
          }
          if (key == 'colore_v'){
            res = res && (product.colore_v == this.filter[key])
          }
        }
      })
      console.log(res)
    return res
  }

  quick_pop(){
    this.firebase.dummyIMarble(
    ).subscribe(data => {
    })
  }

  numberify(value: string) {
    let res;
    try {
      res = eval(value)
    } catch (error) {
      return undefined
    }
    return res
  }

  boolify(value: string) {
    return Boolean(value)
  }
  
}