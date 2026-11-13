import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { iconNames } from '../Icon/Icon';
import { FilterChip } from './Chip';

const meta = {
  title: 'Componentes/FilterChip',
  component: FilterChip,
  args: { etiqueta: 'Remoto', selected: false, mostrarIcono: false, icono: 'map-pin', forzarHover: false },
  argTypes: { icono: { control: 'select', options: iconNames } },
  render: function Render(args) {
    const [selected, setSelected] = useState(args.selected ?? false);
    return <FilterChip {...args} selected={selected} onChange={setSelected} />;
  },
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Chip kind=filter interactivo: tócalo para alternar. Una story por estado de Figma.
export const Default: Story = { name: 'state=default' };
export const Hover: Story = { name: 'state=hover', args: { forzarHover: true } };
export const Selected: Story = { name: 'state=selected', args: { selected: true } };
