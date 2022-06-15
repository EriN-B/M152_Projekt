import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSvgAnimationComponent } from './css-svg-animation.component';

describe('CssSvgAnimationComponent', () => {
  let component: CssSvgAnimationComponent;
  let fixture: ComponentFixture<CssSvgAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssSvgAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssSvgAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
