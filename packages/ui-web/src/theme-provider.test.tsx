import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { ThemeProvider } from './theme-provider';

describe('ThemeProvider', () => {
  it('scopes dark mode', () => {
    expect(renderToStaticMarkup(<ThemeProvider theme="dark">Hello</ThemeProvider>)).toContain('data-theme="dark"');
  });
});
