import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSearchViewComponent } from './posts-search-view.component';

describe('PostsSearchViewComponent', () => {
  let component: PostsSearchViewComponent;
  let fixture: ComponentFixture<PostsSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
