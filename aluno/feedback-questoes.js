const qFiltradas = JSON.parse(localStorage.getItem('questoesFiltradas')) || [];

let acertos = 0, erros = 0, branco = 0;
const classificacoesErradas = [];

function formatarTempo(segundos) {
  const h = String(Math.floor(segundos / 3600)).padStart(2, '0');
  const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
  const s = String(segundos % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

const feedbackHTML = qFiltradas.map((q, i) => {
  const respostaSalva = localStorage.getItem(`resposta_${i}`);
  const tempoQuestao = parseInt(localStorage.getItem(`tempo_questao_${i}`)) || 0;
  let status, classe;

  if (respostaSalva === null) {
    status = '❌ Você deixou essa questão em branco.';
    classe = 'branco';
    branco++;
  } else if (parseInt(respostaSalva) === q.resposta) {
    status = '✅ Sua resposta está correta!';
    classe = 'acerto';
    acertos++;
  } else {
    status = `❌ Você errou essa questão.`;
    classe = 'erro';
    erros++;
    classificacoesErradas.push(...q.classificacao);
  }

  const classificacaoGeral = q.classificacao[0] || 'Não especificado';
  const classificacaoEspecifica = q.classificacao.slice(1).join(' > ') || 'Não especificado';
  const textoQuestao = q.imagem ? q.texto.replace('[imagem]', '[Imagem não exibida no feedback]') : q.texto;

  const respostaCorreta = q.alternativas[q.resposta];
  const respostaUsuario = respostaSalva !== null ? q.alternativas[respostaSalva] : 'Sem resposta';

  return `
    <article class="question-feedback ${classe}">
      <h3>Questão ${i + 1} (${q.banca} ${q.ano})</h3>
      <p>${textoQuestao}</p>
      <p class="status ${classe}">${status}</p>
      <p><strong>Sua resposta:</strong> ${respostaUsuario}</p>
      <p><strong>Resposta correta:</strong> ${respostaCorreta}</p>
      <p><strong>Tempo gasto:</strong> ${formatarTempo(tempoQuestao)}</p>
      <div class="classificacoes">
        <strong>Classificação Geral:</strong> ${classificacaoGeral}<br>
        <strong>Classificação Específica:</strong> ${classificacaoEspecifica}
      </div>
    </article>
  `;
}).join('');


function preencherOpcoesClassificacao() {
  const select = document.getElementById('filtro-classificacao');
  
  // Pega as questões filtradas ou salvas no localStorage
  const questoes = JSON.parse(localStorage.getItem('questoesFiltradas')) || [];

  const todasClassificacoes = new Set();

  // Pega todas as classificações
  questoes.forEach(q => {
    q.classificacao.forEach(classe => todasClassificacoes.add(classe));
  });

  // Limpa as opções atuais (se quiser manter as fixas, comente esta linha)
  select.innerHTML = '';

  // (Opcional) adiciona as fixas
  const opcoesFixas = ['Geral', 'Específica', 'Ambas'];
  opcoesFixas.forEach(opcao => {
    const opt = document.createElement('option');
    opt.value = opcao.toLowerCase();
    opt.textContent = opcao;
    select.appendChild(opt);
  });

  // Adiciona as classificações únicas
  todasClassificacoes.forEach(classe => {
    const opt = document.createElement('option');
    opt.value = classe;
    opt.textContent = classe;
    select.appendChild(opt);
  });
}

function filtrarQuestoesPorClassificacao() {
  const filtro = document.getElementById('filtro-classificacao').value;

  const questoes = document.querySelectorAll('.question-feedback');

  questoes.forEach(questao => {
    const classificacoes = questao.querySelector('.classificacoes').innerText;

    if (filtro === 'geral') {
      // Mostra se a classificação geral está no texto
      if (classificacoes.includes('Classificação Geral: ')) {
        questao.style.display = 'block';
      } else {
        questao.style.display = 'none';
      }
    } else if (filtro === 'especifica') {
      if (classificacoes.includes('Classificação Específica: ')) {
        questao.style.display = 'block';
      } else {
        questao.style.display = 'none';
      }
    } else if (filtro === 'ambas') {
      // Mostra todas
      questao.style.display = 'block';
    } else {
      // É uma classificação específica selecionada pelo usuário
      if (classificacoes.includes(filtro)) {
        questao.style.display = 'block';
      } else {
        questao.style.display = 'none';
      }
    }
  });
}


document.getElementById('feedback-questoes').innerHTML = feedbackHTML;

document.getElementById('filtro-classificacao').addEventListener('change', filtrarQuestoesPorClassificacao);

filtrarQuestoesPorClassificacao();


preencherOpcoesClassificacao();

