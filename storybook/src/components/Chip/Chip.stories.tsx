import type { Meta, StoryObj } from '@storybook/react';
import { iconNames } from '../Icon/Icon';
import { Chip } from './Chip';

const meta = {
  title: 'Componentes/Chip',
  component: Chip,
  args: { kind: 'tag', state: 'default', etiqueta: 'Remoto', mostrarIcono: false, icono: 'map-pin' },
  argTypes: {
    kind: { control: 'inline-radio', options: ['tag', 'filter', 'match'] },
    state: { control: 'inline-radio', options: ['default', 'hover', 'selected'] },
    icono: { control: 'select', options: iconNames },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Una story por variante de Figma (kind × state; hover y selected solo en filter).
export const TagDefault: Story = { name: 'kind=tag, state=default' };
export const TagConIcono: Story = { name: 'kind=tag · con ícono', args: { mostrarIcono: true, icono: 'map-pin', etiqueta: 'Ciudad de México' } };
export const FilterDefault: Story = { name: 'kind=filter, state=default', args: { kind: 'filter' } };
export const FilterHover: Story = { name: 'kind=filter, state=hover', args: { kind: 'filter', state: 'hover' } };
export const FilterSelected: Story = { name: 'kind=filter, state=selected', args: { kind: 'filter', state: 'selected' } };
export const MatchDefault: Story = { name: 'kind=match, state=default', args: { kind: 'match', etiqueta: '92 % de match' } };
