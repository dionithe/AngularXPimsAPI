import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoonSectionComponent } from './soon-section.component';

describe('SoonSectionComponent', () => {
  let component: SoonSectionComponent;
  let fixture: ComponentFixture<SoonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoonSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
