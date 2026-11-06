import { useEffect, type RefObject } from 'react'

/**
 * Marca data-na-tela="true|false" no elemento, para as animações contínuas (a forma atrás da foto do topo, pipa,
 * desfile de brinquedos, balão) só rodarem enquanto aparecem. Fora da tela, nada fica animando à toa.
 * `observar` (opcional) é o seletor de outro elemento que decide se está na tela; o rodapé usa
 * o fim do conteúdo, porque, grudado no pé da tela por baixo da página, ele está sempre "dentro" dela.
 */
export function useNaTela(ref: RefObject<HTMLElement | SVGElement | null>, observar?: string) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const alvo = observar ? document.querySelector(observar) : el
    if (!alvo || !('IntersectionObserver' in window)) {
      el.dataset.naTela = 'true'
      return
    }
    const observador = new IntersectionObserver(([entrada]) => {
      el.dataset.naTela = String(entrada.isIntersecting)
    })
    observador.observe(alvo)
    return () => observador.disconnect()
  }, [ref, observar])
}
