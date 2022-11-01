import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

const API_URL = 'https://fakestoreapi.com/products';

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(API_URL);
  }

  create(product: Partial<ProductModel>): Observable<ProductModel> {
    return this._httpClient.post<ProductModel>(API_URL, product);
  }

  get(id: number): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(`${API_URL}/${id}`);
  }
}
