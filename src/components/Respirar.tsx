import { useEffect, useRef, useState } from 'react'
import { respirar } from '../content/conteudo'
import { useNaTela } from '../hooks/useNaTela'
import { Vento } from './Rabiscos'
import { Traco } from './Traco'
import { TituloComIcone } from './TituloComIcone'

type Fase = 'parado' | 'inspira' | 'segura' | 'solta' | 'fim'
type FaseAtiva = 'inspira' | 'segura' | 'solta'

/** Duração de cada parte da respiração, em milissegundos (o CSS usa os mesmos tempos) */
const TEMPO: Record<FaseAtiva, number> = { inspira: 4000, segura: 2000, solta: 5000 }
const SEGUINTE: Record<'inspira' | 'segura', FaseAtiva> = { inspira: 'segura', segura: 'solta' }
const RODADAS = 3

const DICA: Record<Fase, string> = {
  parado: 'Quando quiser, é só começar.',
  inspira: 'Puxe o ar pelo nariz e encha o balão…',
  segura: 'Segure um pouquinho…',
  solta: 'Agora solte devagar pela boca…',
  fim: 'Muito bem! Quer brincar de novo?',
}

/** Folga entre o que fica à vista e as bordas da área visível */
const FOLGA = 16

/** Posição do elemento na página, sem contar transformações (a revelação ao rolar desloca 24 px) */
function topoNaPagina(el: HTMLElement) {
  let y = 0
  for (let e: HTMLElement | null = el; e; e = e.offsetParent as HTMLElement | null) y += e.offsetTop
  return y
}

/**
 * Ao começar, a página leva o balão para o centro da área visível (abaixo do cabeçalho fixo).
 * No celular o botão fica acima do balão: se os dois cabem juntos na tela, o botão (agora "Parar")
 * continua à vista. A rolagem segue o scroll-behavior do html: suave, ou instantânea com "reduzir movimento".
 */
function focarNoBalao(palco: HTMLElement, botao: HTMLElement | null) {
  const cabecalho = document.querySelector<HTMLElement>('.cabecalho')?.offsetHeight ?? 0
  const visivel = window.innerHeight - cabecalho
  const topo = topoNaPagina(palco)
  let alvo = topo + palco.offsetHeight / 2 - cabecalho - visivel / 2
  if (botao) {
    // Rolar além disto esconde o botão; rolar menos que aquilo corta o balão
    const limiteBotao = topoNaPagina(botao) - cabecalho - FOLGA
    const minimoPalco = topo + palco.offsetHeight + FOLGA - window.innerHeight
    if (alvo > limiteBotao && limiteBotao >= minimoPalco) alvo = limiteBotao
  }
  window.scrollTo({ top: Math.max(0, alvo) })
}

/**
 * A respiração do balão: o balão enche (puxa o ar), espera (segura) e esvazia (solta),
 * três vezes. A dica escrita acompanha cada parte e é lida pelos leitores de tela.
 */
export function Respirar() {
  const [fase, setFase] = useState<Fase>('parado')
  const [rodada, setRodada] = useState(1)
  const palco = useRef<HTMLDivElement>(null)
  const botao = useRef<HTMLButtonElement>(null)
  const ativo = fase === 'inspira' || fase === 'segura' || fase === 'solta'
  // O balão só flutua enquanto está na tela
  useNaTela(palco)

  useEffect(() => {
    if (fase !== 'inspira' && fase !== 'segura' && fase !== 'solta') return
    const relogio = setTimeout(() => {
      if (fase !== 'solta') {
        setFase(SEGUINTE[fase])
      } else if (rodada >= RODADAS) {
        setFase('fim')
      } else {
        setRodada((r) => r + 1)
        setFase('inspira')
      }
    }, TEMPO[fase])
    return () => clearTimeout(relogio)
  }, [fase, rodada])

  const alternar = () => {
    setRodada(1)
    if (ativo) {
      setFase('parado')
      return
    }
    setFase('inspira')
    if (palco.current) focarNoBalao(palco.current, botao.current)
  }

  const rotulo = ativo ? 'Parar' : fase === 'fim' ? 'Brincar de novo' : 'Começar'

  return (
    <section id="respirar" className="secao campo campo--azul respirar" aria-labelledby="respirar-titulo">
      <Traco tema="respirar" />
      <div className="recipiente grade respirar__grade">
        <div className="respirar__texto">
          <h2 id="respirar-titulo" className="titulo" data-revelar>
            <TituloComIcone texto={respirar.titulo} icone={<Vento className="titulo__icone" />} />
          </h2>
          <p className="respirar__apoio" data-revelar="2">
            {respirar.texto}
          </p>
          <div className="respirar__acoes" data-revelar="3">
            <button ref={botao} type="button" className="botao" onClick={alternar}>
              {rotulo}
            </button>
          </div>
          <p className="respirar__nota">{respirar.nota}</p>
        </div>

        <div ref={palco} className="respirar__palco" data-fase={fase} data-revelar="2">
          <svg className="balao" viewBox="0 0 220 330" aria-hidden="true" focusable="false">
            <path className="balao__fio" d="M110 252c-14 18 16 30-2 50-10 11 4 18 0 26" />
            <g className="balao__inflavel">
              <path
                className="balao__corpo"
                d="M110 14c58 0 96 44 96 100 0 66-52 116-90 126h-12C66 230 14 180 14 114 14 58 52 14 110 14z"
              />
              <path className="balao__no" d="M100 240h20l-4 13h-12z" />
              <path className="balao__brilho" d="M58 78c8-18 24-30 42-34" />
            </g>
          </svg>
          <p className="respirar__dica mao" aria-live="polite">
            {DICA[fase]}
          </p>
          <p className="respirar__rodada" data-visivel={ativo}>
            {ativo ? `${rodada} de ${RODADAS}` : ''}
          </p>
        </div>
      </div>
    </section>
  )
}
