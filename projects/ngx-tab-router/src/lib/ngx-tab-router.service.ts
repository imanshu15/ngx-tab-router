import { Injectable, Inject } from '@angular/core';
import { TabModel, ComponentsConfig } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class NgxTabRouterService {

  constructor(@Inject('config')  config: ComponentsConfig[]) {
    if (config) {
      this.componentList = config;
    }
    this.init();
  }

  private componentList: ComponentsConfig[];
  private tabList: TabModel[];
  private tabId: number;
  public preventTabChange = false;

  init() {
    this.tabList = [];
    this.tabId = 1;
  }

  openTab(tabKey: string, isDisable: boolean = false) {
    if (tabKey) {
      const configTab = this.getTab(tabKey);
      if (configTab && configTab[0]) {
        const tab: TabModel = {
          title: configTab[0].title,
          isDisable,
          tabKey,
          tabId: this.tabId
        };
        if (tab) {
          this.tabList.push(tab);
          this.tabId++;
          return tab;
        }
      } else {
        console.error('NgxTabRrouter: Invalid tabKey');
      }
    } else {
      console.error('NgxTabRrouter: tabKey missing');
    }
    return null;
  }

  closeTab(tabId: number) {
    if (tabId) {
      this.tabList = this.tabList.filter(a => a.tabId !== tabId);
    }
  }

  tabs() {
    return this.tabList;
  }

  getComponents(): ComponentsConfig[] {
    return this.componentList;
  }

  private getTab(key: string) {
    return this.componentList.filter(a => a.key === key);
  }
}
