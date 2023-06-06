import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproducts } from '../../models/interface';
import { ProductsService } from '../../services/productsservice.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  productId!: number;
  produtcObj !: Iproducts;

  constructor(private _route: ActivatedRoute,
    private _productService: ProductsService,
    private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.productId = +params['id'];
    })
    this._productService.getSingleProduct(this.productId).subscribe((res) => this.produtcObj = res)

  }

  onDelete(id: number) {
    this._productService.getSinDeleteObj(this.productId).subscribe((res) => res)
    this._router.navigate(['/products'])
  }

}
