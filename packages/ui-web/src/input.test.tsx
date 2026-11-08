import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Input } from './input';

describe('Input', () => {
  it('marks invalid inputs for assistive technology', () => {
    expect(renderToStaticMarkup(<Input aria-label="Email" invalid />)).toContain('aria-invalid="true"');
  });
});
