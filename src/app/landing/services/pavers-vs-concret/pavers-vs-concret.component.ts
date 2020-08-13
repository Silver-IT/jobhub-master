import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarketingService } from '../../../core/services/marketing.service';
import { PageName } from '../../../core/models/page-name';

const PageSubName = 'PAVERS_VS_CONCRET';

@Component({
  selector: 'job-hub-pavers-vs-concret',
  templateUrl: './pavers-vs-concret.component.html',
  styleUrls: ['./pavers-vs-concret.component.scss']
})
export class PaversVsConcretComponent implements OnInit, OnDestroy {

  cardsAry = [
    {
      imgUrl: 'assets/images/landing-page/services/pavers-vs-concret/icon-crack.svg',
      title: 'Pavers are guaranteed to NEVER crack',
      description: 'With proper professional installation of your new hardscape project, most high quality paver manufactures have a guarantee that their product will not crack during freeze and thaw periods. Most damage caused to concrete is during this period and results in numerous cracks and improper settling. If a paver does crack for any reason it is a simple fix by picking up the cracked paver and replacing it. With this guarantee your project will look like it’s brand new for years to come!'
    },
    {
      imgUrl: 'assets/images/landing-page/services/pavers-vs-concret/icon-designs.svg',
      title: 'Unlimited Design Options',
      description: 'With pavers the possibilities are endless. Pavers will allow you to integrate different colors mixed within the project as well as different textures and designs. The same types of options in concrete do not exist. Even in the “Stamped Concrete Form” concrete has its limits with colors and designs. With Pavers you can custom create your project to fit the style of your choice; with concrete you are limited with your options.'
    },
    {
      imgUrl: 'assets/images/landing-page/services/pavers-vs-concret/icon-maintenance.svg',
      title: 'Maintenance',
      description: 'The common misconception about pavers is that weeds will grow up through the cracks. This is simply wrong, with proper installation of the pavers and by installing a high quality Polymeric Sand between the cracks this potential problem is solved. With proper simple polymeric sand maintenance once every 1 to 2 years your project will remain weed free. Stamped concrete requires a new sealer every 1 to 3 years. This alone is a costly process that if not done correctly can damage the entire surface and be a large cost to repair.'
    },
    {
      imgUrl: 'assets/images/landing-page/services/pavers-vs-concret/icon-warranty.svg',
      title: 'Lifetime Warranty',
      description: 'All quality paver manufactures will have a lifetime warranty on their products. These warranties typically include a guarantee regarding the fact that they will not crack, but more importantly one of their guarantees protects you from damage caused by ice melt. Living in New England we all use some sort of ice melt on our steps and sidewalks. It’s reassuring to know that with pavers, no matter what is used on the surface to melt the snow it has a guarantee to withstand it. Stamped concrete and traditional concrete fail horribly in this category and ice melt is a leading cause of concrete eteriorating.'
    },
  ];

  examples = [
    {url: 'assets/images/landing-page/services/pavers-vs-concret/1.png', label: 'Concrete shift due to frost'},
    {url: 'assets/images/landing-page/services/pavers-vs-concret/2.png', label: 'Concrete cracked'},
    {url: 'assets/images/landing-page/services/pavers-vs-concret/3.png', label: 'Stamped concrete sealer failing'},
    {url: 'assets/images/landing-page/services/pavers-vs-concret/4.png', label: 'Stamped concrete faded'},
    {url: 'assets/images/landing-page/services/pavers-vs-concret/5.png', label: 'Salt damage to stamped concrete'},
    {url: 'assets/images/landing-page/services/pavers-vs-concret/6.png', label: 'Salt damage to concrete'},
  ];

  private sessionId: string;

  constructor(
    private marketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.marketingService.pageVisit(PageName.ServicesPage, null, PageSubName).then(id => this.sessionId = id);
  }

  ngOnDestroy(): void {
    this.marketingService.pageVisit(PageName.ServicesPage, this.sessionId, PageSubName);
  }

}
