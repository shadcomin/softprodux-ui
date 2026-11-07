import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from './button';

describe('Button', () => {
  it('renders a button with safe default type', () => {
    const html = renderToStaticMarkup(<Button>Save</Button>);
    expect(html).toContain('type="button"');
    expect(html).toContain('Save');
  });
});
