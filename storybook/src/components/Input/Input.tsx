import { useId, type InputHTMLAttributes } from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'defaultValue'> {
  /** `state` en Figma. `focus` se fuerza para documentarlo; en uso real sale al enfocar el campo. */
  state?: 'default' | 'focus' | 'error' | 'disabled';
  /** `Label` en Figma. Siempre visible, encima del campo. Los obligatorios llevan `*`. */
  label: string;
  /** `Valor` en Figma: el texto escrito. */
  valor?: string;
  /** `Ayuda` en Figma. Opcional y corta. En `error` la reemplaza el mensaje. */
  ayuda?: string;
  /** `Mensaje de error` en Figma: qué pasó y cómo arreglarlo. Solo se ve en `error`. */
  mensajeError?: string;
  /** `Mostrar ícono` en Figma. El ícono va a la izquierda, dentro del campo. */
  mostrarIcono?: boolean;
  /** `Ícono` en Figma (cambio de instancia). */
  icono?: IconName;
}

export function Input({ state = 'default', label, valor, ayuda, mensajeError, mostrarIcono = false, icono = 'search', id, ...rest }: InputProps) {
  const idAuto = useId();
  const idCampo = id ?? idAuto;
  const idPie = `${idCampo}-pie`;
  const esError = state === 'error';
  const pie = esError ? mensajeError : ayuda;
  return (
    <div className={`m-input m-input--${state}`}>
      <label className="m-input__label" htmlFor={idCampo}>{label}</label>
      <div className="m-input__campo">
        {mostrarIcono && <Icon name={icono} size="md" />}
        <input
          id={idCampo}
          className="m-input__valor"
          defaultValue={valor}
          disabled={state === 'disabled'}
          aria-invalid={esError || undefined}
          aria-describedby={pie ? idPie : undefined}
          {...rest}
        />
      </div>
      {pie && (
        <p id={idPie} className={esError ? 'm-input__mensaje' : 'm-input__ayuda'}>
          {esError && <Icon name="alert-triangle" size="md" />}
          <span>{pie}</span>
        </p>
      )}
    </div>
  );
}
