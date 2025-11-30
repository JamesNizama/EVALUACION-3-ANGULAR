import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as PurchaseRequestsActions from './purchase-requests.actions';
import { PurchaseRequestsService } from 'src/app/shared/services/purchase-requests.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Injectable()
export class PurchaseRequestsEffects {
  constructor(
    private actions$: Actions,
    private service: PurchaseRequestsService,
    private notification: NotificationService
  ) {}

  loadRequests$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PurchaseRequestsActions.loadRequests),
      switchMap(() =>
        this.service.getAll().pipe(
          map(requests => PurchaseRequestsActions.loadRequestsSuccess({ requests })),
          catchError(error => of(PurchaseRequestsActions.loadRequestsFailure({ error })))
        )
      )
    )
  );

  updateStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PurchaseRequestsActions.updateStatus),
      mergeMap(action =>
        this.service.updateStatus(action.id, action.newStatus).pipe(
          catchError(error => {
            // Mostramos notificación simple
            this.notification.show('Error actualizando estado');
            return of(
              PurchaseRequestsActions.updateStatusFailure({
                id: action.id,
                prevStatus: 'PENDING', // o puedes obtener el estado previo desde el store
                error,
              })
            );
          })
        )
      )
    )
  );
}
