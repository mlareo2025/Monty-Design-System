import type { SVGProps } from 'react';
import { iconPaths, type IconName } from './icons';
import './Icon.css';

export type IconSize = 'sm' | 'md' | 'lg';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  /** Propiedad `name` de Figma: uno de los 21 íconos. */
  name: IconName;
  /** Tamaño con los tokens `icon/size-sm|md|lg` (16, 20, 24). En Figma es el tamaño de la instancia, no una propiedad. */
  size?: IconSize;
  /** Texto para lectores de pantalla. Sin él, el ícono es decorativo (`aria-hidden`). */
  label?: string;
}

/** Ícono de trazo. Toma el color del texto que lo rodea (`currentColor`); solo, usa `icon/color`. */
export function Icon({ name, size = 'md', label, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={['m-icon', `m-icon--${size}`, className].filter(Boolean).join(' ')}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      {...rest}
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

export { iconNames, type IconName } from './icons';
