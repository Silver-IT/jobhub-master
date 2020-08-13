import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLayoutService {

  adminPanelContainer: ElementRef;

  constructor() {
  }

  setAdminPanelContainer(container) {
    this.adminPanelContainer = container;
  }

  scrollTop(scroll = 0) {
    this.adminPanelContainer.nativeElement.scrollTop = scroll;
  }
}
