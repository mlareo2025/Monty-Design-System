import type { Meta, StoryObj } from '@storybook/react';
import { AiBlock } from './AiBlock';

const meta = {
  title: 'Componentes/AiBlock',
  component: AiBlock,
  args: {
    etiqueta: 'Por qué Monty te la recomienda',
    razon1: 'Pediste trabajo remoto y Nubank lo ofrece.',
    razon2: 'Tus 4 años con Figma cubren lo que piden.',
    razon3: 'El salario está dentro de tu rango.',
  },
  decorators: [(Story) => <div style={{ maxWidth: 'var(--layout-content-max-width)' }}><Story /></div>],
} satisfies Meta<typeof AiBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

// AiBlock no tiene variantes en Figma. Una story con tres razones (como en Figma) y otra con dos (el mínimo).
export const TresRazones: Story = { name: 'Tres razones' };
export const DosRazones: Story = { name: 'Dos razones', args: { razon3: '' } };
