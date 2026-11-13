import type { ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import './Button.css';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** `variant` en Figma: primary (una por vista), secondary (con borde), ghost (poco peso). */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** `state` en Figma. `hover` se fuerza para documentarlo; en uso real sale solo. `disabled` deshabilita el botón. */
  state?: 'default' | 'hover' | 'disabled';
  /** `Etiqueta` en Figma. Siempre hay texto: no existen botones de solo ícono. */
  etiqueta: string;
  /** `Mostrar ícono` en Figma. El ícono va antes del texto. */
  mostrarIcono?: boolean;
  /** `Ícono` en Figma (cambio de instancia). */
  icono?: IconName;
}

export function Button({ variant = 'primary', state = 'default', etiqueta, mostrarIcono = false, icono = 'calendar', className, disabled, ...rest }: ButtonProps) {
  const deshabilitado = disabled || state === 'disabled';
  const clases = ['m-button', `m-button--${variant}`, state === 'hover' && 'm-button--hover', className].filter(Boolean).join(' ');
  return (
    <button type="button" className={clases} disabled={deshabilitado} {...rest}>
      {mostrarIcono && <Icon name={icono} size="md" />}
      <span className="m-button__etiqueta">{etiqueta}</span>
    </button>
  );
}
