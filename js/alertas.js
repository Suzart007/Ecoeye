document.addEventListener('DOMContentLoaded', function () {

  var alertasData = [
    {
      id: 1,
      tipo: 'enchente',
      titulo: 'Rio Taquari 4m acima da cota — áreas ribeirinhas em risco',
      regiao: 'sul',
      estado: 'RS',
      municipio: 'Lajeado / Estrela',
      gravidade: 'critico',
      horario: '08:42',
      data: '25/05/2026',
      descricao: 'O Taquari já passou mais de 4 metros acima da cota e ainda está subindo. Quem mora às margens do rio em Lajeado e Estrela precisa sair agora — as partes mais baixas estão em perigo real.',
      icon: '🌊',
      mapX: '44%',
      mapY: '75%'
    },
    {
      id: 2,
      tipo: 'deslizamento',
      titulo: '180mm em 48h deixam encostas da Serra Gaúcha no limite',
      regiao: 'sul',
      estado: 'RS',
      municipio: 'Caxias do Sul',
      gravidade: 'critico',
      horario: '07:15',
      data: '25/05/2026',
      descricao: 'Choveu quase 180mm em dois dias seguidos e o solo da Serra simplesmente não aguenta mais. Em Caxias, quem mora em morro precisa descer — o risco de deslizamento está alto de verdade.',
      icon: '⛰️',
      mapX: '50%',
      mapY: '68%'
    },
    {
      id: 3,
      tipo: 'queimada',
      titulo: 'Quase 50 focos de calor ativos no Pantanal sul',
      regiao: 'centro-oeste',
      estado: 'MS',
      municipio: 'Corumbá',
      gravidade: 'alto',
      horario: '11:30',
      data: '25/05/2026',
      descricao: 'O INPE está contando quase 50 focos ao mesmo tempo no Pantanal sul, e com esse vento de 35 km/h o fogo pode se alastrar rápido. Brigadistas já foram acionados. Por enquanto, fique longe da área.',
      icon: '🔥',
      mapX: '38%',
      mapY: '51%'
    },
    {
      id: 4,
      tipo: 'seca',
      titulo: 'Açudes do CE chegam a 18% — 12 cidades decretam racionamento',
      regiao: 'nordeste',
      estado: 'CE',
      municipio: 'Juazeiro do Norte',
      gravidade: 'alto',
      horario: '09:00',
      data: '25/05/2026',
      descricao: 'Os reservatórios do Ceará estão quase no fundo — média de 18% de capacidade. Doze municípios já decretaram racionamento e o carro-pipa voltou pras ruas. Quem pode poupar água, que poupe.',
      icon: '🏜️',
      mapX: '70%',
      mapY: '30%'
    },
    {
      id: 5,
      tipo: 'enchente',
      titulo: 'Chuva intensa alaga zonas leste e norte de SP',
      regiao: 'sudeste',
      estado: 'SP',
      municipio: 'São Paulo / Guarulhos',
      gravidade: 'alto',
      horario: '06:20',
      data: '25/05/2026',
      descricao: 'Muita chuva caindo em SP desde cedo, com alagamentos espalhados nas zonas leste e norte. Tietê e Pinheiros estão subindo e as marginais viraram roleta. Tem como desviar, desvia.',
      icon: '🌊',
      mapX: '57%',
      mapY: '55%'
    },
    {
      id: 6,
      tipo: 'queimada',
      titulo: 'Frente de fogo avança sobre Cerrado nativo em Catalão',
      regiao: 'centro-oeste',
      estado: 'GO',
      municipio: 'Catalão',
      gravidade: 'alto',
      horario: '13:45',
      data: '25/05/2026',
      descricao: 'Uma frente de fogo está cortando o Cerrado perto de Catalão, com 23 focos detectados pelo satélite VIIRS. O ar está seco demais — só 15% de umidade. Propriedades rurais na área precisam ficar de olho.',
      icon: '🔥',
      mapX: '50%',
      mapY: '47%'
    },
    {
      id: 7,
      tipo: 'deslizamento',
      titulo: 'Taludes da Serra do Mar saturados perto da Anchieta',
      regiao: 'sudeste',
      estado: 'SP',
      municipio: 'Cubatão',
      gravidade: 'moderado',
      horario: '14:10',
      data: '25/05/2026',
      descricao: 'Os taludes da Serra do Mar perto da Anchieta estão saturados depois das chuvas. Não é pânico ainda, mas qualquer pancada mais forte pode mudar isso rápido. Motoristas e moradores da área devem ficar de olho.',
      icon: '⛰️',
      mapX: '56%',
      mapY: '58%'
    },
    {
      id: 8,
      tipo: 'seca',
      titulo: '45 dias sem chuva no oeste da BA — lavouras com 30% de perda',
      regiao: 'nordeste',
      estado: 'BA',
      municipio: 'Barreiras',
      gravidade: 'moderado',
      horario: '10:00',
      data: '24/05/2026',
      descricao: 'Faz mais de 40 dias sem chuva de verdade no oeste da Bahia. A soja e o algodão já acusam o golpe — cerca de 30% de perda estimada nas lavouras. A ANA está acompanhando de perto os rios da região.',
      icon: '🏜️',
      mapX: '63%',
      mapY: '33%'
    },
    {
      id: 9,
      tipo: 'enchente',
      titulo: 'Solimões sobe em Tefé — pico esperado em três dias',
      regiao: 'norte',
      estado: 'AM',
      municipio: 'Tefé',
      gravidade: 'moderado',
      horario: '16:00',
      data: '24/05/2026',
      descricao: 'O Solimões está subindo devagar mas sem parar em Tefé. As comunidades ribeirinhas já estão em alerta nível 2, e a Defesa Civil estima pico do rio em uns três dias. Nada fora do esperado pra época, mas vale acompanhar.',
      icon: '🌊',
      mapX: '30%',
      mapY: '28%'
    },
    {
      id: 10,
      tipo: 'queimada',
      titulo: 'Incêndio de grande porte atinge floresta densa ao norte de Altamira',
      regiao: 'norte',
      estado: 'PA',
      municipio: 'Altamira',
      gravidade: 'critico',
      horario: '10:55',
      data: '25/05/2026',
      descricao: 'Tem um incêndio grande no norte de Altamira, em plena floresta fechada. O vento está levando o fogo pra leste e a fumaça já tomou o ar num raio enorme. Situação crítica — bem diferente de focos isolados.',
      icon: '🔥',
      mapX: '38%',
      mapY: '22%'
    },
    {
      id: 11,
      tipo: 'deslizamento',
      titulo: 'Petrópolis em alerta: 100mm em 24h e zonas de risco recomendadas evacuar',
      regiao: 'sudeste',
      estado: 'RJ',
      municipio: 'Petrópolis',
      gravidade: 'alto',
      horario: '05:30',
      data: '25/05/2026',
      descricao: 'Com mais de 100mm de chuva nas últimas 24 horas e o histórico que Petrópolis tem, o alerta preventivo era inevitável. Quem mora nas zonas R3 e R4 já devia ter saído — não vale arriscar.',
      icon: '⛰️',
      mapX: '65%',
      mapY: '55%'
    },
    {
      id: 12,
      tipo: 'seca',
      titulo: 'Período seco começa mais cedo que o usual no sul do Pará',
      regiao: 'norte',
      estado: 'PA',
      municipio: 'Redenção',
      gravidade: 'baixo',
      horario: '08:00',
      data: '24/05/2026',
      descricao: 'A chuva sumiu um pouco mais cedo que o usual no sul do Pará. Por enquanto não é preocupante, mas os índices estão abaixo do histórico e o monitoramento segue ativo.',
      icon: '🏜️',
      mapX: '38%',
      mapY: '29%'
    },
    {
      id: 13,
      tipo: 'enchente',
      titulo: 'Itajaí-Açu sobe após frente fria — bairros históricos em alerta',
      regiao: 'sul',
      estado: 'SC',
      municipio: 'Itajaí',
      gravidade: 'moderado',
      horario: '19:20',
      data: '24/05/2026',
      descricao: 'A frente fria empurrou o Itajaí-Açu pra cima, e os bairros que já encheram antes estão em alerta de novo. Não chegou a ponto de evacuar, mas quem mora na planície sabe como isso pode virar rápido.',
      icon: '🌊',
      mapX: '48%',
      mapY: '63%'
    },
    {
      id: 14,
      tipo: 'queimada',
      titulo: 'Focos isolados de savana detectados ao norte de Boa Vista',
      regiao: 'norte',
      estado: 'RR',
      municipio: 'Boa Vista',
      gravidade: 'baixo',
      horario: '12:00',
      data: '23/05/2026',
      descricao: 'Apareceram alguns focos na savana ao norte de Roraima, mas ainda estão bem isolados. O satélite continua de olho e brigadas preventivas estão em prontidão. Por ora, tudo controlado.',
      icon: '🔥',
      mapX: '28%',
      mapY: '10%'
    },
    {
      id: 15,
      tipo: 'deslizamento',
      titulo: 'Encostas de São Sebastião monitoradas desde os eventos de 2023',
      regiao: 'sudeste',
      estado: 'SP',
      municipio: 'São Sebastião',
      gravidade: 'baixo',
      horario: '15:00',
      data: '23/05/2026',
      descricao: 'Desde os deslizamentos de 2023, as encostas de São Sebastião ficaram com monitoramento permanente. Hoje o solo está estável e consolidado, mas ninguém baixa a guarda por lá.',
      icon: '⛰️',
      mapX: '57%',
      mapY: '58%'
    }
  ];

  var filtroAtivo = {
    tipo:      'todos',
    gravidade: 'todos',
    regiao:    'todos'
  };


  
  function atualizarContadores(lista) {
    var el = document.getElementById('total-alertas');
    if (el) el.textContent = lista.length;

    var elLista = document.getElementById('total-alertas-lista');
    if (elLista) elLista.textContent = lista.length + ' resultado' + (lista.length !== 1 ? 's' : '');

    var criticos = lista.filter(function (a) { return a.gravidade === 'critico'; }).length;
    var elCrit = document.getElementById('total-criticos');
    if (elCrit) elCrit.textContent = criticos;
  }

  function renderizarCards(lista) {
    var container = document.getElementById('lista-alertas');
    if (!container) return;

    if (lista.length === 0) {
      container.innerHTML =
        '<p class="text-muted text-center" style="padding: 2rem; grid-column: 1/-1;">' +
        'Nenhum alerta encontrado com os filtros selecionados.</p>';
      return;
    }

    var html = lista.map(function (alerta) {
      return (
        '<article class="alert-card ' + alerta.gravidade + ' fade-in-element visible" ' +
        'role="listitem" aria-label="Alerta ' + alerta.gravidade + ': ' + alerta.titulo + '">' +

        '<div class="alert-card-icon card-icon-' + alerta.gravidade + '" aria-hidden="true">' +
        alerta.icon +
        '</div>' +

        '<div class="alert-card-body">' +
        '<div class="alert-card-header">' +
        '<span class="alert-card-title">' + alerta.titulo + '</span>' +
        '<span class="badge badge-' + alerta.gravidade + '">' + labelGravidade(alerta.gravidade) + '</span>' +
        '</div>' +

        '<div class="alert-card-meta">' +
        '<span>📍 ' + alerta.municipio + ' — ' + alerta.estado + '</span>' +
        '<span>🕐 ' + alerta.horario + ' · ' + alerta.data + '</span>' +
        '<span>' + labelTipo(alerta.tipo) + '</span>' +
        '</div>' +

        '<p class="alert-card-desc">' + alerta.descricao + '</p>' +
        '</div>' +

        '</article>'
      );
    }).join('');

    container.innerHTML = html;
  }


  
  function renderizarMarcadores(lista) {
    var container = document.getElementById('mapa-marcadores');
    if (!container) return;

    var html = lista.map(function (alerta) {
      return (
        '<div class="map-marker" style="left:' + alerta.mapX + '; top:' + alerta.mapY + ';" ' +
        'role="img" aria-label="' + alerta.titulo + ' — ' + labelGravidade(alerta.gravidade) + '">' +
        '<div class="map-marker-dot ' + alerta.gravidade + '" title="' + alerta.titulo + '"></div>' +
        '<div class="map-tooltip">' + alerta.icon + ' ' + alerta.municipio + '</div>' +
        '</div>'
      );
    }).join('');

    container.innerHTML = html;
  }

  function filtrarAlertas() {
    return alertasData.filter(function (alerta) {
      var passaTipo      = filtroAtivo.tipo      === 'todos' || alerta.tipo      === filtroAtivo.tipo;
      var passaGravidade = filtroAtivo.gravidade === 'todos' || alerta.gravidade === filtroAtivo.gravidade;
      var passaRegiao    = filtroAtivo.regiao    === 'todos' || alerta.regiao    === filtroAtivo.regiao;
      return passaTipo && passaGravidade && passaRegiao;
    });
  }

  function aplicarFiltros() {
    var lista = filtrarAlertas();
    renderizarCards(lista);
    renderizarMarcadores(lista);
    atualizarContadores(lista);
  }

function bindFiltros(seletorGrupo, chave) {
    var pills = document.querySelectorAll(seletorGrupo + ' .filter-pill');
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        // Remove active de todos do grupo
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');

        filtroAtivo[chave] = pill.dataset.valor;
        aplicarFiltros();
      });
    });
  }

  bindFiltros('#filtro-tipo',      'tipo');
  bindFiltros('#filtro-gravidade', 'gravidade');
  bindFiltros('#filtro-regiao',    'regiao');

  

    function labelGravidade(g) {
    return { critico: 'Crítico', alto: 'Alto', moderado: 'Moderado', baixo: 'Baixo' }[g] || g;
  }

  function labelTipo(t) {
    return {
      enchente:     '🌊 Enchente',
      deslizamento: '⛰️ Deslizamento',
      queimada:     '🔥 Queimada',
      seca:         '🏜️ Seca'
    }[t] || t;
  }

  // ----------------------------------------
  // LOADING BAR SIMULADO
  // ----------------------------------------
  var loadingBar = document.getElementById('loading-bar');
  if (loadingBar) {
    loadingBar.style.display = 'block';
    setTimeout(function () {
      loadingBar.style.display = 'none';
      aplicarFiltros(); // Renderiza após "carregamento"
    }, 1200);
  } else {
    aplicarFiltros();
  }

});