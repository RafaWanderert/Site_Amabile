// Rabiscos e desenhos de traço fino, nos mesmos traços da arte da Amabile (broto, coração).
// Cada traço tem pathLength="1" para "se desenhar" na tela.

type Props = { className?: string }

export function Broto({ className = '' }: Props) {
  return (
    <svg className={`rabisco ${className}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path pathLength={1} d="M32 60c0-9 0-18 0-27" />
      <path pathLength={1} d="M32 42c-10 0-17-7-18-17 10 0 17 7 18 17z" />
      <path pathLength={1} d="M32 37c1-10 8-17 18-18 0 10-8 17-18 18z" />
      <path pathLength={1} d="M32 31c-5-7-5-17 0-24 5 7 5 17 0 24z" />
    </svg>
  )
}

export function Coracao({ className = '' }: Props) {
  return (
    <svg className={`rabisco ${className}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path
        pathLength={1}
        d="M32 54C18 44 8 35 9 23c1-8 8-13 15-11 4 1 7 4 8 8 1-4 4-7 8-8 7-2 14 3 15 11 1 12-9 21-23 31z"
      />
    </svg>
  )
}

export function Estrela({ className = '' }: Props) {
  return (
    <svg className={`rabisco ${className}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path pathLength={1} d="M32 7l6 16 17 1-13 11 5 17-15-10-14 10 4-17-13-11 17-1z" />
    </svg>
  )
}

// Ícones de traço de cada tópico, no mesmo traço fino do broto e do coração.

/** Atendimentos: o cérebro visto de cima (neuropsicologia) */
export function Cerebro({ className = '' }: Props) {
  return (
    <svg className={`rabisco ${className}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path pathLength={1} d="M32 13C29 8 21 8 19 13 13 13 10 19 12 24 7 27 7 35 12 38 10 44 15 49 21 48 23 53 30 54 32 50" />
      <path pathLength={1} d="M32 13C35 8 43 8 45 13 51 13 54 19 52 24 57 27 57 35 52 38 54 44 49 49 43 48 41 53 34 54 32 50" />
      <path pathLength={1} d="M32 13v37" />
      <path pathLength={1} d="M20 24c3 0 6 2 7 5M19 37c3-2 7-2 9 1M44 24c-3 0-6 2-7 5M45 37c-3-2-7-2-9 1" />
    </svg>
  )
}

/** Quem eu acompanho: um sol (cada criança brilha do seu jeito) */
export function Sol({ className = '' }: Props) {
  return (
    <svg className={`rabisco ${className}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path pathLength={1} d="M32 21a11 11 0 1 1 0 22 11 11 0 1 1 0-22z" />
      <path pathLength={1} d="M32 6v7M32 51v7M6 32h7M51 32h7" />
      <path pathLength={1} d="M13.6 13.6l5 5M45.4 45.4l5 5M13.6 50.4l5-5M45.4 18.6l5-5" />
    </svg>
  )
}

/** Como funciona: uma setinha que dá um laço no caminho, como os fios entre os tópicos */
export function Caminho({ className = '' }: Props) {
  return (
    <svg className={`rabisco ${className}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path pathLength={1} d="M6 48C16 48 24 41 28 32 32 22 28 12 20 14 12 16 14 30 26 34 38 38 48 32 56 22" />
      <path pathLength={1} d="M46 20l10 2-2 10" />
    </svg>
  )
}

/** Respirar: três sopros de vento com a pontinha enrolada */
export function Vento({ className = '' }: Props) {
  return (
    <svg className={`rabisco ${className}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path pathLength={1} d="M6 22h28c5 0 8-3 8-7s-3-7-7-7c-3 0-6 3-5 6" />
      <path pathLength={1} d="M6 32h40c6 0 10 4 10 9s-4 8-8 8c-4 0-7-3-6-7" />
      <path pathLength={1} d="M6 42h18c4 0 7 3 7 6s-2 5-5 5" />
    </svg>
  )
}

/** Formação: um livro aberto */
export function Livro({ className = '' }: Props) {
  return (
    <svg className={`rabisco ${className}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path pathLength={1} d="M32 20C26 15 17 14 8 15v32c9-1 18 0 24 5" />
      <path pathLength={1} d="M32 20c6-5 15-6 24-5v32c-9-1-18 0-24 5" />
      <path pathLength={1} d="M32 20v32" />
      <path pathLength={1} d="M14 23c4 0 8 1 12 3M14 31c4 0 8 1 12 3M38 26c4-2 8-3 12-3M38 34c4-2 8-3 12-3" />
    </svg>
  )
}

/** Os risquinhos de destaque do banner dela: dois traços e uma folhinha, apontando para a esquerda */
export function Faiscas({ className = '' }: Props) {
  return (
    <svg className={`rabisco ${className}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path pathLength={1} d="M40 6L24 26" />
      <path pathLength={1} d="M60 24L34 36" />
      <path pathLength={1} d="M30 50c8-6 18-8 28-4-8 6-18 8-28 4z" />
    </svg>
  )
}

/**
 * "Do jeito de cada criança": uma criança no morrinho empinando pipa, em traço fino.
 * A linha sai da mão dela até a ponta de baixo da pipa; a pipa (com a rabiola) balança
 * em volta desse ponto, então a linha nunca se solta.
 */
export function Pipa({ className = '' }: Props) {
  return (
    <svg className={`rabisco pipa ${className}`} viewBox="0 0 320 300" aria-hidden="true" focusable="false">
      {/* morrinho */}
      <path pathLength={1} d="M8 274c40-14 92-20 150-16 56 4 98 14 154 6" />
      {/* passarinhos */}
      <path pathLength={1} d="M38 84q8-9 16 0 8-9 16 0" />
      <path pathLength={1} d="M80 58q6-7 12 0 6-7 12 0" />
      {/* criança */}
      <path pathLength={1} d="M108 200a12 12 0 1 1-24 0 12 12 0 1 1 24 0z" />
      <path pathLength={1} d="M85 196c-7-1-10 4-8 9" />
      <path className="pipa__roupa" pathLength={1} d="M90 214l-8 32h28l-8-32z" />
      <path pathLength={1} d="M100 220l18-20" />
      <path pathLength={1} d="M92 220l-12 16" />
      <path pathLength={1} d="M90 246v16M102 246v16" />
      {/* linha da pipa */}
      <path pathLength={1} d="M118 200c34-10 52-34 66-58s30-34 48-44" />
      {/* pipa, rabiola e lacinhos: balançam juntos */}
      <g className="pipa__voo">
        <path className="pipa__papel" pathLength={1} d="M232 24l32 36-32 38-28-38z" />
        <path pathLength={1} d="M232 24v74M204 60h60" />
        <path pathLength={1} d="M232 98c10 12-8 20 2 32s-6 22 6 34" />
        <path className="pipa__laco" pathLength={1} d="M226 111l8 5-8 5zM242 111l-8 5 8 5z" />
        <path className="pipa__laco" pathLength={1} d="M230 143l8 5-8 5zM246 143l-8 5 8 5z" />
      </g>
    </svg>
  )
}

/** Um desenho para cada etapa do atendimento, na ordem de "Como funciona" */
const ETAPAS: string[][] = [
  // Acolhimento: dois balões de conversa
  [
    'M24 28h88a16 16 0 0 1 16 16v38a16 16 0 0 1-16 16H56l-24 20 5-20H24A16 16 0 0 1 8 82V44a16 16 0 0 1 16-16z',
    'M144 74h34a14 14 0 0 1 14 14v30a14 14 0 0 1-14 14h-6l4 18-20-18h-38a14 14 0 0 1-14-14v-12',
    'M46 64h1',
    'M68 64h1',
    'M90 64h1',
  ],
  // Avaliação: lupa com um brilho
  ['M88 26a48 48 0 1 1 0 96 48 48 0 1 1 0-96z', 'M124 112l46 46', 'M70 60c6-10 16-16 28-16'],
  // Devolutiva: folha com anotações e um coração
  [
    'M54 16h76l24 24v128H54z',
    'M130 16v24h24',
    'M74 70h58',
    'M74 94h58',
    'M74 118h34',
    'M128 150c-8-6-14-11-13-18 1-5 7-7 11-3l2 2 2-2c4-4 10-2 11 3 1 7-5 12-13 18z',
  ],
  // Intervenção: blocos de montar e uma bola
  [
    'M36 116h50v50H36z',
    'M86 116h50v50H86z',
    'M61 66h50v50H61z',
    'M178 146a20 20 0 1 1-40 0 20 20 0 0 1 40 0z',
    'M140 140c10 4 26 4 36 0',
  ],
  // Acompanhamento: casa e broto (família e crescimento)
  [
    'M24 104l52-46 52 46v62H24z',
    'M62 166v-36h28v36',
    'M168 166v-46',
    'M168 138c-13 0-21-8-22-21 13 0 21 8 22 21z',
    'M168 130c1-13 9-21 22-22 0 13-8 21-22 22z',
  ],
]

export function DesenhoEtapa({ indice, className = '' }: Props & { indice: number }) {
  const tracos = ETAPAS[indice] ?? []
  return (
    <svg className={`rabisco ${className}`} viewBox="0 0 200 180" aria-hidden="true" focusable="false">
      {tracos.map((d) => (
        <path key={d} pathLength={1} d={d} />
      ))}
    </svg>
  )
}
