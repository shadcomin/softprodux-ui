import * as React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', style, type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      data-variant={variant}
      style={{
        background: variant === 'primary' ? 'var(--spx-primary)' : 'transparent',
        color: variant === 'primary' ? 'var(--spx-primary-foreground)' : 'var(--spx-foreground)',
        border: '1px solid var(--spx-border)',
        borderRadius: 'var(--spx-radius)',
        padding: '0.625rem 1rem',
        cursor: 'pointer',
        ...style,
      }}
      {...props}
    />
  ),
);
Button.displayName = 'Button';
