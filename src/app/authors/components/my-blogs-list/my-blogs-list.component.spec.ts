import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBlogsListComponent } from './my-blogs-list.component';

describe('MyBlogsListComponent', () => {
  let component: MyBlogsListComponent;
  let fixture: ComponentFixture<MyBlogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBlogsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyBlogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
