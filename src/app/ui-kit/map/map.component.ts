import { Component, Input, OnInit } from '@angular/core';
import { mapRetroStyle } from '../../core/data/consts';

@Component({
  selector: 'job-hub-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() latitude: number;
  @Input() longitude: number;
  @Input() height = 180;
  @Input() mapTypeControl: boolean;
  @Input() mapDraggable: boolean;

  mapRetroStyle = mapRetroStyle;

  constructor() { }

  ngOnInit(): void {
  }

}
