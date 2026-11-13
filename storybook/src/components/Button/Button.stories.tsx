import type { Meta, StoryObj } from '@storybook/react';
import { iconNames } from '../Icon/Icon';
import { Button } from './Button';

const meta = {
  title: 'Componentes/Button',
  component: Button,
  args: { variant: 'primary', state: 'default', etiqueta: 'Me interesa', mostrarIcono: false, icono: 'calendar' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost'] },
    state: { control: 'inline-radio', options: ['default', 'hover', 'disabled'] },
    icono: { control: 'select', options: iconNames },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Una story por variante de Figma: variant × state.

export const PrimaryDefault: Story = { name: 'variant=primary, state=default', args: { variant: 'primary', state: 'default' } };
export const PrimaryHover: Story = { name: 'variant=primary, state=hover', args: { variant: 'primary', state: 'hover' } };
export const PrimaryDisabled: Story = { name: 'variant=primary, state=disabled', args: { variant: 'primary', state: 'disabled' } };
export const SecondaryDefault: Story = { name: 'variant=secondary, state=default', args: { variant: 'secondary', state: 'default' } };
export const SecondaryHover: Story = { name: 'variant=secondary, state=hover', args: { variant: 'secondary', state: 'hover' } };
export const SecondaryDisabled: Story = { name: 'variant=secondary, state=disabled', args: { variant: 'secondary', state: 'disabled' } };
export const GhostDefault: Story = { name: 'variant=ghost, state=default', args: { variant: 'ghost', state: 'default' } };
export const GhostHover: Story = { name: 'variant=ghost, state=hover', args: { variant: 'ghost', state: 'hover' } };
export const GhostDisabled: Story = { name: 'variant=ghost, state=disabled', args: { variant: 'ghost', state: 'disabled' } };
export const GhostConIcono: Story = { name: 'variant=ghost · con ícono (Guardar)', args: { variant: 'ghost', etiqueta: 'Guardar', mostrarIcono: true, icono: 'bookmark' } };
