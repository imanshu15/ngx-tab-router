import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NgbTabChangeEvent, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxTabRouterService } from './ngx-tab-router.service';
import { Inject } from '@angular/core';
import { NgxTabConfig} from './model/export.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-tab-router',
  templateUrl: './ngx-tab-router.component.html',
  styleUrls: ['./ngx-tab-router.component.scss']
})
export class NgxTabRouterComponent implements OnInit {

  @ViewChild('tabSet') tabSet;
  @ViewChild('search') search: ElementRef;
  @ViewChild('close') close: ElementRef;
  private modalReference: any;

  public searchValue: string;
  public searchErr = false;
  private defaultCloseMessage = 'Are you sure you want to close?';
  private closeTabId: number;
  // configs
  private closeConfirm = false;
  private closeConfirmMessage: string;

  constructor(@Inject('config')  config: NgxTabConfig, public tabService: NgxTabRouterService, private modalService: NgbModal) {
    if (config) {
      this.closeConfirm = config.closeConfirm != null ? config.closeConfirm : false;
      this.closeConfirmMessage = config.closeConfirmMessage ? config.closeConfirmMessage : this.defaultCloseMessage;
    }
   }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent($event: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    if (($event.ctrlKey) && $event.keyCode === 82) {
      $event.preventDefault();
      this.openComponentSearch();
    }
  }

  public beforeChange($event: NgbTabChangeEvent) {
    if (this.tabService.preventTabChange) {
      $event.preventDefault();
    }
  }

  public closeTab(tabId: number, $event) {
    this.closeTabId  = null;
    if (this.closeConfirm) {
      this.closeTabId = tabId;
      this.modalReference = this.modalService.open(this.close, { size: 'sm', centered: true });
    } else {
      this.tabService.closeTab(tabId);
    }
    $event.preventDefault();
  }

  public closeConfirmYes() {
    if (this.closeTabId) {
      this.tabService.closeTab(this.closeTabId);
    }
    this.modalReference.close();
  }

  public closeConfirmNo() {
    if (this.modalReference) {
      this.modalReference.close();
    }
  }

  public openComponentSearch() {
    this.searchErr = false;
    this.searchValue = '';
    if (this.modalReference) {
      this.modalReference.close();
    }
    this.modalReference = this.modalService.open(this.search, { size: 'sm', centered: true });
  }

  public searchComponent() {
    this.searchErr = false;
    if (this.searchValue) {
      const tab = this.tabService.openTab(this.searchValue);
      if (tab) {
        this.modalReference.close();
      } else {
        this.searchErr = true;
      }
    }
  }
}
