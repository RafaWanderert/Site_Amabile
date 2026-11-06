import { useEffect, useRef, useState } from 'react'
import { menu } from '../content/conteudo'
import { Marca } from './Marca'

export function Cabecalho() {
  const [aberto, setAberto] = useState(false)
  const cabecalho = useRef<HTMLElement>(null)
  const botao = useRef<HTMLButtonElement>(null)
  const fechar = () => setAberto(false)

  // Com o painel aberto: Esc fecha (e devolve o foco ao botão), tocar fora fecha,
  // e alargar a tela até o menu completo também fecha.
  useEffect(() => {
    if (!aberto) return
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setAberto(false)
      botao.current?.focus()
    }
    const aoTocarFora = (e: PointerEvent) => {
      if (!cabecalho.current?.contains(e.target as Node)) setAberto(false)
    }
    const largo = window.matchMedia('(width > 860px)')
    const aoAlargar = () => {
      if (largo.matches) setAberto(false)
    }
    document.addEventListener('keydown', aoTeclar)
    document.addEventListener('pointerdown', aoTocarFora)
    largo.addEventListener('change', aoAlargar)
    return () => {
      document.removeEventListener('keydown', aoTeclar)
      document.removeEventListener('pointerdown', aoTocarFora)
      largo.removeEventListener('change', aoAlargar)
    }
  }, [aberto])

  return (
    <header ref={cabecalho} className="cabecalho">
      <div className="recipiente cabecalho__linha">
        <Marca />

        <nav aria-label="Principal" className="menu">
          <ul>
            {menu.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={botao}
          type="button"
          className="hamburguer"
          aria-expanded={aberto}
          aria-controls="menu-movel"
          onClick={() => setAberto((a) => !a)}
        >
          <span className="hamburguer__tracos" aria-hidden="true" />
          {aberto ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {/* Até 860px: os mesmos links num painel aberto pelo botão acima */}
      <nav id="menu-movel" aria-label="Principal" className="menu-movel" data-aberto={aberto}>
        <ul className="recipiente">
          {menu.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={fechar}>
                {l.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
