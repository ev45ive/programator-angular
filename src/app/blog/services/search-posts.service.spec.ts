import { TestBed } from '@angular/core/testing';

import { SearchPostsService } from './search-posts.service';

describe('SearchPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPostsService = TestBed.get(SearchPostsService);
    expect(service).toBeTruthy();
  });
});
