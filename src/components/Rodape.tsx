import { menu } from '../content/conteudo'
import { site } from '../content/site'
import { Desfile } from './Desfile'

/** Fecho da página, por baixo da última seção: as colunas e os brinquedos passando */
export function Rodape() {
  const ano = 2026
  return (
    <footer className="rodape">
      <div className="recipiente rodape__dentro">
        <div className="grade rodape__colunas">
          <div className="rodape__coluna">
            <p className="rodape__rotulo">Navegação</p>
            <ul>
              {menu.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.rotulo}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rodape__coluna">
            <p className="rodape__rotulo">Atendimento</p>
            <p>Crianças e adolescentes</p>
            <p>Psicologia e neuropsicologia</p>
          </div>
          <div className="rodape__coluna">
            <p className="rodape__rotulo">Registro</p>
            <p>{site.crp}</p>
          </div>
          <div className="rodape__coluna">
            <p className="rodape__rotulo">Contato</p>
            <p>Em breve, um canal de contato profissional.</p>
          </div>
        </div>
      </div>

      <Desfile />

      <div className="recipiente">
        <p className="rodape__legal">
          © {ano} {site.nome} · {site.profissao} · {site.crp}
        </p>
      </div>
    </footer>
  )
}
