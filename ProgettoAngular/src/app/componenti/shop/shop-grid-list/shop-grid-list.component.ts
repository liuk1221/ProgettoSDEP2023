import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-grid-list',
  templateUrl: './shop-grid-list.component.html',
  styleUrls: ['./shop-grid-list.component.scss']
})
export class ShopGridListComponent {
  // placeholder, to be replaced with plugin DB query
  tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
  // to be initialized to proper DBBoject array
  private result_query : number[] = [];
  // placeholder, ...
  private color_arrays = [
    'lightblack',
    'lightblue',
    'lightgreen',
    'lightgray',
    'lightyellow',
    'lightred',
    'lightpink'
  ];
  itemrange(n: number){
    return [...Array(n).keys()];
  }
  one_color(){
    return this.color_arrays[
      Math.floor(Math.random() * (this.color_arrays.length))];
  }
  // keep the following:
  list_of_products(){
    // replace with proper query
    return this.result_query = this.itemrange(20);
  }
  // private cond1;
  // private cond2;
  // private ...
  // queryDBforProducts(marmi_db : DB, con1 | cond2 | ... | condN){
    // this.rows = 4;
    // this.cols = total_elements // 4;
    // return query(con1 | cond2 | ... | condN)
  // }

}

