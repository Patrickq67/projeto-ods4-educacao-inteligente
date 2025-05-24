// Ao carregar a página, limpa os filtros para garantir que tudo comece do zero
window.addEventListener('DOMContentLoaded', limpaFiltro);

// Lista de questões (assuma que a variável questoes já foi definida anteriormente)
const questoesFit = questoes;

// Variáveis globais
let questoesComFiltro = [];

// Função para aplicar os filtros
function aplicarFiltros() {
  const palavraChave = document.querySelector('#palavraChave').value.trim().toLowerCase();
  const ano = document.querySelector('#filtroAno').value;
  const banca = document.querySelector('#filtroBanca').value;
  const disciplina = document.querySelector('#filtroDisciplina').value;
  const nivel = document.querySelector('#filtroNivel').value;

  questoesComFiltro = questoesFit.filter(questao => {
    const texto = questao.texto.toLowerCase();
    const classificacoes = questao.classificacao?.join(' ').toLowerCase() || '';
    
    return (
      (ano === '' || questao.ano.toString() === ano) &&
      (banca === '' || questao.banca === banca) &&
      (disciplina === '' || questao.disciplina === disciplina) &&
      (nivel === '' || questao.nivel === nivel) &&
      (palavraChave === '' || texto.includes(palavraChave) || classificacoes.includes(palavraChave))
    );
  });

  return questoesComFiltro;
}

// Exibe os filtros aplicados como chips
function renderizarFiltrosAplicados(filtros) {
  const container = document.getElementById('filtrosAplicadosContainer');
  container.innerHTML = '';

  const nomesFiltros = {
    palavraChave: 'Palavra-chave',
    ano: 'Ano',
    banca: 'Banca',
    disciplina: 'Disciplina',
    nivel: 'Dificuldade'
  };

  Object.keys(filtros).forEach(chave => {
    const valor = filtros[chave];
    if (valor && valor !== '') {
      const filtroTag = document.createElement('span');
      filtroTag.className = 'filtro-tag';
      filtroTag.innerHTML = `
        <strong>${nomesFiltros[chave]}:</strong> ${valor}
        <button onclick="removerFiltro('${chave}')">×</button>
      `;
      container.appendChild(filtroTag);
    }
  });
}

// Remove filtro individual e reexecuta a renderização
function removerFiltro(chave) {
  const campo = document.querySelector(`#filtro${capitalize(chave)}`) || document.querySelector(`#${chave}`);
  if (campo) campo.value = '';
  filtrarERenderizar();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filtrarERenderizar() {
  const palavraChave = document.querySelector('#palavraChave').value.trim();
  const ano = document.querySelector('#filtroAno').value;
  const banca = document.querySelector('#filtroBanca').value;
  const disciplina = document.querySelector('#filtroDisciplina').value;
  const nivel = document.querySelector('#filtroNivel').value;

  const filtrosAplicados = {
    palavraChave,
    ano,
    banca,
    disciplina,
    nivel
  };

  aplicarFiltros();
  renderizarFiltrosAplicados(filtrosAplicados);

  // Exibir mensagem se nenhuma questão for encontrada
  const mensagemEl = document.getElementById('mensagem-sem-questoes');
  if (questoesComFiltro.length === 0) {
    mensagemEl.textContent = '⚠️ Nenhuma questão encontrada com os filtros aplicados.';
  } else {
    mensagemEl.textContent = '';
    // exibirQuestoes(questoesComFiltro); // Se tiver essa função implementada
  }

  localStorage.setItem('questoesComFiltro', JSON.stringify(questoesComFiltro));
  localStorage.setItem('filtrosAplicados', JSON.stringify(filtrosAplicados));
}


// Carrega filtros salvos (opcional)
function carregarFiltrosSalvos() {
  const filtros = JSON.parse(localStorage.getItem('filtrosAplicados'));
  if (!filtros) return;

  document.querySelector('#palavraChave').value = filtros.palavraChave || '';
  document.querySelector('#filtroAno').value = filtros.ano || '';
  document.querySelector('#filtroBanca').value = filtros.banca || '';
  document.querySelector('#filtroDisciplina').value = filtros.disciplina || '';
  document.querySelector('#filtroNivel').value = filtros.nivel || '';

  aplicarFiltros();
  renderizarFiltrosAplicados(filtros);
}

function limpaFiltro() {
  const palavraChave = document.querySelector('#palavraChave');
  const filtroAno = document.querySelector('#filtroAno');
  const filtroBanca = document.querySelector('#filtroBanca');
  const filtroDisciplina = document.querySelector('#filtroDisciplina');
  const filtroNivel = document.querySelector('#filtroNivel');

  if (palavraChave) palavraChave.value = '';
  if (filtroAno) filtroAno.value = '';
  if (filtroBanca) filtroBanca.value = '';
  if (filtroDisciplina) filtroDisciplina.value = '';
  if (filtroNivel) filtroNivel.value = '';

  localStorage.removeItem('filtrosAplicados');
  localStorage.removeItem('questoesComFiltro');

  filtrarERenderizar();
}




// Ao carregar a página, limpa os filtros para garantir que tudo comece do zero
window.addEventListener('DOMContentLoaded', limpaFiltro);

window.addEventListener('DOMContentLoaded', () => {
  const filtros = JSON.parse(localStorage.getItem('filtrosAplicados'));
  if (filtros) {
    carregarFiltrosSalvos();
  } else {
    limpaFiltro();
  }
});

