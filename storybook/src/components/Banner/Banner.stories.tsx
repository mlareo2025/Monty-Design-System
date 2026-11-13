import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta = {
  title: 'Componentes/Banner',
  component: Banner,
  args: {
    type: 'success',
    titulo: 'Tu perfil está listo',
    mensaje: 'Monty ya está buscando ofertas para ti.',
    accion: 'Ver detalles',
    mostrarAccion: false,
    mostrarCerrar: true,
  },
  argTypes: { type: { control: 'inline-radio', options: ['success', 'warning', 'error', 'info'] } },
  decorators: [(Story) => <div style={{ maxWidth: 'var(--layout-content-max-width)' }}><Story /></div>],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Una story por tipo de Figma. Títulos y acciones de monty-ds; el mensaje, el de Figma salvo en error.
export const Success: Story = { name: 'type=success' };
export const Warning: Story = {
  name: 'type=warning',
  args: { type: 'warning', titulo: 'Te falta subir tu CV', accion: 'Subir CV', mostrarAccion: true },
};
export const ErrorType: Story = {
  name: 'type=error',
  args: { type: 'error', titulo: 'No pudimos guardar los cambios', mensaje: 'Revisa tu conexión y vuelve a intentarlo.', accion: 'Reintentar', mostrarAccion: true },
};
export const Info: Story = { name: 'type=info', args: { type: 'info', titulo: 'Nubank vio tu perfil' } };
export const SinCerrar: Story = { name: 'type=success · sin cerrar', args: { mostrarCerrar: false } };
