import { Avatar } from '../Avatar/Avatar';
import { Chip } from '../Chip/Chip';
import { AiBlock, type AiBlockProps } from '../AiBlock/AiBlock';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import './Card.css';

export interface CardProps {
  /** `kind` en Figma. Hoy solo existe `match`. */
  kind?: 'match';
  /** `context` en Figma. `featured`: un match solo, con "Me interesa" primary. `list`: varios matches, sin primary. */
  context?: 'featured' | 'list';
  /** `Puesto` en Figma. */
  puesto: string;
  /** `Empresa` en Figma. */
  empresa: string;
  /** `Ubicación` en Figma. */
  ubicacion: string;
  /** `Jornada` en Figma. */
  jornada: string;
  /** `Monto` en Figma: cifra y moneda juntas ("$ 45.000 MXN"). */
  monto: string;

  // Lo que sigue no son propiedades de la Card en Figma: se cambian dentro de las instancias anidadas
  // (ver docs/handoff/card.md, Partes). Los valores por defecto son los de Figma.
  /** Inicial del Avatar de la empresa. */
  inicial?: string;
  /** Texto del Chip match. */
  match?: string;
  /** Unidad del salario. */
  unidad?: string;
  /** Chips tag: modalidad, seniority y habilidades. */
  etiquetas?: string[];
  /** El porqué de Monty: etiqueta y dos o tres razones. */
  porque?: AiBlockProps;
  /** Elemento del puesto. El nivel de encabezado está pendiente (docs/handoff/card.md, ⚠️ 10). */
  puestoComo?: 'h2' | 'h3' | 'h4' | 'p';

  onMeInteresa?: () => void;
  /** Solo en `featured`. */
  onGuardar?: () => void;
  /** Solo en `list`: descarta el match. */
  onAhoraNo?: () => void;
}

/** Tarjeta de match. Plana, no es clicable entera: las acciones son los botones. Llena el ancho de su contenedor. */
export function Card({
  kind = 'match',
  context = 'featured',
  puesto,
  empresa,
  ubicacion,
  jornada,
  monto,
  inicial = 'N',
  match = '92 % de match',
  unidad = '/ mes',
  etiquetas = ['Remoto', 'Senior', 'Figma'],
  porque = {
    etiqueta: 'Por qué Monty te la recomienda',
    razon1: 'Pediste trabajo remoto y Nubank lo ofrece.',
    razon2: 'Tus 4 años con Figma cubren lo que piden.',
    razon3: 'El salario está dentro de tu rango.',
  },
  puestoComo: Puesto = 'p',
  onMeInteresa,
  onGuardar,
  onAhoraNo,
}: CardProps) {
  return (
    <article className={`m-card m-card--${kind} m-card--${context}`}>
      <div className="m-card__cabecera">
        <div className="m-card__empresa-y-puesto">
          <Avatar type="company" content="initial" size="md" inicial={inicial} nombre={empresa} />
          <div className="m-card__titulos">
            <Puesto className="m-card__puesto">{puesto}</Puesto>
            <p className="m-card__empresa">{empresa}</p>
          </div>
        </div>
        <Chip kind="match" etiqueta={match} />
      </div>

      <div className="m-card__datos">
        <ul className="m-card__metadatos">
          <li className="m-card__metadato"><Icon name="map-pin" size="sm" /><span>{ubicacion}</span></li>
          <li className="m-card__metadato"><Icon name="briefcase" size="sm" /><span>{jornada}</span></li>
        </ul>
        <p className="m-card__salario">
          <span className="m-card__monto">{monto}</span>
          <span className="m-card__unidad">{unidad}</span>
        </p>
        {etiquetas.length > 0 && (
          <ul className="m-card__chips">
            {etiquetas.map((e) => <li key={e}><Chip kind="tag" etiqueta={e} /></li>)}
          </ul>
        )}
      </div>

      <AiBlock {...porque} />

      <div className="m-card__acciones">
        {context === 'featured' ? (
          <>
            <Button variant="primary" etiqueta="Me interesa" onClick={onMeInteresa} />
            <Button variant="ghost" etiqueta="Guardar" mostrarIcono icono="bookmark" onClick={onGuardar} />
          </>
        ) : (
          <>
            <Button variant="secondary" etiqueta="Me interesa" onClick={onMeInteresa} />
            <Button variant="ghost" etiqueta="Ahora no" onClick={onAhoraNo} />
          </>
        )}
      </div>
    </article>
  );
}
