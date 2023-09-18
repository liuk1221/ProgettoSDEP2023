import { Component, OnInit } from '@angular/core';
import { ShopComponent } from "../shop.component";
import { ForumDataDB } from "../../../servizi/forum-data-db";
import { JsonPipe } from '@angular/common';
import { ShopNowComponent } from '../../shop-now/shop-now.component';

@Component({
  selector: 'app-shop-grid-list',
  templateUrl: './shop-grid-list.component.html',
  styleUrls: ['./shop-grid-list.component.scss']
})
export class ShopGridListComponent implements OnInit {
  public result_query : ForumDataDB | ForumDataDB[];

  constructor (
    public shop: ShopComponent,
    public preorder_page: ShopNowComponent) { }

  // keep the following:

  ngOnInit(): void {
      this.preorder_page.saveNoPreorder()
  }
  
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

