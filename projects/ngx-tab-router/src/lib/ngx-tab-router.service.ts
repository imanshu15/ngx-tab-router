import { Injectable } from '@angular/core';
import { TabModel } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class NgxTabRouterService {


  private tabSetTypes = ['pills'];
  private tabList: TabModel[];
  private tabId: number;
  public preventTabChange = false;

  constructor() {

    this.init();
  }

  init() {
    this.tabList = [];
    this.tabId = 1;
  }

  openTab(title: string, isDisable: boolean = false, tabCode: string = null) {
    if (title) {
      const tab: TabModel = {
        title,
        isDisable,
        tabCode,
        tabId: this.tabId
      };
      if (tab) {
        this.tabList.push(tab);
        this.tabId++;
      }
    }
  }

  closeTab(tabId: number) {
    if (tabId) {
      this.tabList = this.tabList.filter(a => a.tabId !== tabId);
    }
  }

  tabs() {
    return this.tabList;
  }
}
