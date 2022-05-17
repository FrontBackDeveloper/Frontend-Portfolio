import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFormacionComponent } from './editar-formacion.component';

describe('EditarFormacionComponent', () => {
  let component: EditarFormacionComponent;
  let fixture: ComponentFixture<EditarFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFormacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
