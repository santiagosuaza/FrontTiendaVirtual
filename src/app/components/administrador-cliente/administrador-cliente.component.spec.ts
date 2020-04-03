import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorClienteComponent } from './administrador-cliente.component';

describe('AdministradorClienteComponent', () => {
  let component: AdministradorClienteComponent;
  let fixture: ComponentFixture<AdministradorClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
