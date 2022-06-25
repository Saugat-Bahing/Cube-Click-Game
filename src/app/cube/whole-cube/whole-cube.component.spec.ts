import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeCubeComponent } from './whole-cube.component';

describe('WholeCubeComponent', () => {
  let component: WholeCubeComponent;
  let fixture: ComponentFixture<WholeCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholeCubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
