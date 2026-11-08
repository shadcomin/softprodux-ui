import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('exposes validation state', () => {
    expect(renderToStaticMarkup(<Textarea aria-label="Message" invalid />)).toContain('aria-invalid="true"');
  });
});
