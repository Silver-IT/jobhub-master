import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SocketService } from '../../core/services/socket.service';
import { ChatService } from '../../core/services/chat.service';
import { AuthService } from '../../core/services/auth.service';
import { ProjectService } from '../../core/services/project.service';
import { ToastrService } from '../../core/services/toastr.service';
import { IsMinePipe } from '../../ui-kit/pipes/is-mine.pipe';
import { ROUTES } from '../../core/data/routes';
import { Message } from '../../core/models/chat';
import { UserRole } from '../../core/models/auth';
import { FinalProposalStatus } from '../../core/models/final-proposal';

@Component({
  selector: 'job-hub-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.scss']
})
export class InboxPageComponent implements OnInit, OnDestroy {

  chats$ = this.chatService.chats$.asObservable();
  keyword = '';

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socketService: SocketService,
    private chatService: ChatService,
    private authService: AuthService,
    private projectService: ProjectService,
    private toastrService: ToastrService,
    private isMinePipe: IsMinePipe,
  ) {
    this.chatService.setChats(this.route.snapshot.data.chats);
  }

  ngOnInit(): void {
    this.socketService.subscribeMessages().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe((message: Message) => {
      if (!this.isMinePipe.transform(message)) {
        if (message.chatId !== this.chatService.currentChatId) {
          const chats = this.chatService.chats;
          const found = chats.find(x => x.id === message.chatId);
          found.unread = found.unread || 0;
          found.unread += 1;
          this.chatService.setChats(chats);
        }
      }
    });
  }

  async navigateToProject(projectId: string) {
    try {
      const user = this.authService.user;
      const project = await this.projectService.getProjectById(projectId).toPromise();
      let projectLastStep = '';
      if (project.finalProposal) {
        if (project.finalProposal.status === FinalProposalStatus.Accepted) {
          projectLastStep = ROUTES.app.payment;
        } else {
          projectLastStep = ROUTES.app.proposal;
        }
      } else if (project.estimate) {
        projectLastStep = ROUTES.app.estimate;
      }
      if (user.role === UserRole.Customer) {
        this.router.navigate([ROUTES.app.root, ROUTES.app.project, projectId, projectLastStep]);
      } else {
        this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, projectId, projectLastStep]);
      }
    } catch (e) {
      this.toastrService.error(e, 'Unable to navigate to project page.');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
