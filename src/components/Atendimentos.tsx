import { atendimentos } from '../content/conteudo'
import { fotos } from '../content/fotos'
import { Foto } from './Foto'
import { Cerebro, Estrela } from './Rabiscos'
import { Traco } from './Traco'
import { TituloComIcone } from './TituloComIcone'

export function Atendimentos() {
  return (
    <section
      id="atendimentos"
      className="secao campo campo--verde atendimentos"
      aria-labelledby="atendimentos-titulo"
    >
      <Traco tema="atendimentos" />
      <div className="recipiente grade atendimentos__grade">
        {/* Folha de caderno destacada, com as bordas picotadas */}
        <div className="folha folha--picotada atendimentos__folha" data-revelar>
          <h2 id="atendimentos-titulo" className="titulo">
            <TituloComIcone texto={atendimentos.titulo} icone={<Cerebro className="titulo__icone" />} />
          </h2>
          <p className="atendimentos__apoio">{atendimentos.apoio}</p>

          {atendimentos.grupos.map((grupo) => (
            <div key={grupo.nome} className="servicos">
              <h3 className="servicos__grupo">{grupo.nome}</h3>
              <ul className="servicos__lista">
                {grupo.itens.map((servico) => (
                  <li key={servico.nome} className="servico">
                    <span className="bolinha" data-cor={grupo.cor} aria-hidden="true" />
                    <div>
                      <p className="servico__nome">
                        {servico.nome}
                        {servico.sigla && <span className="servico__sigla"> · {servico.sigla}</span>}
                      </p>
                      <p className="servico__texto">{servico.texto}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="atendimentos__lado" data-revelar="2">
          <Foto
            className="atendimentos__foto"
            imagem={fotos.estante}
            sizes="(max-width: 960px) 88vw, 460px"
            formato="paisagem"
            fita="azul"
          />
          <p className="nota-mao atendimentos__nota">{atendimentos.nota}</p>
          <Estrela className="atendimentos__estrela" />
        </div>
      </div>
    </section>
  )
}
