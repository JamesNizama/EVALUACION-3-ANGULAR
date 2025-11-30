import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseRequest, PurchaseRequestStatus } from '../../core/models/purchase-request.model';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class PurchaseRequestsService {
  private readonly URL = `${enviroment.api}/purchase-requests`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<PurchaseRequest[]> {
    return this.http.get<PurchaseRequest[]>(this.URL);
  }

  updateStatus(id: string, newStatus: PurchaseRequestStatus): Observable<PurchaseRequest> {
    return this.http.patch<PurchaseRequest>(`${this.URL}/${id}`, { status: newStatus });
  }
}