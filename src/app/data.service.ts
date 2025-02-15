import { Injectable } from '@angular/core';
import { product } from '../app/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getProducts(): product[]{
    return this.products
  }

  private products: product[] = []
  constructor() {

    this.products[0] = new product('s1021', 'Tata', 'Dish TV', 10, 2500);
    this.products[1] = new product('K3023', 'Wipro', 'Blubs', 210, 300);
    this.products[2] = new product('mp3421', 'TVS', 'Belts', 210, 5500);
    this.products[3] = new product('tg021', 'Reliance', 'Dish TV', 50, 4500);
    this.products[4] = new product('po432', 'ActFiber', 'Router', 60, 1400);
    this.products[5] = new product('ji909', 'Samsung', 'Smart TV', 50, 72500);
    this.products[6] = new product('bs654', 'LG', 'Airconditioners', 20, 52500);
    this.products[7] = new product('vh675', 'Crompton',
      'Ceiling Fans',
      25,
      1500
    );
    this.products[8] = new product(
      'h2901',
      'Carrier',
      'Aircondirioners',
      5,
      50500
    );
    this.products[9] = new product('yu721', 'Usha', 'Table fans', 40, 1200);
    this.products[10] = new product('re454', 'One+', 'Mobiles', 50, 82500);
  }
}
