import type { Meta, StoryObj } from '@storybook/react';
import { iconNames } from '../Icon/Icon';
import { Input } from './Input';

const meta = {
  title: 'Componentes/Input',
  component: Input,
  args: {
    state: 'default',
    label: 'Email',
    valor: 'ana@mail.com',
    ayuda: 'Usaremos este correo para avisarte de nuevos matches.',
    mensajeError: 'Falta el dominio. Escribe algo como ana@mail.com.',
    mostrarIcono: false,
    icono: 'search',
  },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'focus', 'error', 'disabled'] },
    icono: { control: 'select', options: iconNames },
  },
  decorators: [(Story) => <div style={{ maxWidth: 'var(--layout-content-max-width)' }}><Story /></div>],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Una story por estado de Figma.
export const Default: Story = { name: 'state=default' };
export const Focus: Story = { name: 'state=focus', args: { state: 'focus' } };
export const ErrorState: Story = { name: 'state=error', args: { state: 'error' } };
export const Disabled: Story = { name: 'state=disabled', args: { state: 'disabled' } };
export const ConIcono: Story = { name: 'state=default · con ícono (búsqueda)', args: { label: 'Buscar ofertas', valor: 'Diseño de producto', ayuda: undefined, mostrarIcono: true, icono: 'search' } };
