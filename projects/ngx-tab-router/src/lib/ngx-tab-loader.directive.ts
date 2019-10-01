import { Input, ViewContainerRef, ComponentFactoryResolver, Type, Directive } from '@angular/core';
import { NgxTabRouterService } from './ngx-tab-router.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngxTabLoader]'
})
export class NgxTabLoaderDirective {
  @Input() component: string;
  @Input() data: any;
  componentRef;
  init = false;

  constructor(private tabService: NgxTabRouterService, private vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    if (this.init) { return; }
    if (this.component) {
      const componentsList = this.tabService.getComponents();

      if (componentsList && componentsList.length > 0) {

        const matchedComponent = componentsList.filter(a => a.key.trim().toLowerCase() === this.component.trim().toLowerCase());
        if (matchedComponent && matchedComponent[0]) {
          const factory = this.resolver.resolveComponentFactory(matchedComponent[0].component);
          const compRef = this.vcRef.createComponent(factory);

          if (this.componentRef) {
            this.componentRef.destroy();
          }

          this.componentRef = compRef;

          if  (this.data) {
            this.componentRef.instance.data = JSON.parse(this.data);
          }
          this.init = true;
        }
      } else {
          this.tabService.consoleError('NgxTabRrouter - Define components in Module.forRoot()');
        }
      } else {
        this.tabService.consoleError('NgxTabRrouter - Component key missing');
      }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  public ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
