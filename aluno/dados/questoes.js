const questoes = [
  {
    id: 46,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Fácil",
    texto: "O valor de log(1 - 1/2) + log(1 - 1/3) + ... + log(1 - 1/1000) é",
    alternativas: ["-3", "-2", "-1", "0", "1"],
    resposta: 0,
    classificacao: [
      "Logaritmo e Exponencial",
      "Funções logarítmicas",
      "Propriedades das funções logarítmicas",
      "Progressões",
      "Sequências numéricas",
      "Termo geral e recorrência"
    ]
  },
  {
    id: 47,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Fácil",
    texto: "Considere as seguintes afirmações sobre números reais. I. √(a² + b²) = a + b. II. √(a²) = a. III. Se 0 < b < a, então √(ab) ≤ (a + b)/2. Quais estão corretas?",
    alternativas: ["Apenas I", "Apenas III", "Apenas I e II", "Apenas II e III", "I, II e III"],
    resposta: 1,
    classificacao: [
      "Conjuntos Numéricos",
      "Números reais",
      "Operações e propriedades",
      "Simplificação de expressões numéricas e algébricas",
      "Ordem, valor absoluto e desigualdades"
    ]
  },
  {
    id: 48,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Fácil",
    texto: "Se a e b são as raízes da equação x² - 6x + 3 = 0, então o valor de (1/(1/a + 1/b))⁻² é",
    alternativas: ["2", "4", "6", "8", "10"],
    resposta: 1,
    classificacao: [
      "Conjuntos Numéricos",
      "Números racionais",
      "Operações com frações",
      "Variáveis e funções",
      "Função quadrática",
      "Resolução da equação do segundo grau"
    ]
  },
  {
    id: 49,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Médio",
    texto: "Se log₂ x + (log₂ x)² = 12, então o valor de x é",
    alternativas: ["8 ou 1/16", "1/8 ou 16", "-4 ou 3", "4 ou -3", "2¹²"],
    resposta: 0,
    classificacao: [
      "Logaritmo e exponencial",
      "Equações exponenciais e logarítmicas",
      "Variáveis e funções",
      "Função quadrática",
      "Resolução da equação do segundo grau"
    ]
  },
  {
    id: 50,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Fácil",
    texto: "Considere o padrão de construção que fez uso de discos, conforme as figuras representadas nas etapas 1, 2 e 3.\n\n[imagem]\n\nNa etapa 200, serão usados n discos. Seguindo esse padrão de construção, n é igual a",
    alternativas: ["783", "792", "801", "810", "819"],
    resposta: 2,
    imagem: "dados/img-dados/q50-UFRGS-2022.png",
    classificacao: ["Progressões", "Progressões aritméticas", "Termo geral"]
  },
  {
    id: 51,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Fácil",
    texto: "Se α é um arco do primeiro quadrante tal que sen(α) = 3/5, então sen(2α) é igual a",
    alternativas: ["3/5", "4/5", "6/5", "24/25", "25/24"],
    resposta: 3,
    classificacao: [
      "Trigonometria",
      "Relações fundamentais",
      "Identidades trigonométricas simples",
      "Fórmulas da adição e subtração de arcos"
    ]
  },
  {
    id: 52,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Fácil",
    texto: "Na figura, há três quadrados de lados 9, 6 e x justapostos; os vértices A, B, C e D são colineares; os vértices A, E, F, G e H são colineares.\n\n[imagem]\n\nA soma das áreas dos três quadrados é",
    alternativas: ["38", "76", "126", "133", "136"],
    resposta: 3,
    imagem: "dados/img-dados/q52-UFRGS-2022.png",
    classificacao: [
      "Geometria Plana",
      "Figuras planas",
      "Relações de congruência e semelhança",
      "Áreas e perímetros",
      "Área do quadrado"
    ]
  },
  {
    id: 53,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Médio",
    texto: "Na figura, ABCD é um quadrado de lado a e AB e BD são arcos de circunferência.\n\n[imagem]\n\nA área da região sombreada é",
    alternativas: ["(a²/16)(π - 1)", "(a²/16)(π - 2)", "(a²/8)(π - 1)", "(a²/4)(π - 2)", "(a²/8)(π - 2)"],
    resposta: 4,
    imagem: "dados/img-dados/q53-UFRGS-2022.png",
    classificacao: [
      "Geometria Plana",
      "Áreas e perímetros",
      "Área do triângulo",
      "Área do círculo e de partes do círculo",
      "Relações métricas",
      "Inscrição e circunscrição de polígonos"
    ]
  },
  {
    id: 54,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Médio",
    texto: "Considere um octaedro regular cujos vértices são os pontos médios das arestas de um tetraedro regular de aresta 2.\n\n[imagem]\n\nO volume do octaedro é",
    alternativas: ["1/4", "1/2", "√2/3", "√2/2", "√2"],
    resposta: 2,
    imagem: "dados/img-dados/q54-UFRGS-2022.png",
    classificacao: ["Geometria Espacial", "Áreas de superfícies e volumes", "Volume do tetraedro"]
  },
  {
    id: 55,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Fácil",
    texto: "Considere um triângulo equilátero ABC de lado 1.\n\n[imagem]\n\n O volume do sólido obtido ao girar o triângulo ABC em torno da reta r que passa pelo vértice A e é paralela ao lado BC, mantendo o paralelismo da reta r com o lado BC do triângulo, é",
    alternativas: ["2π", "3π/2", "π/4", "π/3", "π/2"],
    resposta: 4,
    imagem: "dados/img-dados/q55-UFRGS-2022.png",
    classificacao: [
      "Geometria Espacial",
      "Áreas de superfícies e volumes",
      "Volume do cone e do cilindro",
      "Superfícies e sólidos de revolução"
    ]
  },
  {
    id: 56,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Fácil",
    texto: "Considere o retângulo ABCD de lados AB = 4 e AD = 2 e o ponto médio M de AB. Traçando a reta mediatriz do lado AB, determina-se o segmento MN, com N na interseção da mediatriz com DC. Considere um ponto P construído sobre o segmento MN, e os segmentos PD e PC, como mostra a figura abaixo. \n\n[imagem]\n\n Tomando x como a medida do segmento PN, considere S(x) a função que expressa a soma das medidas dos segmentos PM, PD e PC em função de x. Para 0 ≤ x ≤ 2, S(x) é",
    alternativas: ["x + 2√(x² + 4)", "(2 - x) + 2(x² + 4)", "(2 - x) + √(x² + 4)", "x + √(x² + 4)", "(2 - x) + 2√(x² + 4)"],
    resposta: 4,
    imagem: "dados/img-dados/q56-UFRGS-2022.png",
    classificacao: ["Geometria Plana", "Relações métricas", "Relações métricas no triângulo retângulo"]
  },
  {
    id: 57,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Difícil",
    texto: "A área da região compreendida entre os gráficos das funções f(x) e g(x), definidas por f(x) = |x - 2| + 1 e g(x) = -|x| + 5, é",
    alternativas: ["4", "6", "10", "15", "20"],
    resposta: 1,
    classificacao: [
      "Geometria Analítica",
      "Pontos",
      "Distância entre dois pontos",
      "Retas",
      "Interseção de retas",
      "Paralelismo e perpendicularismo em retas",
      "Conjuntos numéricos",
      "Números reais",
      "Ordem, valor absoluto e desigualdades"
    ]
  },
  {
    id: 58,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Fácil",
    texto: "O gráfico representa o número de casos confirmados de COVID-19 de homens e mulheres no Rio Grande do Sul, até novembro de 2021, por faixa etária.\n\n[imagem]\n\nCom base nos dados representados no gráfico, considere as seguintes afirmações. I - Na faixa etária de 20 a 29 anos, o número de casos confirmados de mulheres é cerca de 30% maior que o número de casos confirmados de homens. II - Na faixa etária de 30 a 39 anos, o número de casos confirmados de mulheres corresponde a menos de 100% do número de casos confirmados de mulheres na faixa etária de 60 a 69 anos. III - Em termos percentuais, na faixa etária acima de 80 anos, o número de casos confirmados de mulheres é maior que o número de casos confirmados de homens, se comparado com a faixa etária de 70 a 79 anos. Quais estão corretas?",
    alternativas: ["Apenas I", "Apenas II", "Apenas III", "Apenas I e III", "I, II e III"],
    resposta: 2,
    imagem: "dados/img-dados/q58-UFRGS-2022.png",
    classificacao: ["Variáveis e funções", "Construção e interpretação de gráficos, tabelas e diagramas"]
  },
  {
    id: 59,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Fácil",
    texto: "A tabela mostra o tempo de uso diário de um dispositivo eletrônico por um aluno, durante cinco dias da semana com aulas a distância, em 2021.\n\n[imagem]\n\n  Nessas condições, o tempo médio diário de uso do dispositivo eletrônico por esse aluno é",
    alternativas: ["Superior a três horas", "Superior a quatro horas", "Superior a cinco horas", "Inferior a duas horas", "Inferior a três horas"],
    resposta: 0,
    imagem: "dados/img-dados/q59-UFRGS-2022.png",
    classificacao: ["Análise combinatória, probabilidade e estatística", "Medidas de tendência central"]
  },
  {
    id: 60,
    ano: 2022,
    banca: "UFRGS",
    disciplina: "Matemática",
    nivel: "Médio",
    texto: "Antônia e Francisca fazem parte de um grupo de dez médicas que atuam no cuidado de pacientes com COVID-19, em um hospital de Porto Alegre. Um outro hospital no Rio Grande do Sul está convidando um quarteto de médicas do grupo, do qual Antônia e Francisca fazem parte, para organizar um evento científico sobre a COVID-19. A probabilidade de Antônia e Francisca fazerem parte desse quarteto convidado é",
    alternativas: ["1/5", "2/5", "3/14", "2/15", "1/35"],
    resposta: 3,
    classificacao: ["Análise combinatória, probabilidade e estatística", "Permutações, arranjos e combinações simples"]
  }
];