import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTabRouterModule } from 'projects/ngx-tab-router/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxTabRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
