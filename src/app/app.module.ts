import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
  MatSortModule,
  MatTabsModule,
} from '@angular/material';
import {DashboardComponent} from './cs-dashboard/dashboard.component';
import {LayoutModule} from '@angular/cdk/layout';
import {AppCsnavComponent} from './cs-nav/cs-nav.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {CodeForcesComponent} from './code-forces/code-forces.component';
import {HttpClientModule} from '@angular/common/http';
import { UserRatingComponent } from './code-forces/user-rating/user-rating.component';
import { RatingGraphComponent } from './code-forces/rating-graph/rating-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppCsnavComponent,
    CodeForcesComponent,
    UserRatingComponent,
    RatingGraphComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    /* @Angular/Material*/
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
    MatTabsModule,
    /* mdbootstrap */
    MDBBootstrapModule.forRoot(),
    /* Custom */
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ], /* Dangerous! for mdbootstrap */
})
export class AppModule {}
