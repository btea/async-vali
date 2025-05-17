import { expect, it, describe } from 'vitest';
import Schema from '../src';

describe('unicode', () => {
  it('works for unicode U+0000 to U+FFFF ', (done) => {
    new Schema({
      v: {
        type: 'string',
        len: 4,
      },
    }).validate(
      {
        v: '吉吉吉吉',
      },
      (errors) => {
        expect(errors).toBe(null);
      },
    );
  });
});
