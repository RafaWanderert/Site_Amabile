import { useRef, useState, type KeyboardEvent } from 'react'
import { demandas } from '../content/conteudo'
import { Sol } from './Rabiscos'
import { Traco } from './Traco'
import { TituloComIcone } from './TituloComIcone'

/**
 * As demandas como um cartaz de sala: cada sigla é uma aba. Clicar (ou usar as setas)
 * troca o bilhete ao lado, que explica a demanda e como ela é acompanhada.
 */
export function Demandas() {
  const [ativa, setAtiva] = useState(0)
  const abas = useRef<(HTMLButtonElement | null)[]>([])
  const total = demandas.itens.length

  const selecionar = (i: number) => {
    setAtiva(i)
    abas.current[i]?.focus()
  }

  const aoTeclar = (e: KeyboardEvent<HTMLDivElement>) => {
    const destino: Record<string, number> = {
      ArrowDown: (ativa + 1) % total,
      ArrowRight: (ativa + 1) % total,
      ArrowUp: (ativa - 1 + total) % total,
      ArrowLeft: (ativa - 1 + total) % total,
      Home: 0,
      End: total - 1,
    }
    if (!(e.key in destino)) return
    e.preventDefault()
    selecionar(destino[e.key])
  }

  const demanda = demandas.itens[ativa]

  return (
    <section id="demandas" className="secao campo campo--amarelo demandas" aria-labelledby="demandas-titulo">
      <Traco tema="demandas" />
      <div className="recipiente grade demandas__grade">
        <h2 id="demandas-titulo" className="titulo demandas__titulo" data-revelar>
          <TituloComIcone texto={demandas.titulo} icone={<Sol className="titulo__icone" />} />
        </h2>

        <div
          role="tablist"
          aria-orientation="vertical"
          aria-labelledby="demandas-titulo"
          className="demandas__lista"
          onKeyDown={aoTeclar}
          data-revelar="2"
        >
          {demandas.itens.map((item, i) => (
            <button
              key={item.sigla}
              ref={(el) => {
                abas.current[i] = el
              }}
              type="button"
              role="tab"
              id={`demanda-aba-${i}`}
              aria-selected={i === ativa}
              aria-controls="demanda-bilhete"
              tabIndex={i === ativa ? 0 : -1}
              className="demanda"
              data-cor={item.cor}
              onClick={() => setAtiva(i)}
            >
              <span className="demanda__sigla">{item.sigla}</span>
              {/* A bolinha marca a sigla escolhida; o verde fica só para o mouse por cima */}
              <span className="bolinha demanda__marca" data-cor={item.cor} aria-hidden="true" />
              <span className="demanda__nome">{item.nome}</span>
            </button>
          ))}
        </div>

        <div className="demandas__lado" data-revelar="3">
          <div
            key={ativa}
            id="demanda-bilhete"
            role="tabpanel"
            aria-labelledby={`demanda-aba-${ativa}`}
            className="bilhete"
            data-cor={demanda.cor}
          >
            <span className="fita" data-cor={demanda.cor} aria-hidden="true" />
            <p className="bilhete__sigla mao">{demanda.sigla}</p>
            <h3 className="bilhete__titulo">{demanda.nome}</h3>
            <p className="bilhete__texto">{demanda.texto}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
