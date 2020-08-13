import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { TagCategory } from '../../../core/models/tag';
import { TagService } from '../../../core/services/tag.service';

@Component({
  selector: 'job-hub-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoCompleteComponent),
      multi: true,
    }
  ]
})
export class AutoCompleteComponent implements ControlValueAccessor {

  @Input() value;
  @Input() label: string;
  @Input() placeholder;
  @Input() readonly;
  @Input() category: TagCategory;

  searching = false;
  searchFailed = false;

  constructor(
    private tagService: TagService
  ) { }

  onChange;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.tagService.searchByKeyword(this.category, term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  change(value) {
    // only when change method registered
    if (this.onChange) {
      this.onChange(value);
    }
  }
}
