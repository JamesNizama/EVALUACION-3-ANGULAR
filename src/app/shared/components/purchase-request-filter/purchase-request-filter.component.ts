import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-purchase-request-filter',
  templateUrl: './purchase-request-filter.component.html',
  styleUrls: ['./purchase-request-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseRequestFilterComponent implements OnInit {
  @Output() searchChange = new EventEmitter<string>();

  searchControl = new FormControl('');

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => this.searchChange.emit(String(value ?? '')));
  }
}