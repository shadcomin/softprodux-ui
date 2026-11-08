import * as React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ invalid = false, style, ...props }, ref) => (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      style={{
        boxSizing: 'border-box',
        width: '100%',
        padding: '0.625rem 0.75rem',
        border: `1px solid ${invalid ? '#c83434' : 'var(--spx-border)'}`,
        borderRadius: 'var(--spx-radius)',
        background: 'var(--spx-background)',
        color: 'var(--spx-foreground)',
        font: 'inherit',
        ...style,
      }}
      {...props}
    />
  ),
);
Input.displayName = 'Input';
