import { formacao, type Curso } from '../content/conteudo'
import { fotos } from '../content/fotos'
import { Foto } from './Foto'
import { Broto, Coracao, Livro } from './Rabiscos'
import { Traco } from './Traco'
import { TituloComIcone } from './TituloComIcone'

function Lista({ itens }: { itens: Curso[] }) {
  return (
    <ul className="lista-bolinhas">
      {itens.map((c) => (
        <li key={c.nome}>
          <span className="bolinha" data-cor={c.cor} aria-hidden="true" />
          <span>
            <span className="lista-bolinhas__nome">{c.nome}</span>
            {c.onde && <span className="lista-bolinhas__onde">{c.onde}</span>}
          </span>
        </li>
      ))}
    </ul>
  )
}

/** O mural lilás: duas folhas presas por fita, como na arte da própria Amabile, e uma polaroide */
export function Formacao() {
  return (
    <section id="formacao" className="secao campo campo--lilas formacao" aria-labelledby="formacao-titulo">
      <Traco tema="formacao" />
      <div className="recipiente">
        <h2 id="formacao-titulo" className="titulo" data-revelar>
          <TituloComIcone texto={formacao.titulo} icone={<Livro className="titulo__icone" />} />
        </h2>
        <div className="grade formacao__grade">
          <div className="formacao__esquerda">
            <div className="folha formacao__folha formacao__folha--academica" data-revelar="2">
              <span className="fita" data-cor="rosa" aria-hidden="true" />
              <h3 className="formacao__grupo">Formação acadêmica</h3>
              <Lista itens={formacao.academica} />
              <Broto className="formacao__broto" />
            </div>
            <div className="formacao__polaroide" data-revelar="3">
              <Foto
                className="formacao__foto"
                imagem={fotos.estudando}
                sizes="(max-width: 960px) 80vw, 320px"
                fita="verde"
              />
            </div>
          </div>
          <div className="folha formacao__folha formacao__folha--cursos" data-revelar="3">
            <span className="fita" data-cor="amarelo" aria-hidden="true" />
            <h3 className="formacao__grupo">Cursos complementares</h3>
            <Lista itens={formacao.cursos} />
            <Coracao className="formacao__coracao" />
          </div>
        </div>
      </div>
      <Traco tema="rodape" embaixo />
    </section>
  )
}
