import { Icon } from '../Icon/Icon';
import './AiBlock.css';

export interface AiBlockProps {
  /** `Etiqueta` en Figma. Siempre visible, con `sparkles`: el violeta nunca va solo. */
  etiqueta?: string;
  /** `Razón 1` en Figma. */
  razon1: string;
  /** `Razón 2` en Figma. */
  razon2: string;
  /** `Razón 3` en Figma. Entre dos y tres razones: si queda vacía, no se muestra. */
  razon3?: string;
}

/** El porqué de una decisión de Monty. Va anidado dentro de una tarjeta y no se toca. */
export function AiBlock({ etiqueta = 'Por qué Monty te la recomienda', razon1, razon2, razon3 }: AiBlockProps) {
  const razones = [razon1, razon2, razon3].filter((r): r is string => Boolean(r && r.trim()));
  return (
    <section className="m-ai-block" aria-label={etiqueta}>
      <p className="m-ai-block__etiqueta">
        <Icon name="sparkles" size="sm" />
        <span>{etiqueta}</span>
      </p>
      <ul className="m-ai-block__razones">
        {razones.map((r) => (
          <li key={r} className="m-ai-block__razon">
            <span className="m-ai-block__check"><Icon name="check" size="sm" /></span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
