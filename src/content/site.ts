// Dados da profissional. Aparecem no site, no <head> (título, descrição, Open Graph)
// e nos dados estruturados para o Google.

export const site = {
  nome: 'Amabile Wanderert',
  primeiroNome: 'Amabile',
  /** Letras do selo redondo da marca */
  iniciais: 'aw',
  profissao: 'Psicóloga e neuropsicóloga',
  publico: 'Crianças e adolescentes',
  crp: 'CRP 12/25551',
  /** Domínio do site, sem barra no fim. Troque pelo domínio definitivo antes de publicar. */
  url: 'https://site-amabile.onrender.com',
}

/** Usado no <head> do index.html (pelo vite.config.ts) e nos dados estruturados. */
export const seo: Record<'nome' | 'titulo' | 'descricao' | 'url', string> = {
  nome: site.nome,
  titulo: `${site.nome} | Psicóloga e Neuropsicóloga Infantojuvenil`,
  descricao: `${site.nome}, psicóloga e neuropsicóloga (${site.crp}). Avaliação neuropsicológica, TCC, ABA e acompanhamento terapêutico de crianças e adolescentes.`,
  url: site.url,
}
