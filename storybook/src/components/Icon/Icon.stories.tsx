import type { Meta, StoryObj } from '@storybook/react';
import { Icon, iconNames } from './Icon';

const meta = {
  title: 'Componentes/Icon',
  component: Icon,
  args: { name: 'sparkles', size: 'md' },
  argTypes: { name: { control: 'select', options: iconNames }, size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] } },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Una story por valor de `name` (la única propiedad del set Icon en Figma).

export const Sparkles: Story = { name: 'name=sparkles', args: { name: 'sparkles' } };
export const CircleCheck: Story = { name: 'name=circle-check', args: { name: 'circle-check' } };
export const AlertTriangle: Story = { name: 'name=alert-triangle', args: { name: 'alert-triangle' } };
export const InfoCircle: Story = { name: 'name=info-circle', args: { name: 'info-circle' } };
export const X: Story = { name: 'name=x', args: { name: 'x' } };
export const ChevronRight: Story = { name: 'name=chevron-right', args: { name: 'chevron-right' } };
export const ChevronDown: Story = { name: 'name=chevron-down', args: { name: 'chevron-down' } };
export const Search: Story = { name: 'name=search', args: { name: 'search' } };
export const User: Story = { name: 'name=user', args: { name: 'user' } };
export const Briefcase: Story = { name: 'name=briefcase', args: { name: 'briefcase' } };
export const MapPin: Story = { name: 'name=map-pin', args: { name: 'map-pin' } };
export const Calendar: Story = { name: 'name=calendar', args: { name: 'calendar' } };
export const Bell: Story = { name: 'name=bell', args: { name: 'bell' } };
export const MessageCircle: Story = { name: 'name=message-circle', args: { name: 'message-circle' } };
export const Bookmark: Story = { name: 'name=bookmark', args: { name: 'bookmark' } };
export const Eye: Story = { name: 'name=eye', args: { name: 'eye' } };
export const EyeOff: Story = { name: 'name=eye-off', args: { name: 'eye-off' } };
export const ArrowLeft: Story = { name: 'name=arrow-left', args: { name: 'arrow-left' } };
export const Plus: Story = { name: 'name=plus', args: { name: 'plus' } };
export const Mail: Story = { name: 'name=mail', args: { name: 'mail' } };
export const Check: Story = { name: 'name=check', args: { name: 'check' } };
