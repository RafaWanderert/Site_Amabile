import { site } from '../content/site'

export function Marca() {
  return (
    <a href="#inicio" className="marca" aria-label={`${site.nome}, início`}>
      <span className="marca__selo" aria-hidden="true">
        {site.iniciais}
      </span>
      <span className="marca__nome">{site.nome}</span>
    </a>
  )
}
