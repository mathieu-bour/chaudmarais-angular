import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JWTInterceptor} from './interceptors/jwt.interceptor';
import {NgxsModule} from '@ngxs/store';
import {AuthState} from './states/auth/auth.state';
import {AddressesState} from './states/addresses/addresses.state';
import {ProductsState} from './states/products/products.state';
import {StocksState} from './states/stocks/stocks.state';
import {UsersState} from './states/users/users.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      AuthState,
      AddressesState,
      ProductsState,
      StocksState,
      UsersState
    ])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
  ]
})
export class APIModule {
}
