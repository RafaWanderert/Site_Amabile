import type { ReactNode } from 'react'

type Props = {
  texto: string
  /** O ícone de traço do tópico (aria-hidden), desenhado depois da última palavra */
  icone: ReactNode
}

/**
 * O texto do título com o ícone colado na última palavra, como o broto ao lado do nome
 * no banner dela. A última palavra e o ícone não se separam na quebra de linha.
 */
export function TituloComIcone({ texto, icone }: Props) {
  const corte = texto.lastIndexOf(' ')
  const comeco = corte === -1 ? '' : texto.slice(0, corte + 1)
  const fim = corte === -1 ? texto : texto.slice(corte + 1)
  return (
    <>
      {comeco}
      <span className="titulo__fim">
        {fim}
        {icone}
      </span>
    </>
  )
}
