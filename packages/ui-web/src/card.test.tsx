import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Card } from './card';

describe('Card', () => {
  it('renders content', () => {
    expect(renderToStaticMarkup(<Card>Content</Card>)).toContain('Content');
  });
});
