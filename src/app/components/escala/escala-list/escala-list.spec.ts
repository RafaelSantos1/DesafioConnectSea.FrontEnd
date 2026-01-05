import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaList } from './escala-list';

describe('EscalaList', () => {
  let component: EscalaList;
  let fixture: ComponentFixture<EscalaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscalaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
