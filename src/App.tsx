import { Atendimentos } from './components/Atendimentos'
import { Cabecalho } from './components/Cabecalho'
import { ComoFunciona } from './components/ComoFunciona'
import { DadosEstruturados } from './components/DadosEstruturados'
import { Demandas } from './components/Demandas'
import { Formacao } from './components/Formacao'
import { Inicio } from './components/Inicio'
import { Jeito } from './components/Jeito'
import { Respirar } from './components/Respirar'
import { Rodape } from './components/Rodape'
import { Sobre } from './components/Sobre'
import { useRevelar } from './hooks/useRevelar'

export default function App() {
  useRevelar()

  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo">
        <Inicio />
        <Jeito />
        <Atendimentos />
        <Demandas />
        <ComoFunciona />
        <Respirar />
        <Sobre />
        <Formacao />
        {/* Marca o fim do conteúdo: quando aparece, o rodapé está à vista (veja Desfile) */}
        <div id="fim-do-conteudo" aria-hidden="true" />
      </main>
      <Rodape />
      <DadosEstruturados />
    </>
  )
}
