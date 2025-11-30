import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PurchaseRequestContainerComponent } from './components/purchase-request-container/purchase-request-container.component';
import { PurchaseRequestListComponent } from './components/purchase-request-list/purchase-request-list.component';
import { purchaseRequestsReducer } from '../core/state/purchase-requests.reducer';
import { PurchaseRequestFilterComponent } from './components/purchase-request-filter/purchase-request-filter.component';



@NgModule({
  declarations: [
    PurchaseRequestContainerComponent,
    PurchaseRequestListComponent,
    PurchaseRequestContainerComponent,
    PurchaseRequestListComponent,
    PurchaseRequestFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
