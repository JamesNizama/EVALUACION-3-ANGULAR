import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PurchaseRequestsState } from './purchase-requests.reducer';
import { PurchaseRequestStatus } from '../models/purchase-request.model';

export const PURCHASE_REQUESTS_FEATURE_KEY = 'purchaseRequests';

export const selectPurchaseRequestsState =
  createFeatureSelector<PurchaseRequestsState>(PURCHASE_REQUESTS_FEATURE_KEY);

export const selectAllRequests = createSelector(
  selectPurchaseRequestsState,
  (state) => state.requests
);

export const selectLoading = createSelector(
  selectPurchaseRequestsState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectPurchaseRequestsState,
  (state) => state.error
);

export const selectRequestsByStatus = (status: PurchaseRequestStatus) =>
  createSelector(selectAllRequests, (requests) =>
    requests.filter((r) => r.status === status)
  );

export const selectTotalAmountByStatus = (status: PurchaseRequestStatus) =>
  createSelector(selectRequestsByStatus(status), (requests) =>
    requests.reduce((acc, r) => acc + r.amount, 0)
  );
