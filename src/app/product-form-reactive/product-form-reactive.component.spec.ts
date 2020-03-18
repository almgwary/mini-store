import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormReactiveComponent } from './product-form-reactive.component';

describe('ProductFormReactiveComponent', () => {
  let component: ProductFormReactiveComponent;
  let fixture: ComponentFixture<ProductFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
