import { create } from '../src/object-dom';

describe('create test', () => {
  it('Base HTML Create', () => {
    const target = create({ title: 'Example' });
    expect(target.toHtml()).toEqual('<html><head><title></title></head><body></body></html>');
  });
});
