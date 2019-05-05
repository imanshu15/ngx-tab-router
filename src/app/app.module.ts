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
    NgxTabRouterModule.forRoot({
      components: [
        {key: 'one', component: TestOneComponent, title: 'Component 1'},
        {key: 'two', component: TestTwoComponent, title: 'Component 2'},
        {key: 'three', component: TestThreeComponent, title: 'Component 3'}
      ],
      initialComponents : [
        {tabKey: 'one'}
      ],
      reloadOnTabChange: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TestOneComponent,
    TestTwoComponent,
    TestThreeComponent]
})
export class AppModule { }
