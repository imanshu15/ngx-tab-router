import { NgModule } from '@angular/core';
import { NgxTabRouterComponent } from './ngx-tab-router.component';
import { NgxTabRouterService } from './ngx-tab-router.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxTabRouterComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [NgxTabRouterComponent],
  providers: [ NgxTabRouterService ]
})
export class NgxTabRouterModule { }
