import * as React from 'react';

export type Theme = 'light' | 'dark';
export type ThemeProviderProps = React.HTMLAttributes<HTMLDivElement> & {
  theme?: Theme;
};

/** Scoped themes allow separate brands or previews on the same page. */
export function ThemeProvider({ theme = 'light', children, ...props }: ThemeProviderProps) {
  return <div data-theme={theme} {...props}>{children}</div>;
}
