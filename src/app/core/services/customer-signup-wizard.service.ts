import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LoginResponse } from '../models/auth';
import { Idea } from '../models/idea-board';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerSignupWizardService {

  constructor(
    private storage: LocalStorageService,
    private http: HttpClient,
    private customerService: CustomerService
  ) { }

  saveToStorage(value: any) {
    let data = this.storage.get(environment.localStorage.customerSignupWizard) as any;
    data = {...data, ...value};
    this.storage.set(environment.localStorage.customerSignupWizard, data);
  }

  getFromStorage(property: string): any {
    const data = this.storage.get(environment.localStorage.customerSignupWizard) as any;
    if (data) {
      return data[property];
    } else {
      return undefined;
    }
  }

  clearStorage() {
    this.storage.remove(environment.localStorage.customerSignupWizard);
  }

  register(): Observable<LoginResponse> {
    const body: any = this.storage.get(environment.localStorage.customerSignupWizard);
    if (body && body.projects) {
      body.projects.forEach(project => {
        project.budget = Number(project.budget);
      });
    }
    if (body && body.user) {
      body.user.ideas = this.getFromStorage('ideas') || [];
    }
    return this.customerService.register(body);
  }

  markSelectedIdeas(ideas: Idea[]) {
    const ids = this.getFromStorage('ideas') || [];
    ideas.forEach(x => {
      x.selected = Boolean(ids.find(id => id === x.id));
    });
  }

}
