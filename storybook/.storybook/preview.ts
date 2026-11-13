import type { Decorator, Preview } from '@storybook/react';
import '../src/tokens/tokens.css';
import '../src/styles/base.css';

// Modo y plataforma se aplican en <html>, igual que en la app:
// <html data-theme="dark" data-platform="web">.
const aplicarEnHtml: Decorator = (Story, context) => {
  const html = document.documentElement;
  const { modo, plataforma } = context.globals;
  if (modo === 'dark') html.setAttribute('data-theme', 'dark');
  else html.removeAttribute('data-theme');
  if (plataforma === 'web') html.setAttribute('data-platform', 'web');
  else html.removeAttribute('data-platform');
  return Story();
};

const preview: Preview = {
  globalTypes: {
    modo: {
      description: 'Modo de color',
      toolbar: {
        title: 'Modo',
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    plataforma: {
      description: 'Plataforma',
      toolbar: {
        title: 'Plataforma',
        icon: 'mobile',
        items: [
          { value: 'mobile', title: 'Mobile' },
          { value: 'web', title: 'Web' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { modo: 'light', plataforma: 'mobile' },
  decorators: [aplicarEnHtml],
  parameters: {
    // El fondo sale del token, no del addon de fondos.
    backgrounds: { disable: true },
    controls: { expanded: true },
    layout: 'padded',
  },
};

export default preview;
