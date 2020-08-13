import { Pipe, PipeTransform } from '@angular/core';

import { EmailEvent, EmailEventType } from '../../../../core/models/email';

@Pipe({
  name: 'emailEventTitle'
})
export class EmailEventTitlePipe implements PipeTransform {

  transform(event: EmailEvent): string {
    switch (event.type) {
      case EmailEventType.Processed: {
        return 'Received by SendGrid';
      }
      case EmailEventType.Drop: {
        return 'Dropped by SendGrid';
      }
      case EmailEventType.Deferred: {
        return 'Send Delayed';
      }
      case EmailEventType.Delivered: {
        return `Received by ${event.mailServer}`;
      }
      case EmailEventType.Bounce: {
        return `Bounced by ${event.mailServer}`;
      }
      case EmailEventType.Click: {
        return 'Clicked';
      }
      case EmailEventType.Open: {
        return 'Opened';
      }
    }
  }

}
