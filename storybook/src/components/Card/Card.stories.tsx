import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import '../../styles/pagina.css';

const meta = {
  title: 'Componentes/Card',
  component: Card,
  args: {
    kind: 'match',
    context: 'featured',
    puesto: 'Diseñadora de producto senior',
    empresa: 'Nubank',
    ubicacion: 'Ciudad de México',
    jornada: 'Tiempo completo',
    monto: '$ 45.000 MXN',
  },
  argTypes: {
    context: { control: 'inline-radio', options: ['featured', 'list'] },
    kind: { control: 'inline-radio', options: ['match'] },
  },
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div className="m-pagina"><Story /></div>],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Una story por variante de Figma. Con Plataforma = Web, la Card ocupa 6 de las 12 columnas.
export const Featured: Story = { name: 'kind=match, context=featured' };
export const List: Story = { name: 'kind=match, context=list', args: { context: 'list' } };
