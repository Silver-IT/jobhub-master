import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'job-hub-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {

  user$ = this.authService.user$;

  adminJoe = 'joe@jdlandscaping.net';
  adminNick = 'nick@jdlandscaping.net';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
