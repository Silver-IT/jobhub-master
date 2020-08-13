import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IdeaBoardService } from '../../core/services/idea-board.service';
import { Idea } from '../../core/models/idea-board';
import { CustomerSignupWizardService } from '../../core/services/customer-signup-wizard.service';
import { enumToOptions } from '../../core/utils/enum.util';
import { AvailableProjectAccessoryType, ProjectAccessoryType } from '../../core/models/project';
import { ScrollPosition } from '../../core/data/scroll-pos';
import { ROUTES } from '../../core/data/routes';
import { MarketingService } from '../../core/services/marketing.service';
import { PageName } from '../../core/models/page-name';

@Component({
  selector: 'job-hub-idea-board-page',
  templateUrl: './idea-board-page.component.html',
  styleUrls: ['./idea-board-page.component.scss']
})
export class IdeaBoardPageComponent implements OnInit, OnDestroy {

  blockCount = 1;
  blocks: Idea[][] = [];
  isLoading = false;
  availableProjectAccessoryTypes = [{label: 'All', value: null}, ...enumToOptions<ProjectAccessoryType>(AvailableProjectAccessoryType)];
  ScrollPosition = ScrollPosition;
  form: FormGroup = this.fb.group({
    projectType: null
  });
  ROUTES = ROUTES;

  private sessionId: string;
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private ideaBoardService: IdeaBoardService,
    private customerSignupWizardService: CustomerSignupWizardService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private marketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.form.get('projectType').valueChanges.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(value => {
      this.blocks = [];
      this.blockCount = 1;
      setTimeout(() => {
        this.loadIdeas();
      }, 100);
    });
    const queryParams = this.route.snapshot.queryParams;
    if (queryParams && queryParams.projectType) {
      this.form.get('projectType').setValue(queryParams.projectType);
    }
    this.loadIdeas();
    this.marketingService.pageVisit(PageName.IdeaBoardPage).then(id => this.sessionId = id);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
    this.marketingService.pageVisit(PageName.IdeaBoardPage, this.sessionId);
  }

  loadMore() {
    this.blockCount += 1;
    this.loadIdeas();
  }

  cardLiked(e) {
    let ideas = [];
    this.blocks.forEach(block => {
      const ids = block.filter(x => x.selected).map(x => x.id);
      ideas = [...ideas, ...ids];
    });
    this.customerSignupWizardService.saveToStorage({ ideas });
  }

  private async loadIdeas() {
    try {
      this.isLoading = true;
      const ideas = await this.ideaBoardService.getIdeasByBlock(this.blockCount, this.form.value.projectType).toPromise();
      const newItems = ideas.slice((this.blockCount - 1) * 6, this.blockCount * 6);
      this.blocks.push(newItems);
      const ids = this.customerSignupWizardService.getFromStorage('ideas') || [];
      this.blocks.forEach(block => {
        block.forEach(item => {
          item.selected = Boolean(ids.find(id => id === item.id));
        });
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
