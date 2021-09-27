import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorIntl } from '@angular/material';

import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { getPortuguesePaginatorIntl } from './languages/portuguese-paginator-intl';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() }
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
