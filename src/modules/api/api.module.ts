import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JWTInterceptor} from './interceptors/jwt.interceptor';
import {NgxsModule} from '@ngxs/store';
import {AuthState} from './states/auth/auth.state';
import {CacheState} from './states/cache/cache.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([AuthState, CacheState])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}
  ]
})
export class APIModule {
}
