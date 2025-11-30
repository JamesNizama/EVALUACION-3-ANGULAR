import { createAction, props } from '@ngrx/store';
import {
  PurchaseRequest,
  PurchaseRequestStatus,
} from '../models/purchase-request.model';

export const loadRequests = createAction(
  '[PurchaseRequests] Load Requests'
);

export const loadRequestsSuccess = createAction(
  '[PurchaseRequests] Load Requests Success',
  props<{ requests: PurchaseRequest[] }>()
);

export const loadRequestsFailure = createAction(
  '[PurchaseRequests] Load Requests Failure',
  props<{ error: string }>()
);

export const updateStatus = createAction(
  '[PurchaseRequests] Update Status',
  props<{ id: string; newStatus: PurchaseRequestStatus }>()
);

export const updateStatusSuccess = createAction(
  '[PurchaseRequests] Update Status Success',
  props<{ updated: PurchaseRequest }>()
);

export const updateStatusFailure = createAction(
  '[PurchaseRequests] Update Status Failure',
  props<{ id: string; previousStatus: PurchaseRequestStatus; error: string }>()
);