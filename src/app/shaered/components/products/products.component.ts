import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/productsservice.service';
import { Iproducts } from '../../models/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  ProductArray: Array<Iproducts> = []

  constructor(private _Product:ProductsService) { }

  ngOnInit(): void {
    this._Product.getALLProducts().subscribe((res)=> this.ProductArray = res )
  }

}
