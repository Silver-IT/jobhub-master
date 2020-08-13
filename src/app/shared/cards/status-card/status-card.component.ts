import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'job-hub-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {

  @Input() image: string;
  @Input() value;
  @Input() text: string;
  @Input() link;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToLink() {
    if (this.link) {
      this.router.navigate(this.link);
    }
  }
}
