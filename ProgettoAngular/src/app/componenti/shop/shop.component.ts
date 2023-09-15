import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { ForumDataDB } from 'src/app/servizi/forum-data-db';
import { ShopNowComponent } from '../shop-now/shop-now.component';

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
  private ids : any[] = [];
  private id_to_act : string = '';

  constructor(
    private firebase: FirebaseService) { }
  
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
  
  filterProducts() {
    // Implement filtering logic here based on user input
    // Update this.filteredProducts with the filtered products
  }

  quick_pop(){
    this.firebase.dummyIMarble(
    ).subscribe(data => {
      console.log(data)
    })
  }
}