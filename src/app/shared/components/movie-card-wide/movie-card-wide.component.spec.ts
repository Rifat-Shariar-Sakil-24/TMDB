import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardWideComponent } from './movie-card-wide.component';

describe('MovieCardWideComponent', () => {
  let component: MovieCardWideComponent;
  let fixture: ComponentFixture<MovieCardWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardWideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
