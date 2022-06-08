import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssScrollAnimationComponent } from './css-scroll-animation.component';

describe('CssScrollAnimationComponent', () => {
  let component: CssScrollAnimationComponent;
  let fixture: ComponentFixture<CssScrollAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssScrollAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssScrollAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
