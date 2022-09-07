import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './interfaces/album.interface';
import { Product } from './interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _albumUrl = '../assets/album.json';
  private readonly _productUrl = './assets/products.json';

  constructor(private _http: HttpClient) {}

  getAlbum(id: number): Observable<Album> {
    return this._http.get<Album>(this._albumUrl);
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productUrl);
  }
}
