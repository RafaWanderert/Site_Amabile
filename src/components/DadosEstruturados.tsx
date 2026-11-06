import { formacao } from '../content/conteudo'
import { seo, site } from '../content/site'

// Dados estruturados (schema.org) para o Google entender quem é a profissional.
const dados = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.nome,
  jobTitle: site.profissao,
  description: seo.descricao,
  url: `${site.url}/`,
  knowsAbout: [
    'Avaliação neuropsicológica',
    'Terapia Cognitivo-Comportamental',
    'Análise do Comportamento Aplicada (ABA)',
    'Acompanhamento Terapêutico',
    'Transtorno do Espectro Autista',
    'TDAH',
    'Altas Habilidades/Superdotação',
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'UNESC' },
  hasCredential: formacao.academica.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: c.nome,
  })),
}

export function DadosEstruturados() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, '\\u003c') }}
    />
  )
}
