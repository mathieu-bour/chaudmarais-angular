import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './components/banner/banner.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {LegalPageComponent} from './pages/legal-page/legal-page.component';
import {ThanksPageComponent} from './pages/thanks-page/thanks-page.component';
import {ReturnPolicyPageComponent} from './pages/return-policy-page/return-policy-page.component';
import {HistoryPageComponent} from './pages/history-page/history-page.component';
import {CampaignPageComponent} from './pages/campaign-page/campaign-page.component';
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
import {MatDialogModule, MatStepperModule} from '@angular/material';
import {UserModule} from '../user/user.module';
import {CheckoutPageComponent} from './pages/checkout-page/checkout-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CartTableComponent} from './components/cart-table/cart-table.component';
import {NgxsModule} from '@ngxs/store';
import {CartState} from './states/cart/cart.state';
import {ShopState} from './states/shop/shop.state';


@NgModule({
  declarations: [
    BannerComponent,
    HomePageComponent,
    LegalPageComponent,
    ThanksPageComponent,
    ReturnPolicyPageComponent,
    HistoryPageComponent,
    CampaignPageComponent,
    ProductViewPageComponent,
    ProductThumbnailsSwiperComponent,
    ProductPreviewComponent,
    CartPageComponent,
    CartElementComponent,
    CheckoutPageComponent,
    CartTableComponent
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // Vendors
    NgxsModule.forFeature([
      CartState,
      ShopState
    ]),
    NgxImageZoomModule,
    SwiperModule,
    // Material
    MatDialogModule,
    MatStepperModule,
    // Local
    APIModule,
    UtilsModule,
    UIModule,
    UserModule
  ]
})
export class ShopModule {
}
