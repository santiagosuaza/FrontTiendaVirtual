import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompraComponent } from './admin-compra.component';

describe('AdminCompraComponent', () => {
  let component: AdminCompraComponent;
  let fixture: ComponentFixture<AdminCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
