import { Icon, type IconName } from '../Icon/Icon';
import './Banner.css';

export type BannerType = 'success' | 'warning' | 'error' | 'info';

const iconoPorTipo: Record<BannerType, IconName> = {
  success: 'circle-check',
  warning: 'alert-triangle',
  error: 'alert-triangle',
  info: 'info-circle',
};

export interface BannerProps {
  /** `type` en Figma. Un rechazo de una empresa nunca es `error`: se cuenta con `info` y un paso siguiente. */
  type?: BannerType;
  /** `Título` en Figma: qué pasó. */
  titulo: string;
  /** `Mensaje` en Figma: qué sigue. */
  mensaje: string;
  /** `Acción` en Figma: enlace subrayado ("Reintentar", "Subir CV"). */
  accion?: string;
  /** `Mostrar acción` en Figma. */
  mostrarAccion?: boolean;
  /** `Mostrar cerrar` en Figma. */
  mostrarCerrar?: boolean;
  onAccion?: () => void;
  onCerrar?: () => void;
}

export function Banner({ type = 'success', titulo, mensaje, accion = 'Ver detalles', mostrarAccion = false, mostrarCerrar = true, onAccion, onCerrar }: BannerProps) {
  return (
    <div className={`m-banner m-banner--${type}`} role={type === 'error' ? 'alert' : 'status'}>
      <Icon name={iconoPorTipo[type]} size="md" className="m-banner__icono" />
      <div className="m-banner__contenido">
        <p className="m-banner__titulo">{titulo}</p>
        <p className="m-banner__mensaje">{mensaje}</p>
        {mostrarAccion && (
          <button type="button" className="m-banner__accion" onClick={onAccion}>{accion}</button>
        )}
      </div>
      {mostrarCerrar && (
        <button type="button" className="m-banner__cerrar" aria-label="Cerrar" onClick={onCerrar}>
          <Icon name="x" size="md" />
        </button>
      )}
    </div>
  );
}
