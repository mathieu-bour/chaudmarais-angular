import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultLayoutComponent} from '../ui/layouts/default-layout/default-layout.component';
import {SidebarComponent} from '../ui/components/sidebar/sidebar.component';
import {FooterComponent} from '../ui/components/footer/footer.component';
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
import {TwoLayoutComponent} from '../ui/layouts/two-layout/two-layout.component';
import {SingleLayoutComponent} from '../ui/layouts/single-layout/single-layout.component';
import {UtilsModule} from '../utils/utils.module';
import {UIModule} from '../ui/ui.module';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {SwiperModule} from 'ngx-swiper-wrapper';
import { ProductThumbnailsSwiperComponent } from './components/product-thumbnails-swiper/product-thumbnails-swiper.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartElementComponent } from './components/cart-element/cart-element.component';
import {MatCardModule, MatDialogModule} from '@angular/material';
import {LoginDialogComponent} from '../user/components/login-dialog/login-dialog.component';
import {UserModule} from '../user/user.module';


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
    CartElementComponent
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    // Vendors
    NgxImageZoomModule,
    SwiperModule,
    // Material
    MatDialogModule,
    // Local
    APIModule,
    UtilsModule,
    UIModule,
    UserModule
  ]
})
export class ShopModule {
}
