import { useRef, type ReactNode } from 'react'
import { useNaTela } from '../hooks/useNaTela'

/** Brinquedos desenhados em traço creme, com o recheio nos pastéis da marca */
const BRINQUEDOS: { nome: string; desenho: ReactNode }[] = [
  {
    nome: 'bola',
    desenho: (
      <>
        <circle className="b-amarelo" cx="50" cy="52" r="36" />
        <path d="M50 16c-15 13-15 59 0 72M50 16c15 13 15 59 0 72M16 44c22 9 46 9 68 0" />
      </>
    ),
  },
  {
    nome: 'blocos',
    desenho: (
      <>
        <path className="b-azul" d="M12 58h36v34H12z" />
        <path className="b-rosa" d="M52 58h36v34H52z" />
        <path className="b-verde" d="M32 20h36v34H32z" />
        <path d="M43 46l7-17 7 17M46 40h8" />
      </>
    ),
  },
  {
    nome: 'ursinho',
    desenho: (
      <>
        <circle className="b-amarelo" cx="27" cy="27" r="11" />
        <circle className="b-amarelo" cx="73" cy="27" r="11" />
        <circle className="b-amarelo" cx="50" cy="54" r="32" />
        <ellipse className="b-creme" cx="50" cy="66" rx="13" ry="10" />
        <circle className="b-olho" cx="39" cy="48" r="3.5" />
        <circle className="b-olho" cx="61" cy="48" r="3.5" />
        <path className="b-olho" d="M45 62h10l-5 5z" />
      </>
    ),
  },
  {
    nome: 'piao',
    desenho: (
      <>
        <path d="M50 10v12" />
        <path className="b-lilas" d="M20 36c0-12 60-12 60 0L53 86a4 4 0 0 1-6 0z" />
        <path d="M23 44c16 7 38 7 54 0" />
      </>
    ),
  },
  {
    nome: 'carrinho',
    desenho: (
      <>
        <path className="b-azul" d="M8 70V56c0-4 3-7 7-7h14l10-15h24l12 15h10c4 0 7 3 7 7v14z" />
        <path className="b-creme" d="M42 39h18l8 10H35z" />
        <circle className="b-roda" cx="30" cy="72" r="10" />
        <circle className="b-roda" cx="72" cy="72" r="10" />
      </>
    ),
  },
  {
    nome: 'barquinho',
    desenho: (
      <>
        <path d="M50 66V14" />
        <path className="b-creme" d="M54 18l26 42H54z" />
        <path className="b-rosa" d="M12 66h76L75 86H25z" />
        <path d="M50 14l13 5-13 5" />
      </>
    ),
  },
  {
    nome: 'cata-vento',
    desenho: (
      <>
        <path d="M50 52v42" />
        <g className="catavento__helice">
          <path className="b-rosa" d="M50 50V16c13 0 21 11 19 22z" />
          <path className="b-amarelo" d="M50 50h34c0 13-11 21-22 19z" />
          <path className="b-azul" d="M50 50v34c-13 0-21-11-19-22z" />
          <path className="b-verde" d="M50 50H16c0-13 11-21 22-19z" />
          <circle className="b-creme" cx="50" cy="50" r="4" />
        </g>
      </>
    ),
  },
  {
    nome: 'foguete',
    desenho: (
      <>
        <path className="b-amarelo" d="M43 74c0 9 5 15 7 19 2-4 7-10 7-19z" />
        <path className="b-lilas" d="M50 8c15 13 19 36 14 64H36c-5-28-1-51 14-64z" />
        <circle className="b-creme" cx="50" cy="38" r="8" />
        <path d="M37 56L25 74h13M63 56l12 18H62" />
      </>
    ),
  },
]

function Grupo() {
  return (
    <div className="desfile__grupo">
      {BRINQUEDOS.map((b) => (
        <svg key={b.nome} className={`brinquedo brinquedo--${b.nome}`} viewBox="0 0 100 100" focusable="false">
          {b.desenho}
        </svg>
      ))}
    </div>
  )
}

/**
 * Brinquedos passando pela tela, no rodapé. O trilho tem o grupo duas vezes e anda metade
 * da própria largura, então a volta emenda sem pulo. Só anda com o rodapé à vista,
 * para quando o mouse passa por cima e fica parado com "reduzir movimento".
 */
export function Desfile() {
  const desfile = useRef<HTMLDivElement>(null)
  useNaTela(desfile, '#fim-do-conteudo')

  return (
    <div ref={desfile} className="desfile" aria-hidden="true">
      <div className="desfile__trilho">
        <Grupo />
        <Grupo />
      </div>
    </div>
  )
}
