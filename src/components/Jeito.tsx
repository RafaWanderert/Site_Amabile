import { useRef } from 'react'
import { jeito } from '../content/conteudo'
import { useNaTela } from '../hooks/useNaTela'
import { Coracao, Pipa } from './Rabiscos'
import { Traco } from './Traco'
import { TituloComIcone } from './TituloComIcone'

export function Jeito() {
  const lado = useRef<HTMLDivElement>(null)
  useNaTela(lado)

  return (
    <section id="jeito" className="secao campo campo--rosa jeito" aria-labelledby="jeito-titulo">
      <Traco tema="jeito" />
      <div className="recipiente grade jeito__grade">
        <div className="jeito__bloco">
          <h2 id="jeito-titulo" className="titulo" data-revelar>
            <TituloComIcone texto={jeito.titulo} icone={<Coracao className="titulo__icone" />} />
          </h2>
          <p className="jeito__texto" data-revelar="2">
            {jeito.texto}
          </p>
        </div>
        <div ref={lado} className="jeito__lado" data-revelar="3">
          <Pipa className="jeito__desenho" />
        </div>
      </div>
    </section>
  )
}
