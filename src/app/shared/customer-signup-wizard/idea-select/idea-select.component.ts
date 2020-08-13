import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { IdeaBoardService } from '../../../core/services/idea-board.service';
import { Idea, MaterialType } from '../../../core/models/idea-board';
import { IdeaBoardComponent } from '../../../ui-kit/idea-board/idea-board/idea-board.component';
import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { Option } from '../../../core/models/option';
import { AvailableProjectAccessoryType, ProjectAccessoryType } from '../../../core/models/project';
import { enumToOptions } from '../../../core/utils/enum.util';

@Component({
  selector: 'job-hub-idea-select',
  templateUrl: './idea-select.component.html',
  styleUrls: ['./idea-select.component.scss']
})
export class IdeaSelectComponent implements OnInit, OnDestroy {

  @Input() footerHeight = 700;
  @Input() hasSkip = true;
  @Output() skip: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(IdeaBoardComponent) ideaBoard: IdeaBoardComponent;

  isLoading = false;
  ideas: Idea[] = [];
  selectedIdeas: string[] = [];
  loadImage$: Subject<any> = new Subject<any>();

  availableProjectAccessoryTypes = [{label: 'All', value: null}, ...enumToOptions<ProjectAccessoryType>(AvailableProjectAccessoryType)];
  materials: Option<MaterialType>[] = enumToOptions(MaterialType);
  filterForm: FormGroup = this.fb.group({
    projectType: null,
    materialType: ''
  });

  private unsubscribeAll: Subject<any> = new Subject<any>();

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
    const max = document.documentElement.scrollHeight - this.footerHeight;
    if (pos >= max && !this.isLoading && this.ideaBoard && !this.ideaBoard.hasPending) {
      this.loadImage$.next();
    }
  }

  constructor(
    private ideaBoardService: IdeaBoardService,
    private customerSignupWizardService: CustomerSignupWizardService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.selectedIdeas = this.customerSignupWizardService.getFromStorage('ideas') || [];

    this.filterForm.valueChanges.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(() => {
      this.ideas = [];
      this.ideaBoard.loaded = 0;
      this.loadImage$.next();
    });

    this.loadImage$.asObservable().pipe(
      takeUntil(this.unsubscribeAll),
      debounceTime(500)
    ).subscribe(() => this.loadImages());
    this.loadImage$.next();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  private async loadImages() {
    try {
      this.isLoading = true;
      const filter = this.filterForm.value;
      const res = await this.ideaBoardService.getIdeas(this.ideas.length, 20, filter.projectType, filter.materialType).toPromise();
      res.forEach(x => {
        const index = this.selectedIdeas.findIndex(id => id === x.id);
        if (index >= 0) {
          x.selected = true;
        }
      });
      this.ideas = [...this.ideas, ...res];
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
