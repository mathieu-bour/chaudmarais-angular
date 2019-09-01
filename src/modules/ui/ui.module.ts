import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BtnSelectComponent} from './components/btn-select/btn-select.component';
import {TwoLayoutComponent} from './layouts/two-layout/two-layout.component';
import {SingleLayoutComponent} from './layouts/single-layout/single-layout.component';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {CardComponent} from './components/card/card.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NavComponent} from './components/nav/nav.component';
import {AddressComponent} from './components/address/address.component';
import {BannerComponent} from './components/banner/banner.component';
import {LoginDialogComponent} from './dialogs/login-dialog/login-dialog.component';
import {RegisterDialogComponent} from './dialogs/register-dialog/register-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddressDialogComponent} from './dialogs/address-dialog/address-dialog.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';

const MaterialModules = [
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule,
];

const Layouts = [
  DefaultLayoutComponent,
  SingleLayoutComponent,
  TwoLayoutComponent,
];

const Dialogs = [
  LoginDialogComponent,
  RegisterDialogComponent,
  AddressDialogComponent
];

@NgModule({
  declarations: [
    // Layouts
    ...Layouts,
    // Dialogs
    ...Dialogs,
    // Elements
    AddressComponent,
    BannerComponent,
    BtnSelectComponent,
    CardComponent,
    FooterComponent,
    NavComponent,
    SidebarComponent,
    AddressDialogComponent,
    AddressFormComponent
  ],
  entryComponents: [
    ...Dialogs
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    ...MaterialModules,
    // FlexLayouts: TO DELETE
    FlexLayoutModule
  ],
  exports: [
    ...MaterialModules,
    // Layouts
    ...Layouts,
    // Dialogs
    ...Dialogs,
    // Elements
    AddressComponent,
    BannerComponent,
    BtnSelectComponent,
    CardComponent,
    AddressFormComponent
  ]
})
export class UIModule {
  constructor(private registry: MatIconRegistry) {
    this.registry.registerFontClassAlias('cm', 'chaud-marais-icons');
  }
}
