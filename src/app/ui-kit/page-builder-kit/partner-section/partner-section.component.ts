import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-partner-section',
  templateUrl: './partner-section.component.html',
  styleUrls: ['./partner-section.component.scss']
})
export class PartnerSectionComponent implements OnInit {

  partners = [
    {image: 'assets/images/logos/icpi.svg', name: 'icpi'},
    {image: 'assets/images/logos/techo-pro.svg', name: 'techo-pro'},
    {image: 'assets/images/logos/belgard.svg', name: 'belgard'},
    {image: 'assets/images/logos/versalok.svg', name: 'versalok'},
    {image: 'assets/images/logos/cambridge.svg', name: 'cambridge'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
