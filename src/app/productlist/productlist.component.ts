import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  @ViewChild(ShoppingcartComponent) CartCom: any;
  @ViewChild('username')
  input!: ElementRef<HTMLInputElement>;

  constructor() { }

  myfun(event: any) : void {

    console.log(event.checked);
   
  }
 

  products = [
    {
      id: 1,
      name: "iPhone13",
      price: 1500
    },
    {
      id: 2,
      name: "iPadPro",
      price: 2000
    },
    {
      id: 1,
      name: "MacBookPro",
      price: 4000
    },
  ]

  selectedProduct : any;

  ref_id : any;

  ngOnInit(): void {
  }

  onSelectedProduct(product : any){
    console.log("This is from Parent component -------- ");
    
    console.log(product);

    this.selectedProduct = product;
    
  }

  ngAfterViewInit() {
    console.log(this.CartCom.ref_id);
    this.ref_id = this.CartCom.ref_id;

    console.log(this.input);
    
  }

}
