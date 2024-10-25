import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  productId:number = 8484
  productDesc:string= "samsungs23"
  os:string="Android"
  price:number = 100000

}
