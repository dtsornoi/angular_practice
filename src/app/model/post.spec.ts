import { Post } from './post';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post('1',
      'first test post',
      'this is the body of the post'))
      .toBeTruthy();
  });
});
