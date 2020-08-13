import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GeneralService } from '../../core/services/general.service';
import { MarketingService } from '../../core/services/marketing.service';
import { PageName } from '../../core/models/page-name';
import { enumToOptions } from '../../core/utils/enum.util';
import { Location, SourceFoundUs } from '../../core/models/base';
import { AlertService } from '../../ui-kit/alert/alert.service';
import { MapService } from '../../ui-kit/map/map.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'job-hub-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  isSaving = false;
  isSaved = false;
  recaptchaKey = environment.googleInvisibleRecaptchaKey;
  sourceFoundUsOptions = enumToOptions<SourceFoundUs>(SourceFoundUs);

  contactForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    fullName: ['', Validators.required],
    phone: ['', Validators.required],
    sourceFoundUs: ['', Validators.required],
    address: ['', Validators.required],
    latitude: null,
    longitude: null,
    message: ['', Validators.required],
  });

  private sessionId: string;

  constructor(
    private fb: FormBuilder,
    private generalService: GeneralService,
    private alertService: AlertService,
    private marketingService: MarketingService,
    private mapService: MapService
  ) {
  }

  ngOnInit(): void {
    this.mapService.getCurrentLocation().then(res => {
      this.contactForm.get('address').setValue(res.address);
      this.contactForm.get('latitude').setValue(res.latitude);
      this.contactForm.get('longitude').setValue(res.longitude);
    });
    this.marketingService.pageVisit(PageName.ContactUsPage).then(id => this.sessionId = id);
  }

  ngOnDestroy(): void {
    this.marketingService.pageVisit(PageName.ContactUsPage, this.sessionId);
  }

  addressChanged(location: Location) {
    this.contactForm.get('latitude').setValue(location.latitude);
    this.contactForm.get('longitude').setValue(location.longitude);
  }

  async sendContactUs() {
    if (this.isSaved) {
      return;
    }
    try {
      this.isSaving = true;
      await this.generalService.sendContactUsMessage(this.contactForm.value).toPromise();
      this.isSaved = true;
      this.alertService.alert('Message sent!', 'Thank you for contacting J & D Landscaping, we will respond to your inquiry in less than 24 hours. Thank you for your patience.');
    } catch (e) {
      this.isSaved = false;
      this.alertService.alert('Message not sent!', `We are unable to connect to customer service at this moment. Please try again later.`);
    } finally {
      this.isSaving = false;
    }
  }
}
