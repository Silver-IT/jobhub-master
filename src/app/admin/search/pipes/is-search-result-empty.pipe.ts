import { Pipe, PipeTransform } from '@angular/core';
import { SearchResult } from '../../../core/models/search';

@Pipe({
  name: 'isSearchResultEmpty'
})
export class IsSearchResultEmptyPipe implements PipeTransform {

  transform(result: SearchResult): boolean {
    return !result.projects.length && !result.customers.length && !result.contractors.length && !result.networkContractors.length;
  }

}
