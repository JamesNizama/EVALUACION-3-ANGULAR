import { createReducer, on } from '@ngrx/store';
import { PurchaseRequest } from '../models/purchase-request.model';
import * as PurchaseRequestsActions from './purchase-requests.actions';

export interface PurchaseRequestsState {
  requests: PurchaseRequest[];
  loading: boolean;
  error: string | null;
}

export const initialState: PurchaseRequestsState = {
  requests: [],
  loading: false,
  error: null,
};

export const purchaseRequestsReducer = createReducer(
  initialState,
  on(PurchaseRequestsActions.loadRequests, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PurchaseRequestsActions.loadRequestsSuccess, (state, { requests }) => ({
    ...state,
    loading: false,
    requests,
  })),
  on(PurchaseRequestsActions.loadRequestsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(PurchaseRequestsActions.updateStatus, (state, { id, newStatus }) => ({
    ...state,
    requests: state.requests.map((r) =>
      r.id === id ? { ...r, status: newStatus } : r
    ),
  })),
  on(PurchaseRequestsActions.updateStatusSuccess, (state, { updated }) => ({
    ...state,
    requests: state.requests.map((r) =>
      r.id === updated.id ? updated : r
    ),
  })),
  on(
    PurchaseRequestsActions.updateStatusFailure,
    (state, { id, previousStatus, error }) => ({
      ...state,
      error,
      requests: state.requests.map((r) =>
        r.id === id ? { ...r, status: previousStatus } : r
      ),
    })
  )
);