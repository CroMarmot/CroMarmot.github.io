import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatTreeModule,
  MatListModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LayoutModule} from '@angular/cdk/layout';
import {AppCsnavComponent} from './app-csnav/app-csnav.component';
import {CstableComponent} from './cstable/cstable.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppCsnavComponent,
    CstableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTreeModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
