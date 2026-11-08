import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('uses a native checkbox', () => {
    const html = renderToStaticMarkup(<Checkbox aria-label="Agree" />);
    expect(html).toContain('type="checkbox"');
    expect(html).toContain('aria-label="Agree"');
  });
});
