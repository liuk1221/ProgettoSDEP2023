import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products = ['one'];
  prodotti : any;
  homeform: FormGroup | undefined;
  filteredProducts: any[] = [];

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
        console.log(this.prodotti)
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
    // this.firebase.deleteMarble(
    //   FirebaseService.path_to_DB, id_to_del
    // ).subscribe((data : any) => {
    //   console.log(data)
    // })
  }

  onPurchaseMarble() { 
    // PUT/PATCH
    // put ---> body : nuova intera entita'
    // patch -> body : nuovi dati aggiornati
    // id_to_del : string = this.prodotti[<prodotto interessato>][id];
    // marble_purchase : JSON = {};
    // this.firebase.updateMarble(
    //   FirebaseService.path_to_DB,
    //   id_to_del,
    //   marble_purchase
    // ).subscribe((data : any) => {
    //   console.log(data)
    // })
  }
  
  filterProducts() {
    // Implement filtering logic here based on user input
    // Update this.filteredProducts with the filtered products
  }

  addToCart(product: any) {
    // Implement add to cart logic here
    // You can use a service to manage the shopping cart
  }
}