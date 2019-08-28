import {Injectable} from '@angular/core';
import {Product} from '../../api/models/product';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class URLService {
  product(product: Product) {
    return `${environment.url}/eshop/produits/${product.slug}-${product.id}`;
  }
}
