import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestoEscalaForm } from './manifesto-escala-form';

describe('ManifestoEscalaForm', () => {
  let component: ManifestoEscalaForm;
  let fixture: ComponentFixture<ManifestoEscalaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManifestoEscalaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManifestoEscalaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
