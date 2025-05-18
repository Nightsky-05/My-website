import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterWorldComponent } from './enter-world.component';

describe('EnterWorldComponent', () => {
  let component: EnterWorldComponent;
  let fixture: ComponentFixture<EnterWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
