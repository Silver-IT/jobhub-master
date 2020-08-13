import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'job-hub-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  @Input() debounceTime = 700;
  @Input() placeholder = 'Enter search keyword...';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup = this.fb.group({
    search: ''
  });

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form.get('search').valueChanges.pipe(
      takeUntil(this.unsubscribeAll),
      debounceTime(this.debounceTime)
    ).subscribe(value => {
      this.search.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
