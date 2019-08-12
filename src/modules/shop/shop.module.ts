import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {RouterModule} from '@angular/router';
import { LegalPageComponent } from './pages/legal-page/legal-page.component';



@NgModule({
  declarations: [DefaultLayoutComponent, SidebarComponent, FooterComponent, BannerComponent, HomePageComponent, LegalPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ShopModule { }
