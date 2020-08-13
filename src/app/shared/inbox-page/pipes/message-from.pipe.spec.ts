import { MessageFromPipe } from './message-from.pipe';

describe('MessageFromPipe', () => {
  it('create an instance', () => {
    const pipe = new MessageFromPipe();
    expect(pipe).toBeTruthy();
  });
});
