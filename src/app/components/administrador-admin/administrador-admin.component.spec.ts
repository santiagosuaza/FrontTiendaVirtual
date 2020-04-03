import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorAdminComponent } from './administrador-admin.component';

describe('AdministradorAdminComponent', () => {
  let component: AdministradorAdminComponent;
  let fixture: ComponentFixture<AdministradorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
