import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentEditorComponent } from './post-comment-editor.component';

describe('PostCommentEditorComponent', () => {
  let component: PostCommentEditorComponent;
  let fixture: ComponentFixture<PostCommentEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
