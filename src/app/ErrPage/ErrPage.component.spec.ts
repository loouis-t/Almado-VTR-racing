import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrPage } from './ErrPage.component';

describe('ErrPage', () => {
  let component: ErrPage;
  let fixture: ComponentFixture<ErrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
