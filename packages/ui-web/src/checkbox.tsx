import * as React from 'react';

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ style, ...props }, ref) => (
    <input ref={ref} type="checkbox" style={{ width: '1rem', height: '1rem', accentColor: 'var(--spx-primary)', cursor: 'pointer', ...style }} {...props} />
  ),
);
Checkbox.displayName = 'Checkbox';
