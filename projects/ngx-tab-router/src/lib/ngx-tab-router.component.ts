import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NgbTabChangeEvent, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxTabRouterService } from './ngx-tab-router.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-tab-router',
  templateUrl: './ngx-tab-router.component.html',
  styleUrls: ['./ngx-tab-router.component.scss']
})
export class NgxTabRouterComponent implements OnInit {

  @ViewChild('tabSet') tabSet;
  @ViewChild('search') search: ElementRef;
  public searchValue: string;
  private modalReference: any;
  public searchErr = false;

  constructor(public tabService: NgxTabRouterService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent($event: KeyboardEvent) {
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
    this.tabService.closeTab(tabId);
    $event.preventDefault();
  }

  public openComponentSearch() {
    this.searchErr = false;
    this.searchValue = '';
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
