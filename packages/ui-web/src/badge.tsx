import * as React from 'react';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: 'neutral' | 'success' | 'danger';
};

const colors = {
  neutral: ['var(--spx-border)', 'var(--spx-foreground)'],
  success: ['#dcfce7', '#166534'],
  danger: ['#fee2e2', '#991b1b'],
} as const;

export function Badge({ tone = 'neutral', style, ...props }: BadgeProps) {
  const [background, color] = colors[tone];
  return <span style={{ display: 'inline-flex', alignItems: 'center', borderRadius: '999px', padding: '0.2rem 0.65rem', fontSize: '0.75rem', fontWeight: 600, background, color, ...style }} {...props} />;
}
