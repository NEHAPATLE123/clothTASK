import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iproducts } from '../models/interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product: string = `${environment.BaseUrl}/products`;
  cateoryUrl : string = `${environment.category}`

  getCategory():Observable<any[]>{
    return this._http.get<any[]>(this.cateoryUrl)
  }

  constructor(private _http: HttpClient) { }

  getALLProducts():Observable<Iproducts[]>{
    return this._http.get<Iproducts[]>(this.product)
  }

  getSingleProduct(id:number):Observable<Iproducts>{
   let Obj = `${environment.BaseUrl}/products/${id}`
   return this._http.get<Iproducts>(Obj)
  }

  getSinDeleteObj(id:number):Observable<Iproducts>{
    let url = `${this.product}/${id}`
    return this._http.delete<Iproducts>(url)
  }

  getSinglePost(post:Iproducts):Observable<Iproducts>{
    return this._http.post<Iproducts>(this.product, post)
  }
  
  getPatchObj(post:Iproducts):Observable<Iproducts>{
    let PatchUrl = `${this.product}/${post.id}`
    return this._http.patch<Iproducts>(PatchUrl, post)

  }
}
