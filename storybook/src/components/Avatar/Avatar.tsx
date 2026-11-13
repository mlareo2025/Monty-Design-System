import './Avatar.css';

export interface AvatarProps {
  /** `type` en Figma. La forma dice quién es: círculo = persona, cuadrado con borde = empresa. */
  type?: 'person' | 'company';
  /** `content` en Figma: una inicial o una imagen (foto o logo). */
  content?: 'initial' | 'image';
  /** `size` en Figma: sm 32 (listas), md 40 (tarjetas), lg 64 (perfil). */
  size?: 'sm' | 'md' | 'lg';
  /** `Inicial` en Figma. */
  inicial?: string;
  /** Foto o logo, con `content="image"`. */
  src?: string;
  /** Nombre de la persona o de la empresa. Es el `alt` de la imagen y el nombre accesible. */
  nombre: string;
}

export function Avatar({ type = 'person', content = 'initial', size = 'sm', inicial = 'L', src, nombre }: AvatarProps) {
  const clases = `m-avatar m-avatar--${type} m-avatar--${size}`;
  if (content === 'image') {
    return <img className={`${clases} m-avatar--image`} src={src} alt={nombre} />;
  }
  return (
    <span className={clases} role="img" aria-label={nombre}>
      <span aria-hidden="true">{inicial}</span>
    </span>
  );
}
