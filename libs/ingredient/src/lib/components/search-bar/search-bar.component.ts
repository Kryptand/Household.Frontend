import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'kryptand-searchbar',
  templateUrl: './search-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchbarComponent implements OnInit {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  searchForm = this.fb.group({
    searchValue: ['']
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  search(): void {
    this.searchEvent.emit(this.searchForm.get('searchValue').value);
  }
}
