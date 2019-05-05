import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxTabRouterComponent } from './ngx-tab-router.component';
import { NgxTabRouterService } from './ngx-tab-router.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgxTabLoaderDirective } from './ngx-tab-loader.directive';
import { NgxTabConfig } from './model/export.model';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxTabRouterComponent, NgxTabLoaderDirective],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [NgxTabRouterComponent],
  providers: [ NgxTabRouterService ]
})
export class NgxTabRouterModule {

  static forRoot(config: NgxTabConfig): ModuleWithProviders {
    return {
      ngModule: NgxTabRouterModule,
      providers: [
        NgxTabRouterService, {provide: 'config', useValue: config }
      ]
    };
  }
}
