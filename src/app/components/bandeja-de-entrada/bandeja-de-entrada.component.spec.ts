import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaDeEntradaComponent } from './bandeja-de-entrada.component';

describe('BandejaDeEntradaComponent', () => {
  let component: BandejaDeEntradaComponent;
  let fixture: ComponentFixture<BandejaDeEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejaDeEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaDeEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
