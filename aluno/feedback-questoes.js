// feedback-questoes.js
const qFiltradas = JSON.parse(localStorage.getItem('questoesFiltradas')) || [];


// Calculate statistics
  let acertos = 0, erros = 0, branco = 0;
  const classificacoesErradas = [];

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
      status = `❌ Você errou essa questão. Resposta correta: ${q.alternativas[q.resposta]}`;
      classe = 'erro';
      erros++;
      classificacoesErradas.push(...q.classificacao);
    }

    const classificacaoGeral = q.classificacao[0] || 'Não especificado';
    const classificacaoEspecifica = q.classificacao.slice(1).join(' > ') || 'Não especificado';
    const textoQuestao = q.imagem ? q.texto.replace('[Imagem]', '[Imagem não exibida no feedback]') : q.texto;

    return `
      <article class="question-feedback ${classe}">
        <h3>Questão ${i + 1} (${q.banca} ${q.ano})</h3>
        <p>${textoQuestao}</p>
        <p class="status ${classe}">${status}</p>
        <p><strong>Tempo gasto:</strong> ${formatarTempo(tempoQuestao)}</p>
        <div class="classificacoes">
          <strong>Classificação Geral:</strong> ${classificacaoGeral}<br>
          <strong>Classificação Específica:</strong> ${classificacaoEspecifica}
        </div>
      </article>
    `;
  }).join('');

  document.getElementById('feedback-questoes').innerHTML = feedbackHTML;