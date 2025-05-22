
//const filtrosSalvos = JSON.parse(localStorage.getItem('filtrosAplicados')) || {};


const questoesFiltradas = JSON.parse(localStorage.getItem('questoesComFiltro')) || [];

// ---------------------------------- Filtragem ----------------------------------------


// ---------------------------------- Pagina de Questões ----------------------------------------

let questaoAtual = 0;
let intervaloTempoGlobal;
let intervaloTempoQuestao;
let tempoTotal = parseInt(localStorage.getItem("tempo_total")) || 0;
let tempoQuestaoAtual = 0;
const respondidas = new Set();

function formatarTempo(segundos) {
  const h = String(Math.floor(segundos / 3600)).padStart(2, '0');
  const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
  const s = String(segundos % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function iniciarTemporizadorGlobal() {
  const tempoBox = document.querySelector(".tempo-box");
  tempoBox.innerText = `⏱️ Tempo ${formatarTempo(tempoTotal)}`;

  intervaloTempoGlobal = setInterval(() => {
    tempoTotal++;
    localStorage.setItem("tempo_total", tempoTotal);
    tempoBox.innerText = `⏱️ Tempo ${formatarTempo(tempoTotal)}`;
  }, 1000);
}

function carregarQuestao() {
  clearInterval(intervaloTempoQuestao);
  tempoQuestaoAtual = parseInt(localStorage.getItem(`tempo_questao_${questaoAtual}`)) || 0;

  const q = questoesFiltradas[questaoAtual];

  // Breadcrumb
  document.getElementById('breadcrumb').innerText = `Questão ${q.id} | ${q.disciplina} > ${q.banca} ${q.ano}`;

  // Texto da questão
  const perguntaEl = document.getElementById('pergunta');
  let textoQuestao = q.texto.replace(/\n/g, "<br>");

  // Imagem
  if (q.imagem) {
    const imgTag = `<img src="${q.imagem}" alt="Imagem da questão" class="questao-img">`;
    textoQuestao = textoQuestao.replace('[imagem]', imgTag);
  }

perguntaEl.innerHTML = textoQuestao;


  // Temas
  const temas = document.createElement("div");
  temas.className = "temas";
  temas.innerHTML = `<strong>Temas:</strong> ${q.classificacao.join(" > ")}`;
  perguntaEl.appendChild(document.createElement("br"));
  perguntaEl.appendChild(temas);

  // Alternativas
  const altContainer = document.getElementById('alternativas');
  altContainer.innerHTML = '';
  q.alternativas.forEach((alt, i) => {
    const letra = String.fromCharCode(65 + i);
    const id = `alt-${i}`;

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerHTML = `<input type="radio" name="opcao" id="${id}" value="${i}"> ${letra}) ${alt}`;
    label.addEventListener('click', () => {
      document.querySelectorAll('.options label').forEach(l => l.classList.remove('selected'));
      label.classList.add('selected');
    });

    altContainer.appendChild(label);
  });

  // Restaurar resposta
  const respostaSalva = localStorage.getItem(`resposta_${questaoAtual}`);
  if (respostaSalva !== null) {
    const radio = document.querySelector(`input[name="opcao"][value="${respostaSalva}"]`);
    if (radio) {
      radio.checked = true;
      radio.parentElement.classList.add('selected');
      respondidas.add(questaoAtual);
      document.getElementById("respondidas").innerText = `${respondidas.size}/${questoesFiltradas.length}`;
    }
  }

  // Botão Limpar
  const limparBtn = document.createElement("button");
  limparBtn.textContent = "Limpar resposta";
  limparBtn.className = "btn-responder";
  limparBtn.style.marginTop = "10px";
  limparBtn.onclick = limparResposta;
  altContainer.appendChild(limparBtn);

  // Atualiza seletor
  const seletor = document.getElementById('seletor');
  if (seletor.options.length !== questoesFiltradas.length) {
    seletor.innerHTML = questoesFiltradas.map((_, i) => `<option value="${i}">${i + 1}</option>`).join('');
  }
  seletor.value = questaoAtual;

  // Tempo individual
  const tempoQuestaoDiv = document.querySelector(".left-info div");
  tempoQuestaoDiv.innerHTML = `<strong>Tempo nesta questão:</strong> ${formatarTempo(tempoQuestaoAtual)}`;

  intervaloTempoQuestao = setInterval(() => {
    tempoQuestaoAtual++;
    armazenarTempoQuestao(questaoAtual, tempoQuestaoAtual);
    tempoQuestaoDiv.innerHTML = `<strong>Tempo nesta questão:</strong> ${formatarTempo(tempoQuestaoAtual)}`;
}, 1000);

}

function responder() {
  const selecionado = document.querySelector('input[name="opcao"]:checked');
  if (!selecionado) {
    alert("Selecione uma alternativa.");
    return;
  }

  const valor = selecionado.value;
  armazenarResposta(questaoAtual, valor);
  respondidas.add(questaoAtual);
  document.getElementById("respondidas").innerText = `${respondidas.size}/${questoesFiltradas.length}`;
  alert("Resposta salva!");
}

function limparResposta() {
  localStorage.removeItem(`resposta_${questaoAtual}`);
  const radios = document.querySelectorAll('input[name="opcao"]');
  radios.forEach(r => r.checked = false);
  document.querySelectorAll('.options label').forEach(l => l.classList.remove('selected'));
  respondidas.delete(questaoAtual);
  document.getElementById("respondidas").innerText = `${respondidas.size}/${questoesFiltradas.length}`;
}

function proximaQuestao() {
  if (questaoAtual < questoesFiltradas.length - 1) {
    questaoAtual++;
    carregarQuestao();
  }
}

function voltarQuestao() {
  if (questaoAtual > 0) {
    questaoAtual--;
    carregarQuestao();
  }
}

function irParaQuestao(indice) {
  questaoAtual = parseInt(indice);
  carregarQuestao();
}

function finalizar() {
  clearInterval(intervaloTempoGlobal);
  clearInterval(intervaloTempoQuestao);

  let acertos = 0;
  let erros = 0;
  let brancos = 0;

  const respostas = [];

  questoesFiltradas.forEach((q, i) => {
    const r = localStorage.getItem(`resposta_${i}`);
    if (r === null) {
      brancos++;
    } else if (parseInt(r) === q.correta) {
      acertos++;
    } else {
      erros++;
    }

    localStorage.setItem("tempo_total_final", tempoTotal);

    respostas.push(r);
  });

  localStorage.setItem('questoesFiltradas', JSON.stringify(questoesFiltradas));
  localStorage.setItem("resumo_resultado", JSON.stringify({ acertos, erros, brancos }));
  localStorage.setItem("tempo_total_final", tempoTotal);
  localStorage.setItem("respostas_usuario", JSON.stringify(respostas));

  alert("Prova finalizada. Redirecionando para feedback...");
  window.location.href = "feedback-questoes.html";
}

function limpaQuestionario() {
  // Zera o tempo total da prova
  tempoTotal = 0;
  localStorage.setItem("tempo_total", tempoTotal);

  // Zera o tempo e as respostas de todas as questões filtradas
  questoesFiltradas.forEach((_, i) => {
    localStorage.removeItem(`tempo_questao_${i}`);
    localStorage.removeItem(`resposta_${i}`);
  });

  // Remove também o resumo e resultados finais
  localStorage.removeItem("resumo_resultado");
  localStorage.removeItem("tempo_total_final");
  localStorage.removeItem("respostas_usuario");

  console.log("Questionário foi reiniciado: tempos e respostas limpos.");
}


function armazenarResposta(questaoIndex, valorResposta) {
  localStorage.setItem(`resposta_${questaoIndex}`, valorResposta);
  console.log(`Resposta da questão ${questaoIndex} armazenada: ${valorResposta}`);
}

function armazenarTempoQuestao(questaoIndex, tempo) {
  localStorage.setItem(`tempo_questao_${questaoIndex}`, tempo);
  console.log(`Tempo armazenado para questão ${questaoIndex}: ${tempo} segundos`);
}

function armazenarTempoTotal(tempo) {
  localStorage.setItem("tempo_total", tempo);
  console.log(`Tempo total armazenado: ${tempo} segundos`);
}


limpaQuestionario();

// Inicialização Pagina de Questões
iniciarTemporizadorGlobal();
carregarQuestao();





