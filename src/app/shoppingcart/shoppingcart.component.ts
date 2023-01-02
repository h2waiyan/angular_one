import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  @Input() name! : string;

  @Input() productList : any = [];
  @Output() onSelected = new EventEmitter();


  ref_id = Math.random() * 1000000;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeE(event: any){
    console.log(event.target.value);
  }

  onSelectedProduct(product : any) {
    this.onSelected.emit(product);
  }

}
