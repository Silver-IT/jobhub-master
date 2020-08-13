import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { patioPackages } from '../../../core/data/patio-packages';
import { PackageImageViewerComponent } from '../package-image-viewer/package-image-viewer.component';
import { PatioPackageRegisterDialogComponent } from '../patio-package-register-dialog/patio-package-register-dialog.component';
import { ScrollPosition } from '../../../core/data/scroll-pos';
import { MarketingService } from '../../../core/services/marketing.service';
import { PageName } from '../../../core/models/page-name';

@Component({
  selector: 'job-hub-package-content',
  templateUrl: './package-content.component.html',
  styleUrls: ['./package-content.component.scss']
})
export class PackageContentComponent implements OnInit, OnDestroy {

  @ViewChild(PackageImageViewerComponent) packageImageViewer: PackageImageViewerComponent;

  data: any = {};
  private sessionId: string;
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private scrollToService: ScrollToService,
    private marketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.marketingService.pageVisit(PageName.PatioPackagesPage, null, this.route.snapshot.params.id).then(id => this.sessionId = id);
    this.route.params.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe((value: any) => {
      this.data = patioPackages[value.id];
      if (this.packageImageViewer) {
        this.packageImageViewer.reset();
      }
      // save original routed component and reset session id
      this.marketingService.pageVisit(PageName.PatioPackagesPage, this.sessionId, value.id);
      this.sessionId = null;
      // save new sessionId
      this.marketingService.pageVisit(PageName.PatioPackagesPage, null, value.id).then(id => this.sessionId = id);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
    this.marketingService.pageVisit(PageName.PatioPackagesPage, this.sessionId, this.route.snapshot.params.id);
  }

  schedule() {
    this.scrollToService.scrollTo({ target: ScrollPosition.Root, duration: 300 });
    setTimeout(() => {
      this.dialog.open(PatioPackageRegisterDialogComponent, {
        width: '765px',
        data: this.route.snapshot.params.id
      });
    }, 300);
  }

}
