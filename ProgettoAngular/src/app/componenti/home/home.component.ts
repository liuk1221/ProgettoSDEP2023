import { Component, NgZone, OnInit } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';
import { ShopNowComponent } from '../shop-now/shop-now.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private zona_acquisti: ShopNowComponent) {}

  ngOnInit(): void {
      this.zona_acquisti.deleteOrder()
  }

 }
