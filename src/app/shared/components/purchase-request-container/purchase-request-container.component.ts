import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  selectAllRequests,  selectLoading} from 'src/app/core/state/purchase-requests.selectors';
import { loadRequests } from 'src/app/core/state/purchase-requests.actions';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { PurchaseRequest } from 'src/app/core/models/purchase-request.model';

@Component({
  selector: 'app-purchase-request-container',
  templateUrl: './purchase-request-container.component.html',
  styleUrls: ['./purchase-request-container.component.css']
})


export class PurchaseRequestContainerComponent implements OnInit {
  allRequests$: Observable<PurchaseRequest[]> =
    this.store.select(selectAllRequests);
  loading$: Observable<boolean> = this.store.select(selectLoading);

  private filterTermSubject = new BehaviorSubject<string>('');
  filterTerm$ = this.filterTermSubject.asObservable();

  filteredRequests$: Observable<PurchaseRequest[]> = combineLatest([
    this.allRequests$,
    this.filterTerm$,
  ]).pipe(
    map(([requests, term]) =>
      requests.filter((r) =>
        r.requester.toLowerCase().includes(term.toLowerCase())
      )
    )
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadRequests());
  }

  onSearchChange(term: string): void {
    this.filterTermSubject.next(term);
  }
}
