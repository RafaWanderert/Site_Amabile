// Fotos da Amabile. As do WhatsApp vêm em baixa resolução (854×1280), então:
// - a versão grande de cada foto é o próprio arquivo original, sem nova compressão;
// - a do topo ganhou também uma versão 2× (1708 px), ampliada com Lanczos e nitidez só nos
//   contornos, para telas de alta densidade (celular, notebook com zoom) não esticarem a pequena;
// - a versão pequena (480 px, WebP) serve as telas comuns.
// Com os arquivos originais da fotógrafa, é só trocar estes por versões maiores.
import almofadas480 from '../assets/img/amabile-almofadas-480.webp'
import almofadas854 from '../assets/img/amabile-almofadas-854.jpg'
import estante480 from '../assets/img/amabile-estante-480.webp'
import estante1280 from '../assets/img/amabile-estante-1280.jpg'
import estudando480 from '../assets/img/amabile-estudando-480.webp'
import estudando854 from '../assets/img/amabile-estudando-854.jpg'
import mesa854 from '../assets/img/amabile-mesa-854.jpg'
import mesa1708 from '../assets/img/amabile-mesa-1708.webp'

export type Imagem = { src: string; srcSet: string; width: number; height: number; alt: string }

export const fotos = {
  /** 14.50.49: na mesa, mão no queixo, com a parede de desenhos das crianças atrás */
  mesa: {
    src: mesa854,
    srcSet: `${mesa854} 854w, ${mesa1708} 1708w`,
    width: 854,
    height: 1280,
    alt: 'Amabile Wanderert sentada à mesa do consultório, com a mão no queixo, diante de uma parede de desenhos de crianças',
  },
  /** 14.50.50 (horizontal): arrumando os bonecos e o leão de pelúcia na estante */
  estante: {
    src: estante1280,
    srcSet: `${estante480} 480w, ${estante1280} 1280w`,
    width: 1280,
    height: 854,
    alt: 'Amabile arrumando bonecos de pano e um leão de pelúcia nas prateleiras do consultório',
  },
  /** 14.50.53: no tapete de EVA, com a almofada amarela sorridente */
  almofadas: {
    src: almofadas854,
    srcSet: `${almofadas480} 480w, ${almofadas854} 854w`,
    width: 854,
    height: 1280,
    alt: 'Amabile sentada no tapete de EVA, segurando uma almofada amarela sorridente, entre almofadas com rostos de emoções',
  },
  /** 14.50.51: estudando o DSM-5-TR ao lado do notebook */
  estudando: {
    src: estudando854,
    srcSet: `${estudando480} 480w, ${estudando854} 854w`,
    width: 854,
    height: 1280,
    alt: 'Amabile estudando o DSM-5-TR à mesa, ao lado do notebook',
  },
} satisfies Record<string, Imagem>
