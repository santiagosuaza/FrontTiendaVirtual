import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanastaUsuarioComponent } from './canasta-usuario.component';

describe('CanastaUsuarioComponent', () => {
  let component: CanastaUsuarioComponent;
  let fixture: ComponentFixture<CanastaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanastaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanastaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
