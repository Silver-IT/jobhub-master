import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { IdeaBoardService } from '../../../core/services/idea-board.service';
import { Idea } from '../../../core/models/idea-board';
import { IdeaBoardComponent } from '../idea-board/idea-board.component';
import { IdeaService } from '../idea.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'job-hub-scrollable-idea-board',
  templateUrl: './scrollable-idea-board.component.html',
  styleUrls: ['./scrollable-idea-board.component.scss']
})
export class ScrollableIdeaBoardComponent implements OnInit, OnDestroy {

  @Input() editable: boolean;
  @Input() clickable: boolean;
  @Input() userId: string;
  @Input() hasContainer = false;
  @Input() viewAll$: Observable<boolean>;
  @Input() filter$: Observable<any>;
  @ViewChild(IdeaBoardComponent) ideaBoard: IdeaBoardComponent;

  filter = {projectType: null, materialType: null};
  viewAll = false;
  isLoading = false;
  ideas: Idea[] = [];
  loadImage$: Subject<any> = new Subject<any>();

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private ideaBoardService: IdeaBoardService,
    private ideaService: IdeaService,
    private toastr: ToastrService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    if (this.filter$) {
      this.filter$.pipe(
        takeUntil(this.unsubscribeAll)
      ).subscribe(value => {
        this.filter = value;
        this.ideas = [];
        this.ideaBoard.reset();
        this.loadImage$.next();
      });
    }

    if (this.viewAll$) {
      this.viewAll$.pipe(
        takeUntil(this.unsubscribeAll)
      ).subscribe(value => {
        this.viewAll = value;
        this.ideas = [];
        this.ideaBoard.reset();
        this.loadImage$.next();
      });
    }

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
      let res;
      if (this.userId) {
        // when idea board is rendered on customer page
        if (this.viewAll) {
          res = await this.ideaBoardService.getIdeas(this.ideas.length, 20, this.filter.projectType, this.filter.materialType).toPromise();
        } else {
          res = await this.ideaBoardService.getCustomerBoard(this.ideas.length, 20, this.filter.projectType, this.filter.materialType).toPromise();
          res.forEach(x => x.selected =  true);
        }
      } else {
        // load all ideas
        res = await this.ideaBoardService.getIdeas(this.ideas.length, 20, this.filter.projectType, this.filter.materialType).toPromise();
      }
      this.ideas = [...this.ideas, ...res];
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  onScroll(event) {
    const pos = event.target.scrollTop;
    const max = event.target.scrollHeight - event.target.offsetHeight;
    if (pos === max && !this.isLoading && this.ideaBoard && !this.ideaBoard.hasPending) {
      this.loadImage$.next();
    }
  }

  edit(idea: Idea) {
    this.ideaService.openAssignDialog(null, idea).afterClosed().pipe(
      filter(value => value)
    ).subscribe((value: Idea) => {
      this.toastr.success('Successfully updated information.');
      const found = this.ideas.find(x => x.id === value.id);
      if (found) {
        found.projectType = value.projectType;
        found.materialTypes = value.materialTypes;
      }
    });
  }

  delete(idea: Idea) {
    this.alert.confirmDelete().pipe(
      filter(value => value)
    ).subscribe(async () => {
      try {
        await this.ideaBoardService.deleteIdea(idea.id).toPromise();
        const index = this.ideas.findIndex(x => x.id === idea.id);
        if (index >= 0) {
          this.ideas.splice(index, 1);
        }
      } catch (e) {
        this.toastr.error(e, 'Sorry, failed to delete item. Please try again.');
      }
    });
  }

}
