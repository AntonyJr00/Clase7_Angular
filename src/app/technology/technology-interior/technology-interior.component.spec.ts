import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyInteriorComponent } from './technology-interior.component';

describe('TechnologyInteriorComponent', () => {
  let component: TechnologyInteriorComponent;
  let fixture: ComponentFixture<TechnologyInteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyInteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
