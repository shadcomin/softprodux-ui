import * as React from 'react';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ invalid = false, style, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      style={{
        boxSizing: 'border-box', width: '100%', minHeight: '6rem',
        padding: '0.625rem 0.75rem',
        border: `1px solid ${invalid ? '#c83434' : 'var(--spx-border)'}`,
        borderRadius: 'var(--spx-radius)',
        background: 'var(--spx-background)', color: 'var(--spx-foreground)',
        font: 'inherit', resize: 'vertical', ...style,
      }}
      {...props}
    />
  ),
);
Textarea.displayName = 'Textarea';
