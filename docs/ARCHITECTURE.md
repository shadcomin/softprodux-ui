# SoftProdux UI architecture

## Scope
Public source repository with owner-controlled write permissions. Components are initially for SoftProdux agency projects. Public source does not imply a public package release.

## Packages
- `@softprodux/tokens`: CSS custom properties and TypeScript design constants.
- `@softprodux/ui-web`: framework-light React components, accessible native controls, and scoped theme provider.
- `@softprodux/playground`: Vite application demonstrating components in light and dark themes.

## Conventions
- Use semantic CSS variables, not client-specific hard-coded colors.
- Preserve native HTML semantics and forward refs for controls.
- Add tests and documentation for each component.
- Avoid client credentials and confidential assets in this public repository.
- Build web foundations before React Native adaptations.

## Next milestones
1. Add visual and interaction tests, then verify CI.
2. Add Storybook documentation and accessible dialog/select primitives.
3. Establish a controlled package release process.
4. Add design-token exports for React Native.
