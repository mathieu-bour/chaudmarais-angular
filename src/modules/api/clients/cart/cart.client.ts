import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngxs/store';
import {environment} from '../../../../environments/environment';
import {SuccessResponse} from '../../responses/success.response';

@Injectable({
  providedIn: 'root'
})
export class CartClient {
  constructor(private http: HttpClient, private store: Store) {
  }

  initialize(cart: [{ stock_id: number, quantity: number }]) {
    return this.http.post<SuccessResponse<stripe.paymentIntents.PaymentIntent>>
    (`${environment.api}/cart/initialize`, {cart})
      .toPromise();
  }

  update(paymentIntentId: string, data: any) {
    return this.http.post<SuccessResponse<stripe.paymentIntents.PaymentIntent>>
    (`${environment.api}/cart/update/${paymentIntentId}`, data)
      .toPromise();
  }
}
