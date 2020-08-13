import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Idea } from '../../../core/models/idea-board';
import { ROUTES } from '../../../core/data/routes';
import { IdeaBoardService } from '../../../core/services/idea-board.service';
import { ToastrService } from '../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-idea-board-card',
  templateUrl: './idea-board-card.component.html',
  styleUrls: ['./idea-board-card.component.scss']
})
export class IdeaBoardCardComponent implements OnInit {

  @Input() editable: boolean;
  @Input() clickable: boolean;
  @Input() selectable: boolean;
  @Input() idea: Idea;
  @Input() isCustomer: boolean;

  @Output() view: EventEmitter<Idea> = new EventEmitter<Idea>();
  @Output() delete: EventEmitter<Idea> = new EventEmitter<Idea>();
  @Output() edit: EventEmitter<Idea> = new EventEmitter<Idea>();

  ROUTES = ROUTES;

  constructor(
    private ideaBoardService: IdeaBoardService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  async toggleSelected() {
    this.idea.selected = !this.idea.selected;
    if (this.isCustomer) {
      try {
        if (this.idea.selected) {
          await this.ideaBoardService.likeIdea(this.idea.id).toPromise();
        } else {
          await this.ideaBoardService.dislikeIdea(this.idea.id).toPromise();
        }
      } catch (e) {
        this.toastr.error(e, 'Sorry, failed to submit your actions.');
      }
    }
  }

  select() {
    if (this.clickable) {
      this.view.emit(this.idea);
    }
  }
}
