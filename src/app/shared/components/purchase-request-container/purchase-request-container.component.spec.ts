import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestContainerComponent } from './purchase-request-container.component';

describe('PurchaseRequestContainerComponent', () => {
  let component: PurchaseRequestContainerComponent;
  let fixture: ComponentFixture<PurchaseRequestContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseRequestContainerComponent]
    });
    fixture = TestBed.createComponent(PurchaseRequestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
