import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'job-hub-image-renderer',
  templateUrl: './image-renderer.component.html',
  styleUrls: ['./image-renderer.component.scss']
})
export class ImageRendererComponent implements OnInit {

  @Input() src;
  @Input() height = 65;
  @Input() readonly =  true;
  @Input() objectFit = 'cover';
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
