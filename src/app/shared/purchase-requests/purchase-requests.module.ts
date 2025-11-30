
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { purchaseRequestsReducer } from 'src/app/core/state/purchase-requests.reducer';
import { PURCHASE_REQUESTS_FEATURE_KEY } from 'src/app/core/state/purchase-requests.selectors';
import { PurchaseRequestsEffects } from 'src/app/core/state/purchase-requests.effects';
import { PurchaseRequestContainerComponent } from '../components/purchase-request-container/purchase-request-container.component';
import { PurchaseRequestListComponent } from '../components/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestFilterComponent } from '../components/purchase-request-filter/purchase-request-filter.component';

@NgModule({
  declarations: [
    PurchaseRequestContainerComponent,
    PurchaseRequestListComponent,
    PurchaseRequestFilterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      PURCHASE_REQUESTS_FEATURE_KEY,
      purchaseRequestsReducer
    ),
    EffectsModule.forFeature([PurchaseRequestsEffects]),
  ],
  exports: [PurchaseRequestContainerComponent],
})

export class PurchaseRequestsModule { }
