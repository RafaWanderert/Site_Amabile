// Versão 3: a cor de cada tópico chega como um fio fino, igual às linhas do banner da Amabile.
// Dois fios atravessam a divisa entre as seções: o da cor do tópico que começa (mais grosso,
// com um lacinho) e o da cor do tópico que acabou (mais fino). Eles se desenham quando a divisa aparece.

type Tema = 'jeito' | 'atendimentos' | 'demandas' | 'como' | 'respirar' | 'sobre' | 'formacao' | 'rodape'
type CorAntes = 'rosa' | 'verde' | 'amarelo' | 'azul' | 'lilas' | 'malva'

// Desenho de 1440 × 144, com a divisa em y = 58. Os fios passam das bordas (de -300 a 1740)
// para chegar até o canto em telas largas; no celular aparece o miolo, de x ≈ 400 a 1040.
const FIOS: Record<Tema, { principal: string; segundo: string; antes: CorAntes }> = {
  jeito: {
    principal:
      'M-300 40C-200 36.7 -93.3 20 0 30 93.3 40 173.3 97.3 260 100 346.7 102.7 456.7 56 520 46 583.3 36 604.9 20.7 640 40 840 150 560 150 760 40 813.3 10.7 920 90.7 1000 100 1080 109.3 1160 107.7 1240 96 1320 84.3 1396.7 37.7 1480 30 1563.3 22.3 1653.3 43.3 1740 50',
    segundo: 'M-300 100C-20 126 180 24 420 34S820 124 1040 110S1380 30 1740 62',
    antes: 'verde',
  },
  atendimentos: {
    principal:
      'M-300 70C-206.7 80 -120 106.7 -20 100 80 93.3 190 29.3 300 30 410 30.7 543.3 99 640 104 736.7 109 820 70.7 880 60 940 49.3 964.8 20.7 1000 40 1200 150 920 150 1120 40 1173.3 10.7 1280 95 1360 100 1440 105 1536.7 76.7 1600 70 1663.3 63.3 1693.3 63.3 1740 60',
    segundo: 'M-300 40C0 20 200 116 440 104S860 20 1080 34S1500 112 1740 90',
    antes: 'rosa',
  },
  demandas: {
    principal:
      'M-300 96C-213.3 100.7 -120 117.7 -40 110 40 102.3 123.3 62.3 180 50 236.7 37.7 264.9 16.7 300 36 500 146 220 146 420 36 479.5 3.3 606.7 101.3 700 112 793.3 122.7 883.3 114.3 980 100 1076.7 85.7 1186.7 35.3 1280 26 1373.3 16.7 1463.3 32.3 1540 44 1616.7 55.7 1673.3 78.7 1740 96',
    segundo: 'M-300 50C-20 20 220 112 480 100S880 30 1100 50S1480 116 1740 70',
    antes: 'verde',
  },
  como: {
    principal:
      'M-300 44C-206.7 39.3 -120 19 -20 30 80 41 193.3 99 300 110 406.7 121 520 107.7 620 96 720 84.3 830 50.3 900 40 970 29.7 1002 13.1 1040 34 1240 144 960 144 1160 34 1216.5 2.9 1323.3 102 1420 108 1516.7 114 1633.3 82.7 1740 70',
    segundo: 'M-300 100C0 124 220 30 480 40S900 118 1120 104S1500 30 1740 50',
    antes: 'amarelo',
  },
  respirar: {
    principal:
      'M-300 90C-200 97.3 -93.3 122 0 112 93.3 102 193.3 42 260 30 326.7 18 356.7 39 400 40 443.3 41 484.9 16.7 520 36 720 146 440 146 640 36 699.4 3.4 830 98 920 108 1010 118 1090 109.3 1180 96 1270 82.7 1366.7 34.7 1460 28 1553.3 21.3 1646.7 46.7 1740 56',
    segundo: 'M-300 40C-40 10 180 112 440 108S860 26 1100 40S1500 120 1740 84',
    antes: 'malva',
  },
  sobre: {
    principal:
      'M-300 30C-200 26.7 -93.3 6.3 0 20 93.3 33.7 173.3 98.7 260 112 346.7 125.3 446.7 112 520 100 593.3 88 653.3 50.7 700 40 746.7 29.3 767.9 18.3 800 36 1000 146 720 146 920 36 979.4 3.4 1110 99 1200 108 1290 117 1370 101.3 1460 90 1550 78.7 1646.7 56.7 1740 40',
    segundo: 'M-300 92C-20 124 200 30 460 36S900 120 1120 110S1460 26 1740 60',
    antes: 'azul',
  },
  formacao: {
    principal:
      'M-300 96C-226.7 100.7 -140 118.3 -80 110 -20 101.7 20 58 60 46 100 34 127.9 20.3 160 38 360 148 80 148 280 38 339.4 5.4 470 100 560 110 650 120 723.3 112.3 820 98 916.7 83.7 1040 33.7 1140 24 1240 14.3 1320 28 1420 40 1520 52 1633.3 77.3 1740 96',
    segundo: 'M-300 40C0 16 240 110 500 104S920 24 1160 36S1540 112 1740 80',
    antes: 'rosa',
  },
  // O fim do conteúdo: os fios descem do lilás para o rodapé malva
  rodape: {
    principal: 'M-300 40C-20 20 200 116 460 100S900 20 1120 40S1500 116 1740 84',
    segundo: 'M-300 92C0 120 260 24 520 36S960 112 1200 100S1560 30 1740 50',
    antes: 'rosa',
  },
}

type Props = {
  tema: Tema
  /** Na divisa de baixo da seção (o fim do conteúdo, por cima do rodapé) */
  embaixo?: boolean
}

export function Traco({ tema, embaixo = false }: Props) {
  const { principal, segundo, antes } = FIOS[tema]
  return (
    <div className={embaixo ? 'traco traco--embaixo' : 'traco'} data-antes={antes} data-revelar="" aria-hidden="true">
      <svg className="rabisco traco__desenho" viewBox="0 0 1440 144" focusable="false">
        <path className="traco__segundo" pathLength={1} d={segundo} />
        <path className="traco__principal" pathLength={1} d={principal} />
      </svg>
    </div>
  )
}
