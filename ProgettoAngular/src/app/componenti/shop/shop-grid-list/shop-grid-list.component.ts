import { Component } from '@angular/core';
import { ShopComponent } from "../shop.component";
import { ForumDataDB } from "../../../servizi/forum-data-db";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-shop-grid-list',
  templateUrl: './shop-grid-list.component.html',
  styleUrls: ['./shop-grid-list.component.scss']
})
export class ShopGridListComponent {
  public result_query : ForumDataDB | ForumDataDB[];

  constructor (private shop: ShopComponent) { }

  // keep the following:
  
  rows(){
    return this.shop.rows;
  }

  list_of_products() : ForumDataDB[]{
    // replace with proper query
    return this.shop.prodotti;
  }

  list_of_features(obj: ForumDataDB[]){
    var features : any[] | undefined = [];
    for (var item in obj) {
      for (var key of item){
        features.push(item[key])
      }
    }
    return features;
  }

  get_src_uri(name: string){
    return '../../../assets/HomePageImages/marmojpgs/'+name.replaceAll(' ','-')+'.jpg'
  }

}

