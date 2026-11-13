import type { ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import './Chip.css';

export type ChipKind = 'tag' | 'filter' | 'match';
export type ChipState = 'default' | 'hover' | 'selected';

export interface ChipProps {
  /** `kind` en Figma: tag (informa, 28 px), filter (filtra, 44 px), match (porcentaje de Monty, 28 px). */
  kind?: ChipKind;
  /** `state` en Figma. `hover` y `selected` solo existen en `filter`. */
  state?: ChipState;
  /** `Etiqueta` en Figma. */
  etiqueta: string;
  /** `Mostrar ícono` en Figma. En `match` el ícono es siempre `sparkles`; en `filter` seleccionado, `check`. */
  mostrarIcono?: boolean;
  /** `Ícono` en Figma (cambio de instancia). */
  icono?: IconName;
}

function iconoDe(kind: ChipKind, state: ChipState, mostrarIcono: boolean, icono: IconName): IconName | null {
  if (kind === 'match') return 'sparkles';
  if (kind === 'filter' && state === 'selected') return 'check';
  return mostrarIcono ? icono : null;
}

/** Chip visual, con las propiedades de Figma. No es interactivo: para filtrar, usa `FilterChip`. */
export function Chip({ kind = 'tag', state = 'default', etiqueta, mostrarIcono = false, icono = 'map-pin' }: ChipProps) {
  const estado = kind === 'filter' ? state : 'default';
  const nombreIcono = iconoDe(kind, estado, mostrarIcono, icono);
  return (
    <span className={`m-chip m-chip--${kind} m-chip--${estado}`}>
      {nombreIcono && <Icon name={nombreIcono} size="sm" />}
      <span className="m-chip__etiqueta">{etiqueta}</span>
    </span>
  );
}

export interface FilterChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onChange'> {
  /** `Etiqueta` en Figma. */
  etiqueta: string;
  /** Seleccionado: `state=selected` en Figma. Se anuncia con `aria-pressed` y se ve con `check`, no solo con color. */
  selected?: boolean;
  /** Se llama con el valor nuevo al tocarlo. */
  onChange?: (selected: boolean) => void;
  /** `Mostrar ícono` en Figma (solo sin seleccionar; seleccionado muestra `check`). */
  mostrarIcono?: boolean;
  /** `Ícono` en Figma. */
  icono?: IconName;
  /** Fuerza el estado `hover` de Figma, para documentarlo. En uso real el hover sale solo. */
  forzarHover?: boolean;
}

/** Chip `kind=filter` que se toca: un botón que alterna entre `default` y `selected`. */
export function FilterChip({ etiqueta, selected = false, onChange, mostrarIcono = false, icono = 'map-pin', forzarHover = false, onClick, ...rest }: FilterChipProps) {
  const estado: ChipState = selected ? 'selected' : forzarHover ? 'hover' : 'default';
  const nombreIcono = iconoDe('filter', estado, mostrarIcono, icono);
  return (
    <button
      type="button"
      className={`m-chip m-chip--filter m-chip--${estado} m-chip--interactivo`}
      aria-pressed={selected}
      onClick={(e) => { onClick?.(e); onChange?.(!selected); }}
      {...rest}
    >
      {nombreIcono && <Icon name={nombreIcono} size="sm" />}
      <span className="m-chip__etiqueta">{etiqueta}</span>
    </button>
  );
}
