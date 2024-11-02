import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuthorDetailsComponent } from './update-author-details.component';

describe('UpdateAuthorDetailsComponent', () => {
  let component: UpdateAuthorDetailsComponent;
  let fixture: ComponentFixture<UpdateAuthorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAuthorDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAuthorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
