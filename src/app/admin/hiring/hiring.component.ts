import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../core/data/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'job-hub-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.scss']
})
export class HiringComponent implements OnInit {

  ROUTES = ROUTES;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  editJob(id: string) {
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.hiring, id]);
  }

}
