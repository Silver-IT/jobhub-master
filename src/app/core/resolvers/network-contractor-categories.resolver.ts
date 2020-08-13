import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NetworkContractorCategory } from '../models/network-contractor';
import { NetworkContractorService } from '../services/network-contractor.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkContractorCategoriesResolver implements Resolve<NetworkContractorCategory[]> {

  constructor(
    private networkContractorService: NetworkContractorService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NetworkContractorCategory[]> | Promise<NetworkContractorCategory[]> | NetworkContractorCategory[] {
    return this.networkContractorService.getCategories(0, 100).pipe(
      map(res => res.data)
    );
  }
}
