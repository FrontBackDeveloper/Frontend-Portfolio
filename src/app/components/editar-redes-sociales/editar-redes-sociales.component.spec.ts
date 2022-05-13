import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRedesSocialesComponent } from './editar-redes-sociales.component';

describe('EditarRedesSocialesComponent', () => {
  let component: EditarRedesSocialesComponent;
  let fixture: ComponentFixture<EditarRedesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRedesSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRedesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
