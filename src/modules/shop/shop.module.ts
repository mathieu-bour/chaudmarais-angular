import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListPageComponent} from './pages/products-list-page/products-list-page.component';
import {RouterModule} from '@angular/router';
import {ReturnPolicyPageComponent} from './pages/return-policy-page/return-policy-page.component';
import {ProductViewPageComponent} from './pages/product-view-page/product-view-page.component';
import {APIModule} from '../api/api.module';
import {UtilsModule} from '../utils/utils.module';
import {UIModule} from '../ui/ui.module';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {ProductThumbnailsSwiperComponent} from './components/product-thumbnails-swiper/product-thumbnails-swiper.component';
import {ProductPreviewComponent} from './components/product-preview/product-preview.component';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {CartElementComponent} from './components/cart-element/cart-element.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {CartState} from './states/cart/cart.state';
import {ShopState} from './states/shop/shop.state';
import {FlexLayoutModule} from '@angular/flex-layout';
import {shopRoutes} from './shop.routes';
import {AccountModule} from '../account/account.module';


@NgModule({
  declarations: [
    ProductsListPageComponent,
    ReturnPolicyPageComponent,
    ProductViewPageComponent,
    ProductThumbnailsSwiperComponent,
    ProductPreviewComponent,
    CartPageComponent,
    CartElementComponent
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild(shopRoutes),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // Vendors
    NgxsModule.forFeature([
      CartState,
      ShopState
    ]),
    NgxImageZoomModule,
    SwiperModule,
    // Local
    AccountModule,
    APIModule,
    UtilsModule,
    UIModule
  ]
})
export class ShopModule {
}
