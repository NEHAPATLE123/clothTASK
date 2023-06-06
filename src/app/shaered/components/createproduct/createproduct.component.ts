import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ProductsService } from '../../services/productsservice.service';
import { Iproducts } from '../../models/interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent implements OnInit {
  PordutcId!: number;
  productData!: FormGroup
  productObj !: Iproducts;
  productCategory!: any[];
  objPro !: Iproducts;

  constructor(private _Routes: ActivatedRoute,
    private _productsService: ProductsService,
    private _router: Router) { }

  ngOnInit(): void {
    this.MethodForm()
    this._Routes.params.subscribe((param: Params) =>
      this.PordutcId = param['id'])
      console.log(this.PordutcId)

    if (this.PordutcId) {
      this._productsService.getSingleProduct(this.PordutcId).subscribe((res) => this.productData.patchValue(res)
      )
      // console.log(this.objPro)

  
    }
  }

  MethodForm(): void {
    this._productsService.getCategory().subscribe((res) =>
      this.productCategory = [...new Set(res.map(ele => ele.category))]
    )
    this.productData = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      rating: new FormGroup({
        rate: new FormControl(null, [Validators.required]),
        count: new FormControl(null, [Validators.required]),
      })
    })
  }

  Onsubmit() {
    let obj = {
      ...this.productData.value
    }
    console.log(obj);
    this._productsService.getSinglePost(obj).subscribe((res) => res)
    this._router.navigate(['/products'])
  }

  onUpdate() {
    let pathObj = {
      id: this.PordutcId,
      ...this.productData.value
    }
    this._productsService.getPatchObj(pathObj).subscribe((res) => res)
    this._router.navigate(['/products'])
  }

}
