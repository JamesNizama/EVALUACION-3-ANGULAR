export type PurchaseRequestStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface PurchaseRequest {
  id: string;
  requester: string;
  amount: number;
  status: PurchaseRequestStatus;
  createdAt: string;
}
