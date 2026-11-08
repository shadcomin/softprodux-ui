import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Card, Input, ThemeProvider } from '@softprodux/ui-web';
import '@softprodux/tokens/styles.css';
import './style.css';

function App() {
  const [dark, setDark] = React.useState(false);
  return (
    <ThemeProvider theme={dark ? 'dark' : 'light'} className="app">
      <main className="container">
        <header><div><span className="eyebrow">SOFTPRODUX / DESIGN SYSTEM</span><h1>Build better, faster.</h1><p>Reusable components for the next generation of SoftProdux projects.</p></div><Button variant="outline" onClick={() => setDark(!dark)}>Switch to {dark ? 'light' : 'dark'}</Button></header>
        <section className="grid">
          <Card><h2>Buttons</h2><p>Primary and secondary actions</p><div className="actions"><Button>Get started</Button><Button variant="outline">Learn more</Button><Button disabled>Disabled</Button></div></Card>
          <Card><h2>Form controls</h2><p>Accessible, brand-aware inputs</p><label htmlFor="email">Email address</label><Input id="email" type="email" placeholder="hello@softprodux.com" /><div className="actions"><Button>Subscribe</Button></div></Card>
        </section>
        <footer>SoftProdux UI · Internal component playground</footer>
      </main>
    </ThemeProvider>
  );
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
