import type { Cor } from '../content/conteudo'
import type { Imagem } from '../content/fotos'

type Props = {
  /** Classe com a posição e o giro da polaroide */
  className?: string
  imagem: Imagem
  /** Largura em que a foto aparece, para o navegador escolher o arquivo certo */
  sizes: string
  /** Cor da fita adesiva que prende a foto */
  fita: Cor
  /** Formato do recorte: retrato (4:5) ou paisagem (3:2) */
  formato?: 'retrato' | 'paisagem'
}

/** Foto em polaroide, presa com fita adesiva. A borda de baixo, mais larga, fica em branco. */
export function Foto({ className = '', imagem, sizes, fita, formato = 'retrato' }: Props) {
  return (
    <figure className={`foto foto--${formato} ${className}`}>
      <span className="fita" data-cor={fita} aria-hidden="true" />
      <div className="foto__imagem">
        <img
          src={imagem.src}
          srcSet={imagem.srcSet}
          sizes={sizes}
          width={imagem.width}
          height={imagem.height}
          alt={imagem.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
    </figure>
  )
}
