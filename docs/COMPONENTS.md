# Component catalog

Import components from `@softprodux/ui-web` and import `@softprodux/tokens/styles.css` once in the consuming application.

| Component | Purpose | Accessibility |
| --- | --- | --- |
| Button | Primary/outline actions | Native button, defaults to type=button |
| Card | Surface container | Native div, semantic content remains consumer responsibility |
| Input | Text entry | Native input, invalid state via aria-invalid |
| ThemeProvider | Scoped light/dark themes | data-theme attribute |
| Badge | Status labels | Native span; status semantics supplied by consumer |
| Checkbox | Boolean selection | Native checkbox |
| Textarea | Multiline entry | Native textarea, invalid state via aria-invalid |

All form controls need accessible names. Use a visible `<label htmlFor="...">` where possible. Avoid using color alone to convey errors. Consumers must supply error messages and connect them with `aria-describedby`.

## Example

```tsx
import { Button, Card, Input, ThemeProvider } from '@softprodux/ui-web';
import '@softprodux/tokens/styles.css';

export function Example() {
  return <ThemeProvider theme="light"><Card>
    <label htmlFor="email">Email</label>
    <Input id="email" type="email" />
    <Button>Save</Button>
  </Card></ThemeProvider>;
}
```

## Development
Run `pnpm install`, `pnpm typecheck`, `pnpm build`, and `pnpm test` at the root.
Run `pnpm --filter @softprodux/playground dev` for the local preview.
