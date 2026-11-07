import * as React from 'react';

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ style, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        background: 'var(--spx-background)',
        color: 'var(--spx-foreground)',
        border: '1px solid var(--spx-border)',
        borderRadius: 'var(--spx-radius)',
        padding: '1.5rem',
        ...style,
      }}
      {...props}
    />
  ),
);
Card.displayName = 'Card';
