import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Badge } from './badge';

describe('Badge', () => {
  it('renders status text', () => {
    expect(renderToStaticMarkup(<Badge tone="success">Active</Badge>)).toContain('Active');
  });
});
