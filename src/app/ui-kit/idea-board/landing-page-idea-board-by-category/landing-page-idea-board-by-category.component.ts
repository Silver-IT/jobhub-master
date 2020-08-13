import { Component, OnInit, ViewChild } from '@angular/core';

import { IdeaBoardComponent } from '../idea-board/idea-board.component';
import { Idea } from '../../../core/models/idea-board';
import { IdeaBoardService } from '../../../core/services/idea-board.service';
import { ProjectAccessoryType } from '../../../core/models/project';
import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { Option } from '../../../core/models/option';

@Component({
  selector: 'job-hub-landing-page-idea-board-by-category',
  templateUrl: './landing-page-idea-board-by-category.component.html',
  styleUrls: ['./landing-page-idea-board-by-category.component.scss']
})
export class LandingPageIdeaBoardByCategoryComponent implements OnInit {

  @ViewChild(IdeaBoardComponent) ideaBoard: IdeaBoardComponent;

  ideas: Idea[] = [];
  isLoading = false;
  categories = [
    {value: ProjectAccessoryType.Patio, label: 'Patios'},
    {value: ProjectAccessoryType.Walkway, label: 'Walkways'},
    {value: ProjectAccessoryType.RetainingWall, label: 'Retaining Walls'},
    {value: ProjectAccessoryType.DrivewayParking, label: 'Driveways'},
    {value: ProjectAccessoryType.PoolPatio, label: 'Pool Patios'},
    {value: ProjectAccessoryType.Steps, label: 'Steps & Staircases'},
  ];

  constructor(
    private ideaBoardService: IdeaBoardService,
    private customerSignupWizardService: CustomerSignupWizardService
  ) { }

  ngOnInit(): void {
    this.categoryChanged(this.categories[0]);
  }

  async categoryChanged(category: Option<any>) {
    try {
      this.isLoading = true;
      if (this.ideaBoard) {
        this.ideaBoard.loaded = 0;
      }
      this.ideas = await this.ideaBoardService.getIdeasByBlock(1, category.value).toPromise();
      this.customerSignupWizardService.markSelectedIdeas(this.ideas);
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  cardLiked() {
    const ideas = this.ideas.filter(x => x.selected).map(x => x.id);
    this.customerSignupWizardService.saveToStorage({ ideas });
  }

}
