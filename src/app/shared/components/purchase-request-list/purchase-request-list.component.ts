import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PurchaseRequest } from '../../../core/models/purchase-request.model';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseRequestListComponent {
  @Input() requests: PurchaseRequest[] | null = [];

  trackById(index: number, item: PurchaseRequest): string {
    return item.id;
  }
}