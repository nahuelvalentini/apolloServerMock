import { initserver } from './apolloServer/server';

describe('test', () => {
  test('add', async () => {
    expect(initserver instanceof Function).toEqual(true);
  });
});
