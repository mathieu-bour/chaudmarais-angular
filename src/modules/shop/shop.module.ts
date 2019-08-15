import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';
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
import {TwoLayoutComponent} from './layouts/two-layout/two-layout.component';
import {SingleLayoutComponent} from './layouts/single-layout/single-layout.component';
import {UtilsModule} from '../utils/utils.module';
import {UiModule} from '../ui/ui.module';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {SwiperModule} from 'ngx-swiper-wrapper';
import { ProductThumbnailsSwiperComponent } from './components/product-thumbnails-swiper/product-thumbnails-swiper.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    SidebarComponent,
    FooterComponent,
    BannerComponent,
    HomePageComponent,
    LegalPageComponent,
    ThanksPageComponent,
    ReturnPolicyPageComponent,
    HistoryPageComponent,
    CampaignPageComponent,
    ProductViewPageComponent,
    TwoLayoutComponent,
    SingleLayoutComponent,
    ProductThumbnailsSwiperComponent,
    ProductPreviewComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    APIModule,
    RouterModule,
    UtilsModule,
    UiModule,
    NgxImageZoomModule,
    SwiperModule
  ]
})
export class ShopModule {
}
