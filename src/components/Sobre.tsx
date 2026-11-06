import { fotos } from '../content/fotos'
import { site } from '../content/site'
import { Foto } from './Foto'
import { Broto } from './Rabiscos'
import { Traco } from './Traco'
import { TituloComIcone } from './TituloComIcone'

/** Uma frase de abertura, a história com os fatos grifados de marca-texto e a polaroide ao lado */
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
            Sou <strong>{site.nome}</strong>, psicóloga e neuropsicóloga. Entender como cada criança pensa, sente e
            aprende é o primeiro passo para cuidar dela.
          </p>
          <div className="sobre__texto" data-revelar="3">
            <p>
              Sou pós-graduada em <mark data-cor="rosa">Neuropsicologia</mark> e em{' '}
              <mark data-cor="amarelo">Desenvolvimento Infantil</mark> pela <mark data-cor="azul">UNESC</mark> e
              sigo estudando: fiz o curso de transtornos psicoemocionais na infância e na adolescência do{' '}
              <mark data-cor="verde">Albert Einstein</mark>, a certificação internacional em{' '}
              <mark data-cor="lilas">Disciplina Positiva</mark> para orientar as famílias e cursos sobre
              estratégia naturalista no autismo e altas habilidades.
            </p>
            <p>
              No consultório, a <mark data-cor="rosa">ludicidade</mark> é ferramenta de trabalho: é brincando que a
              criança mostra o que sabe, o que sente e o que ainda está aprendendo. E ninguém cresce sozinho, por
              isso família e escola fazem parte de cada etapa.
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
