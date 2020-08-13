import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTES } from '../../core/data/routes';
import { Timeline } from '../../core/models/timeline';
import { CommonService } from '../../core/services/common.service';
import { MarketingService } from '../../core/services/marketing.service';
import { PageName } from '../../core/models/page-name';

@Component({
  selector: 'job-hub-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  ROUTES = ROUTES;

  timeline: Timeline[] = [
    {
      events: [
        {
          label: '2004',
          text: 'In 2004, after saving enough money from snow and lawn the year before, Joe then purchased his first Bobcat Skid steer and entered the Hardscape business by completing small walkways and small patios after school. Joe quickly realized that he had a passion for the Hardscape industry and enjoyed the fact that each job was its own custom project that has to be detailed and designed for each customer’s taste.',
          image: 'assets/images/landing-page/about/2004.png'
        },
        {
          label: '2005',
          text: 'In 2005, once Joe had graduated from Howell Cheney Technical School, he received his first major Hardscape project which was a 9,500 square foot project at the CREC School in Bloomfield, CT. This project was the turning point in J&D Landscaping and solidified the decision by Joe to focus only on Hardscape projects. Joe’s passion has only grown more over the years and he feels Hardscaping is a skill and an art. Joe believes Hardscaping is not something that should be doneon the side or done 1 or 2 days a week in between mowing lawns and landscaping. He and his team exclusively focus on Hardscape projects and specialize in creating the specific design of your choice.',
          image: 'assets/images/landing-page/about/2005.png'
        },
        {
          label: '2007',
          text: 'In 2007, Joe’s brother, Nick Masciovecchio joined J&D Landscaping and has been a huge part in taking the business to the next level. With Nick’s many skills which include but are not limited to, his attention to detail attitude, precise cutting skills and superior customer service, Nick has taken on a leadership role with the company and continues to strive with each completed project.',
          image: 'assets/images/landing-page/about/2007.png'
        },
        {
          label: 'Nowadays',
          text: 'With a goal of focusing strictly on Hardscape projects and listening to each customer’s wants and needs, Joe and Nick have been able to develop J&D Landscaping into what it is today; A company devoted to Quality, Efficiency and Affordability that can handle all types of Hardscape projects.',
          image: 'assets/images/landing-page/about/now.png'
        }
      ]
    }
  ];

  private sessionId: string;

  constructor(
    private router: Router,
    private commonService: CommonService,
    private marketingService: MarketingService
  ) {
  }

  ngOnInit(): void {
    this.marketingService.pageVisit(PageName.AboutUsPage).then(id => this.sessionId = id);
  }

  ngOnDestroy(): void {
    this.marketingService.pageVisit(PageName.AboutUsPage, this.sessionId);
  }

  navigate() {
    this.router.navigate([ROUTES.landingPages.whyChooseUs.root]).then(() => {
      this.commonService.scrollToTop();
    });
  }

}
