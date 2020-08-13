import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '../../core/models/option';

@Component({
  selector: 'job-hub-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {

  @Input() tabs: Option<any>[] = [];
  @Input() selected: Option<any> = null;
  @Output() selectedChange: EventEmitter<Option<any>> = new EventEmitter<Option<any>>();

  constructor() { }

  ngOnInit(): void {
    this.selected = this.tabs[0];
  }

  select(tab: Option<any>) {
    this.selected = tab;
    this.selectedChange.emit(this.selected);
  }

}
