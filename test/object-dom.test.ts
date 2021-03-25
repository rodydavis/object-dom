import { create } from '../src/object-dom';

describe('create test', () => {
  it('Base HTML Create', () => {
    expect(create({ title: 'Example' }).toHtml()).toEqual(
      '<html><head><title></title></head><body></body></html>'
    );
  });
});
