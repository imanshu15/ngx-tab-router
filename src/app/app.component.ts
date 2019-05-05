import { Component } from '@angular/core';
import { NgxTabRouterService } from 'projects/ngx-tab-router/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-tab-router';

  constructor(private tabService: NgxTabRouterService) { }

  openTab(value) {
    this.tabService.openTab(value);
  }
}

