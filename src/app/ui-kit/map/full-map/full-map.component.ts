import { Component, Input, OnInit } from '@angular/core';

import { mapRetroStyle } from '../../../core/data/consts';
import { MapMarker } from '../../../core/models/base';

@Component({
  selector: 'job-hub-full-map',
  templateUrl: './full-map.component.html',
  styleUrls: ['./full-map.component.scss']
})
export class FullMapComponent implements OnInit {

  @Input() height = 180;
  @Input() mapTypeControl: boolean;
  @Input() mapDraggable: boolean;
  @Input() markers: MapMarker<any>[] = [];

  mapRetroStyle = mapRetroStyle;

  constructor() {
  }

  ngOnInit(): void {
  }
}
