import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss']
})
export class SocialButtonsComponent implements OnInit {

  links = [
    {image: 'assets/images/icons/social/facebook.svg', name: 'facebook', link: 'https://www.facebook.com/JDLandscapingLLC/'},
    {image: 'assets/images/icons/social/instagram.svg', name: 'instagram', link: 'https://www.instagram.com/jdlandscapingllc/'},
    {image: 'assets/images/icons/social/pinterest.svg', name: 'pinterest', link: 'https://www.pinterest.com/jdlandscapingllc/'},
    {image: 'assets/images/icons/social/google.svg', name: 'google', link: 'https://g.co/kgs/qszrXw'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
