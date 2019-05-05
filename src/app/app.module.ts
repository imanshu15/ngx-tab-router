import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTabRouterModule } from 'projects/ngx-tab-router/src/public-api';
import { TestOneComponent } from './components/test-one/test-one.component';
import { TestTwoComponent } from './components/test-two/test-two.component';
import { TestThreeComponent } from './components/test-three/test-three.component';

@NgModule({
  declarations: [
    AppComponent,
    TestOneComponent,
    TestTwoComponent,
    TestThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxTabRouterModule.forRoot([
      {key: 'TestOne', component: TestOneComponent, title: 'Title 1'},
      {key: 'TestTwo', component: TestTwoComponent, title: 'Title 2'},
      {key: 'TestThree', component: TestThreeComponent, title: 'Title 3'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TestOneComponent,
    TestTwoComponent,
    TestThreeComponent]
})
export class AppModule { }
