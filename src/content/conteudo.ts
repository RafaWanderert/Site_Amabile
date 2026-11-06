// Textos do site. Os serviços, as demandas e a formação vêm das respostas da Amabile;
// as frases de apoio foram escritas a partir delas e devem ser revisadas por ela.

/** Os cinco papéis pastel da marca (cada um com a sua "bolinha", o tom do marcador) */
export type Cor = 'rosa' | 'amarelo' | 'azul' | 'lilas' | 'verde'

export const inicio = {
  titulo: 'Psicóloga e neuropsicóloga infantojuvenil',
  apoio:
    'Avaliação, terapia e acompanhamento do desenvolvimento de crianças e adolescentes, com a família e a escola por perto.',
  nota: 'cada criança no seu tempo',
}

export const jeito = {
  titulo: 'Do jeito de cada criança',
  texto:
    'Cada criança tem seu jeito de aprender, de brincar e de sentir. Meu trabalho começa por entender esse jeito e, a partir dele, construir caminhos com a família e a escola.',
}

export type Servico = { nome: string; sigla?: string; texto: string }
export type GrupoDeServicos = { nome: string; cor: Cor; itens: Servico[] }

export const atendimentos: { titulo: string; apoio: string; nota: string; grupos: GrupoDeServicos[] } = {
  titulo: 'Atendimentos',
  apoio: 'Para crianças e adolescentes, com foco no desenvolvimento, na aprendizagem e no comportamento.',
  nota: 'o brincar também é ferramenta de trabalho',
  grupos: [
    {
      nome: 'Terapia',
      cor: 'rosa',
      itens: [
        {
          nome: 'Atendimento clínico psicológico',
          sigla: 'TCC',
          texto:
            'Terapia Cognitivo-Comportamental para lidar com emoções, comportamentos e os desafios do dia a dia.',
        },
        {
          nome: 'Intervenção comportamental',
          sigla: 'ABA',
          texto: 'Baseada na Análise do Comportamento Aplicada, com metas claras e acompanhamento de cada avanço.',
        },
      ],
    },
    {
      nome: 'Avaliação e estimulação',
      cor: 'azul',
      itens: [
        {
          nome: 'Avaliação neuropsicológica',
          texto:
            'Investigação das funções cognitivas, comportamentais e emocionais, para entender como a criança pensa e aprende.',
        },
        {
          nome: 'Estimulação cognitiva e reabilitação',
          texto:
            'Atividades planejadas para fortalecer atenção, memória e outras funções, no ritmo de cada criança.',
        },
      ],
    },
    {
      nome: 'Na escola e no dia a dia',
      cor: 'amarelo',
      itens: [
        {
          nome: 'Acompanhamento Terapêutico',
          sigla: 'AT',
          texto: 'Atuação em ambientes escolares e sociais, onde a criança vive o dia a dia.',
        },
      ],
    },
  ],
}

export type Demanda = { sigla: string; nome: string; texto: string; cor: Cor }

export const demandas: { titulo: string; itens: Demanda[] } = {
  titulo: 'Quem eu acompanho',
  itens: [
    {
      sigla: 'TEA',
      nome: 'Transtorno do Espectro Autista',
      texto:
        'Intervenção pelo brincar, com estratégia naturalista e ABA, para ampliar comunicação, autonomia e interação, com metas combinadas com a família.',
      cor: 'azul',
    },
    {
      sigla: 'TDAH',
      nome: 'Transtorno de Déficit de Atenção e Hiperatividade',
      texto:
        'Avaliação da atenção e do autocontrole, e terapia com estratégias práticas de organização e rotina para casa e para a escola.',
      cor: 'rosa',
    },
    {
      sigla: 'AH/SD',
      nome: 'Altas Habilidades/Superdotação',
      texto:
        'Identificação das altas habilidades e cuidado com o desenvolvimento socioemocional, para que o potencial venha acompanhado de bem-estar.',
      cor: 'verde',
    },
    {
      sigla: 'SHSD',
      nome: 'Síndrome de Habilidades Superdotadas',
      texto: 'Acompanhamento das necessidades emocionais e sociais, em parceria com a família e a escola.',
      cor: 'lilas',
    },
  ],
}

export type Etapa = { nome: string; texto: string }

export const comoFunciona: { titulo: string; apoio: string; etapas: Etapa[] } = {
  titulo: 'Como funciona',
  apoio: 'Cada etapa é conversada com a família. O plano nasce da avaliação e muda conforme a criança avança.',
  etapas: [
    {
      nome: 'Acolhimento',
      texto:
        'Uma primeira conversa com a família para entender a história da criança, o que preocupa e o que se espera do atendimento.',
    },
    {
      nome: 'Avaliação',
      texto:
        'Observação, brincadeiras e instrumentos adequados à idade para conhecer como a criança pensa, sente e aprende.',
    },
    {
      nome: 'Devolutiva',
      texto: 'Os resultados são explicados com clareza para a família, e juntos definimos os objetivos do cuidado.',
    },
    {
      nome: 'Intervenção',
      texto: 'Sessões com objetivos claros, em que o brincar é a principal ferramenta de aprendizagem.',
    },
    {
      nome: 'Acompanhamento',
      texto: 'Orientação à família e parceria com a escola, revendo as metas ao longo do caminho.',
    },
  ],
}

export const respirar = {
  titulo: 'Vamos respirar juntos?',
  texto:
    'A respiração do balão ajuda a acalmar o corpo nos momentos de agitação. Encha o balão puxando o ar pelo nariz e esvazie soltando devagar pela boca.',
  nota: 'Essa é uma das brincadeiras que podem entrar no atendimento. Cada estratégia é escolhida para cada criança.',
}

export type Curso = { nome: string; onde?: string; cor: Cor }

export const formacao: { titulo: string; academica: Curso[]; cursos: Curso[] } = {
  titulo: 'Formação',
  academica: [
    { nome: 'Graduação em Psicologia', cor: 'rosa' },
    { nome: 'Pós-graduação em Neuropsicologia', onde: 'UNESC', cor: 'amarelo' },
    { nome: 'Pós-graduação em Desenvolvimento Infantil', onde: 'UNESC', cor: 'verde' },
  ],
  cursos: [
    {
      nome: 'Transtornos psicoemocionais na infância e adolescência',
      onde: 'Instituto Israelita de Ensino e Pesquisa Albert Einstein',
      cor: 'rosa',
    },
    {
      nome: 'Orientação Parental em Disciplina Positiva',
      onde: 'Certificação internacional · Positive Discipline Association (PDA)',
      cor: 'lilas',
    },
    { nome: 'Acompanhante Terapêutica em Estratégia Naturalista', onde: 'Instituto Singular', cor: 'azul' },
    { nome: 'Ludicidade como instrumento pedagógico', onde: 'IFRS', cor: 'rosa' },
    {
      nome: 'Estratégia naturalista e neurociência na intervenção do autismo',
      onde: 'Instituto Singular',
      cor: 'verde',
    },
    { nome: 'Altas Habilidades: identificação e desenvolvimento socioemocional', onde: 'IFRS', cor: 'amarelo' },
  ],
}

export const menu = [
  { href: '#sobre', rotulo: 'Sobre' },
  { href: '#atendimentos', rotulo: 'Atendimentos' },
  { href: '#como-funciona', rotulo: 'Como funciona' },
  { href: '#formacao', rotulo: 'Formação' },
]
