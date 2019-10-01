import { Injectable, Inject } from '@angular/core';
import {TabModel} from './model/tab.model';
import { NgxTabConfig, NgxTabComponents, NgxTabModel } from './model/export.model';

@Injectable({
  providedIn: 'root'
})
export class NgxTabRouterService {

  private componentList: NgxTabComponents[];
  private initialComponents: NgxTabModel[];
  private tabList: TabModel[];
  private tabId: number;
  public preventTabChange = false;
  private activeTabId = null;
  private reloadOnTabChange = false;
  private showErrors = false;

  constructor(@Inject('config')  config: NgxTabConfig) {
    if (config) {
      this.componentList = config.components;
      this.initialComponents = config.initialComponents;
      this.reloadOnTabChange = config.reloadOnTabChange;
      this.showErrors = config.showErrors;
    }
    this.init();
  }

  init() {
    this.tabList = [];
    this.tabId = 1;

    if (this.initialComponents && this.initialComponents.length > 0) {
      for (const comp of this.initialComponents) {
        this.openTab(comp.tabKey, comp.isDisable);
        this.activeTabId = 1;
      }
    }
  }

  openTab(tabKey: string, data: any = null, isDisable: boolean = false, closeEnable: boolean = true) {
    if (tabKey) {
      const configTab = this.getTab(tabKey);
      if (configTab && configTab[0]) {
        const tab: TabModel = {
          title: configTab[0].title,
          isDisable,
          tabKey,
          tabId: this.tabId,
          closeEnable,
          data
        };
        if (tab) {
          this.tabList.push(tab);
          this.tabId++;

          this.activeTabId = tab.tabId;
          return tab;
        }
      } else {
        this.consoleError('NgxTabRrouter: Invalid tabKey');
      }
    } else {
      this.consoleError('NgxTabRrouter: tabKey missing');
    }
    return null;
  }

  closeTab(tabId: number) {
    if (tabId) {
      this.tabList = this.tabList.filter(a => a.tabId !== tabId);
    }
  }

  getOpenTabCount(): number {
    return this.tabList ? this.tabList.length : 0;
  }

  tabs() {
    return this.tabList;
  }

  getComponents(): NgxTabComponents[] {
    return this.componentList;
  }

  private getTab(key: string) {
    return this.componentList.filter(a => a.key.toLowerCase().trim() === key.trim().toLocaleLowerCase());
  }

  setActiveTabId(id: number) {
    this.activeTabId = id;
  }

  getActiveTabId() {
    return this.activeTabId;
  }

  consoleError(message: string) {
    if (this.showErrors) {
      console.error(message);
    }
  }
}
