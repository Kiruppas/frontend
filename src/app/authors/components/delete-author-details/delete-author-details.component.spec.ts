import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAuthorDetailsComponent } from './delete-author-details.component';

describe('DeleteAuthorDetailsComponent', () => {
  let component: DeleteAuthorDetailsComponent;
  let fixture: ComponentFixture<DeleteAuthorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAuthorDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAuthorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
