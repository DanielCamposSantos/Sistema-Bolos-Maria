import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBackgroundLayout } from './main-background-layout';

describe('MainBackgroundLayout', () => {
  let component: MainBackgroundLayout;
  let fixture: ComponentFixture<MainBackgroundLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBackgroundLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(MainBackgroundLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
