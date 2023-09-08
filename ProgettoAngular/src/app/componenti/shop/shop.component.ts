import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products = ['one'];

  filteredProducts: any[] = [];

  filterProducts() {
    // Implement filtering logic here based on user input
    // Update this.filteredProducts with the filtered products
  }

  addToCart(product: any) {
    // Implement add to cart logic here
    // You can use a service to manage the shopping cart
  }
}