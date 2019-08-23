import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BtnSelectComponent} from './components/btn-select/btn-select.component';
import {TwoLayoutComponent} from './layouts/two-layout/two-layout.component';
import {SingleLayoutComponent} from './layouts/single-layout/single-layout.component';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import { CardComponent } from './components/card/card.component';
import {MatCardModule, MatMenuModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    DefaultLayoutComponent,
    SingleLayoutComponent,
    TwoLayoutComponent,
    BtnSelectComponent,
    CardComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // Material
    MatMenuModule,
    FlexLayoutModule
  ],
  exports: [
    DefaultLayoutComponent,
    SingleLayoutComponent,
    TwoLayoutComponent,
    BtnSelectComponent,
    CardComponent
  ]
})
export class UIModule {
}
