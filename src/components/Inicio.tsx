import { useRef } from 'react'
import { inicio } from '../content/conteudo'
import { fotos } from '../content/fotos'
import { site } from '../content/site'
import { useNaTela } from '../hooks/useNaTela'
import { Broto, Coracao, Faiscas } from './Rabiscos'

/**
 * Primeira tela, no malva-escuro: o nome à esquerda e uma foto só, à direita, recortada como as
 * fotos do banner dela (bordas macias e nítidas, sem degradê), com uma forma de cor chapada atrás,
 * zoom lento ao abrir e paralaxe leve ao rolar.
 * Os traços do banner dela (os fios, os risquinhos e o coração) se desenham ao abrir.
 */
export function Inicio() {
  const secao = useRef<HTMLElement>(null)
  useNaTela(secao)

  return (
    <section ref={secao} id="inicio" className="inicio" aria-labelledby="inicio-nome">
      {/* Dois fios finos atravessam o alto, por trás da foto, como no banner */}
      <div className="inicio__tracos" aria-hidden="true">
        <svg className="rabisco inicio__fios" viewBox="0 0 1440 160" focusable="false">
          <path
            className="inicio__fio inicio__fio--verde"
            pathLength={1}
            d="M-800 60C-700 50 -600 25 -500 30 -400 35 -303.3 86.7 -200 90 -96.7 93.3 16.7 60 120 50 223.3 40 313.3 22.3 420 30 526.7 37.7 646.7 81 760 96 873.3 111 993.3 129.3 1100 120 1206.7 110.7 1293.3 56 1400 40 1506.7 24 1640 19 1740 24 1840 29 1916.7 65.7 2000 70 2083.3 74.3 2160 56.7 2240 50"
          />
          <path
            className="inicio__fio inicio__fio--rosa"
            pathLength={1}
            d="M-800 110C-706.7 100 -616.7 93.3 -520 80 -423.3 66.7 -326.7 29 -220 30 -113.3 31 6.7 76.3 120 86 233.3 95.7 346.7 95.7 460 88 573.3 80.3 686.7 46.7 800 40 913.3 33.3 1023.3 33.3 1140 48 1256.7 62.7 1390 119.3 1500 128 1610 136.7 1676.7 111.3 1800 100 1923.3 88.7 2093.3 73.3 2240 60"
          />
        </svg>
        <Coracao className="inicio__coracao" />
      </div>
      <div className="inicio__foto">
        {/* Os recortes, em frações da caixa (servem a qualquer tamanho). A foto: ombros largos e
            macios no alto (só a parede de desenhos fica de fora) e cantos justos embaixo, para as mãos
            e o cotovelo dela continuarem inteiros. A forma de trás: uma pedrinha, como as do banner. */}
        <svg className="inicio__recortes" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="recorte-foto" clipPathUnits="objectBoundingBox">
              <path d="M.55 0C.7975 0 1 .195 1 .4333V.9267C1 .9672.9508 1 .89 1H.14C.0627 1 0 .9582 0 .9067V.5C0 .225.2475 0 .55 0Z" />
            </clipPath>
            <clipPath id="recorte-forma" clipPathUnits="objectBoundingBox">
              <path d="M.45 0C.75 0 1 .12 1 .38 1 .66.9 1 .62 1 .3 1 0 .9 0 .6 0 .28.18 0 .45 0Z" />
            </clipPath>
          </defs>
        </svg>
        <span className="inicio__forma" aria-hidden="true" />
        <Faiscas className="inicio__faiscas" />
        <div className="inicio__moldura">
          <img
            className="inicio__imagem"
            src={fotos.mesa.src}
            srcSet={fotos.mesa.srcSet}
            sizes="(max-width: 860px) 100vw, 560px"
            width={fotos.mesa.width}
            height={fotos.mesa.height}
            alt={fotos.mesa.alt}
            fetchPriority="high"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>

      <div className="recipiente grade inicio__grade">
        <div className="inicio__texto">
          <h1 id="inicio-nome" className="inicio__nome">
            <span className="inicio__linha">
              {site.primeiroNome}
              <Broto className="inicio__broto" />
            </span>{' '}
            <span className="inicio__linha">Wanderert</span>
          </h1>
          <p className="inicio__titulo">{inicio.titulo}</p>
          <p className="inicio__apoio">{inicio.apoio}</p>
          <div className="inicio__acoes">
            <a href="#atendimentos" className="botao">
              Conheça os atendimentos
            </a>
            <a href="#formacao" className="link">
              Ver formação
            </a>
          </div>
          <p className="inicio__crp">{site.crp}</p>
        </div>
      </div>
    </section>
  )
}
