import { useState } from 'react'
import { comoFunciona } from '../content/conteudo'
import { Caminho, DesenhoEtapa } from './Rabiscos'
import { Traco } from './Traco'
import { TituloComIcone } from './TituloComIcone'

/**
 * As etapas como tiras de papel lado a lado, do malva mais escuro ao mais claro:
 * a ordem está na cor. Clicar numa tira fechada abre a etapa.
 * No celular, as tiras viram faixas empilhadas.
 */
export function ComoFunciona() {
  const [aberta, setAberta] = useState(0)

  return (
    <section
      id="como-funciona"
      className="secao campo campo--creme como"
      aria-labelledby="como-titulo"
    >
      <Traco tema="como" />
      <div className="recipiente">
        <div className="grade como__intro">
          <h2 id="como-titulo" className="titulo como__titulo" data-revelar>
            <TituloComIcone texto={comoFunciona.titulo} icone={<Caminho className="titulo__icone" />} />
          </h2>
          <p className="como__apoio" data-revelar="2">
            {comoFunciona.apoio}
          </p>
        </div>

        <ol className="etapas" data-revelar="3">
          {comoFunciona.etapas.map((etapa, i) => {
            const aberto = i === aberta
            return (
              <li key={etapa.nome} className="etapa" data-tom={i} data-aberta={aberto}>
                <h3 className="etapa__cabeca">
                  <button
                    type="button"
                    className="etapa__botao"
                    aria-expanded={aberto}
                    aria-controls={`etapa-${i}`}
                    onClick={() => setAberta(i)}
                  >
                    <span className="etapa__nome">{etapa.nome}</span>
                  </button>
                </h3>
                <div id={`etapa-${i}`} className="etapa__corpo" hidden={!aberto}>
                  <p>{etapa.texto}</p>
                </div>
                <DesenhoEtapa indice={i} className="etapa__desenho" />
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
