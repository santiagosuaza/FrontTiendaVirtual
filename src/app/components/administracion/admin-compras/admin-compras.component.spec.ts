import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComprasComponent } from './admin-compras.component';

describe('AdminComprasComponent', () => {
  let component: AdminComprasComponent;
  let fixture: ComponentFixture<AdminComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
