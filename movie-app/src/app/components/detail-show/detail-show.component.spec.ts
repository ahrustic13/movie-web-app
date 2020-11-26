import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShowComponent } from './detail-show.component';

describe('DetailShowComponent', () => {
  let component: DetailShowComponent;
  let fixture: ComponentFixture<DetailShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
