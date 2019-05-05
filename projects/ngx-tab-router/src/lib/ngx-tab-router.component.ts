import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgxTabRouterService } from './ngx-tab-router.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-tab-router',
  templateUrl: './ngx-tab-router.component.html',
  styleUrls: ['./ngx-tab-router.component.scss']
})
export class NgxTabRouterComponent implements OnInit {

  constructor(private tabService: NgxTabRouterService) { }

  ngOnInit() {
  }


  public beforeChange($event: NgbTabChangeEvent) {
    if (this.tabService.preventTabChange) {
      $event.preventDefault();
    }
  }

  public closeTab(tabId: number, $event) {
    this.tabService.closeTab(tabId);
    $event.preventDefault();
  }
}
