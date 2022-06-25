import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubePieceComponent } from './cube-piece.component';

describe('CubePieceComponent', () => {
  let component: CubePieceComponent;
  let fixture: ComponentFixture<CubePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubePieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
