import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Cart, Shipping} from '../../states/cart/cart.state.model';
import {CartState} from '../../states/cart/cart.state';
import {AuthState} from '../../../api/states/auth/auth.state';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '../../../ui/dialogs/login-dialog/login-dialog.component';
import {Router} from '@angular/router';
import {SEOService} from '../../../utils/services/seo.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  @Select(AuthState.isLogged) logged$: Observable<boolean>;
  @Select(store => store.cart.items) cart$: Observable<Cart>;
  @Select(CartState.subtotal) subtotal$: Observable<number>;
  @Select(store => store.cart.shipping) shipping$: Observable<Shipping>;
  @Select(CartState.total) total$: Observable<number>;

  constructor(
    private store: Store,
    private router: Router,
    private seo: SEOService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.seo.setTitle('Panier');
  }

  async onPayRequest($event: MouseEvent) {
    if (!AuthState.isLogged(this.store.snapshot().auth)) {
      await this.dialog.open(LoginDialogComponent).afterClosed().toPromise();
    }

    return this.router.navigate(['/paiement/confirmation']);
  }
}
