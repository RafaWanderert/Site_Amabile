import type { Cor } from '../content/conteudo'
import { fotos } from '../content/fotos'
import { Foto } from './Foto'
import { Broto } from './Rabiscos'
import { Traco } from './Traco'
import { TituloComIcone } from './TituloComIcone'

/** Sigla grifada que não se parte no fim da linha (AH/SD quebraria na barra) */
function Sigla({ cor, children }: { cor: Cor; children: string }) {
  return (
    <mark data-cor={cor} className="sobre__sigla">
      {children}
    </mark>
  )
}

/**
 * O texto é da própria Amabile (enviado por ela em 06/11/2026) e está palavra por palavra: não reescreva.
 * O primeiro parágrafo dela é a abertura. Os grifos de marca-texto só destacam os fatos, nas cores que
 * esses itens têm no resto do site (Formação, Atendimentos e Quem eu acompanho). A polaroide fica ao lado.
 * O &nbsp; entre as duas últimas palavras de cada parágrafo evita uma palavra sozinha na última linha
 * (o text-wrap: pretty do Chrome não dá conta disso aqui).
 */
export function Sobre() {
  return (
    <section id="sobre" className="secao campo campo--creme sobre" aria-labelledby="sobre-titulo">
      <Traco tema="sobre" />
      <div className="recipiente grade sobre__grade">
        <div className="sobre__corpo">
          <h2 id="sobre-titulo" className="titulo" data-revelar>
            <TituloComIcone texto="Sobre mim" icone={<Broto className="titulo__icone" />} />
          </h2>
          <p className="sobre__abertura" data-revelar="2">
            Sou psicóloga, pós-graduada em <mark data-cor="amarelo">Neuropsicologia</mark> e{' '}
            <mark data-cor="verde">Desenvolvimento Infantil</mark>, com atuação voltada à compreensão do
            desenvolvimento humano, dos processos cognitivos, emocionais e&nbsp;comportamentais.
          </p>
          <div className="sobre__texto" data-revelar="3">
            <p>
              Minha prática profissional é pautada em uma abordagem individualizada, ética e acolhedora,
              considerando a singularidade de cada pessoa e suas diferentes formas de aprender, sentir, pensar e
              se&nbsp;relacionar.
            </p>
            <p>
              Atuo na área clínica, com atendimentos em Terapia Cognitivo-Comportamental (<Sigla cor="rosa">TCC</Sigla>),
              acompanhamento de demandas relacionadas ao Transtorno do Espectro Autista (<Sigla cor="azul">TEA</Sigla>),
              Transtorno do Déficit de Atenção e Hiperatividade (<Sigla cor="rosa">TDAH</Sigla>) e Altas
              Habilidades/Superdotação (<Sigla cor="verde">AH/SD</Sigla>), além da realização de{' '}
              <mark data-cor="azul">avaliações&nbsp;neuropsicológicas</mark>.
            </p>
            <p>
              Também possuo experiência no <mark data-cor="amarelo">acompanhamento terapêutico infantil</mark> em
              contexto escolar, o que amplia meu olhar sobre o desenvolvimento, a aprendizagem e os desafios
              vivenciados pelas crianças em diferentes&nbsp;ambientes.
            </p>
            <p>
              Acredito que cada indivíduo possui uma trajetória única e que compreender suas particularidades é um
              passo fundamental para promover autonomia, desenvolvimento e qualidade de&nbsp;vida.
            </p>
            <p>
              Meu compromisso é oferecer um espaço de escuta, acolhimento e cuidado, respeitando a individualidade
              de cada pessoa e construindo, em conjunto, caminhos possíveis para seu&nbsp;desenvolvimento.
            </p>
            <p className="sobre__fim">
              <a href="#formacao" className="sobre__link">
                Veja toda a formação
              </a>
            </p>
          </div>
        </div>

        <div className="sobre__lado" data-revelar="2">
          <Foto
            className="sobre__foto"
            imagem={fotos.almofadas}
            sizes="(max-width: 960px) 80vw, 340px"
            fita="amarelo"
          />
        </div>
      </div>
    </section>
  )
}
