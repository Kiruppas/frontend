import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlogDetailsComponent } from './update-blog-details.component';

describe('UpdateBlogDetailsComponent', () => {
  let component: UpdateBlogDetailsComponent;
  let fixture: ComponentFixture<UpdateBlogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBlogDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
