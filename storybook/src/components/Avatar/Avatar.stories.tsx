import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import marcador from '../../assets/avatar-marcador.png';

const meta = {
  title: 'Componentes/Avatar',
  component: Avatar,
  args: { type: 'person', content: 'initial', size: 'sm', inicial: 'L', nombre: 'Lucía Fernández', src: marcador },
  argTypes: {
    type: { control: 'inline-radio', options: ['person', 'company'] },
    content: { control: 'inline-radio', options: ['initial', 'image'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Una story por variante de Figma: type × content × size. La imagen es el marcador neutro del componente en Figma.

export const PersonInitialSM: Story = { name: 'type=person, content=initial, size=sm', args: { type: 'person', content: 'initial', size: 'sm', inicial: 'L', nombre: 'Lucía Fernández' } };
export const PersonInitialMD: Story = { name: 'type=person, content=initial, size=md', args: { type: 'person', content: 'initial', size: 'md', inicial: 'L', nombre: 'Lucía Fernández' } };
export const PersonInitialLG: Story = { name: 'type=person, content=initial, size=lg', args: { type: 'person', content: 'initial', size: 'lg', inicial: 'L', nombre: 'Lucía Fernández' } };
export const PersonImageSM: Story = { name: 'type=person, content=image, size=sm', args: { type: 'person', content: 'image', size: 'sm', inicial: 'L', nombre: 'Lucía Fernández' } };
export const PersonImageMD: Story = { name: 'type=person, content=image, size=md', args: { type: 'person', content: 'image', size: 'md', inicial: 'L', nombre: 'Lucía Fernández' } };
export const PersonImageLG: Story = { name: 'type=person, content=image, size=lg', args: { type: 'person', content: 'image', size: 'lg', inicial: 'L', nombre: 'Lucía Fernández' } };
export const CompanyInitialSM: Story = { name: 'type=company, content=initial, size=sm', args: { type: 'company', content: 'initial', size: 'sm', inicial: 'N', nombre: 'Nubank' } };
export const CompanyInitialMD: Story = { name: 'type=company, content=initial, size=md', args: { type: 'company', content: 'initial', size: 'md', inicial: 'N', nombre: 'Nubank' } };
export const CompanyInitialLG: Story = { name: 'type=company, content=initial, size=lg', args: { type: 'company', content: 'initial', size: 'lg', inicial: 'N', nombre: 'Nubank' } };
export const CompanyImageSM: Story = { name: 'type=company, content=image, size=sm', args: { type: 'company', content: 'image', size: 'sm', inicial: 'N', nombre: 'Nubank' } };
export const CompanyImageMD: Story = { name: 'type=company, content=image, size=md', args: { type: 'company', content: 'image', size: 'md', inicial: 'N', nombre: 'Nubank' } };
export const CompanyImageLG: Story = { name: 'type=company, content=image, size=lg', args: { type: 'company', content: 'image', size: 'lg', inicial: 'N', nombre: 'Nubank' } };
