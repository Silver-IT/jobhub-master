import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PatioPackage } from '../../../core/models/patio-package';

@Component({
  selector: 'job-hub-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent implements OnInit {

  @Input() card: {image: string, label: string, id: PatioPackage, popular?: boolean};
  @Output() navigate: EventEmitter<PatioPackage> = new EventEmitter<PatioPackage>();

  constructor() { }

  ngOnInit(): void {
  }

}
