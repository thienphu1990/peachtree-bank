import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferManageComponent } from './transfer-manage.component';

describe('TransferManageComponent', () => {
  let component: TransferManageComponent;
  let fixture: ComponentFixture<TransferManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
