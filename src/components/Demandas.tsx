import { useState } from 'react'
import { demandas } from '../content/conteudo'
import { Sol } from './Rabiscos'
import { Traco } from './Traco'
import { TituloComIcone } from './TituloComIcone'

/**
 * As demandas como um cartaz de sala. O bilhete começa fechado: aparece só quando
 * uma sigla é apertada. Apertar outra troca o bilhete; apertar a mesma fecha.
 */
export function Demandas() {
  const [ativa, setAtiva] = useState<number | null>(null)
  const demanda = ativa === null ? null : demandas.itens[ativa]

  return (
    <section id="demandas" className="secao campo campo--amarelo demandas" aria-labelledby="demandas-titulo">
      <Traco tema="demandas" />
      <div className="recipiente grade demandas__grade">
        <h2 id="demandas-titulo" className="titulo demandas__titulo" data-revelar>
          <TituloComIcone texto={demandas.titulo} icone={<Sol className="titulo__icone" />} />
        </h2>

        <ul className="demandas__lista" data-revelar="2">
          {demandas.itens.map((item, i) => (
            <li key={item.sigla}>
              <button
                type="button"
                id={`demanda-botao-${i}`}
                aria-expanded={i === ativa}
                aria-controls="demanda-bilhete"
                className="demanda"
                data-cor={item.cor}
                onClick={() => setAtiva(i === ativa ? null : i)}
              >
                <span className="demanda__sigla">{item.sigla}</span>
                {/* A bolinha marca a sigla aberta; o verde fica só para o mouse por cima */}
                <span className="bolinha demanda__marca" data-cor={item.cor} aria-hidden="true" />
                <span className="demanda__nome">{item.nome}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="demandas__lado" id="demanda-bilhete" data-revelar="3">
          {demanda ? (
            <div
              key={ativa}
              role="region"
              aria-labelledby={`demanda-botao-${ativa}`}
              className="bilhete"
              data-cor={demanda.cor}
            >
              <span className="fita" data-cor={demanda.cor} aria-hidden="true" />
              <p className="bilhete__sigla mao">{demanda.sigla}</p>
              <h3 className="bilhete__titulo">{demanda.nome}</h3>
              <p className="bilhete__texto">{demanda.texto}</p>
            </div>
          ) : (
            <p className="demandas__dica mao" aria-hidden="true">
              aperte uma sigla para ler mais
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
