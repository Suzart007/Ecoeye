# AlertaTerra

> Plataforma cidadã de prevenção e resposta a desastres climáticos no Brasil, com monitoramento baseado em dados de satélites NASA, ESA e INPE.

---

## Sobre o Projeto

### O Problema

Em maio de 2024, o Rio Grande do Sul enfrentou a maior catástrofe climática da história do Brasil. Enchentes devastadoras afetaram **478 municípios**, causaram **354 mortes** e deslocaram mais de **580.000 pessoas**. A tragédia expôs uma falha crítica: os sistemas de alerta não chegaram a tempo às comunidades mais vulneráveis.

### A Solução

O **AlertaTerra** é uma plataforma cidadã que cruza dados de satélites (NASA / ESA / INPE) com geolocalização para emitir alertas de enchentes, deslizamentos, queimadas e secas. Os usuários podem:

- Consultar o nível de risco de sua região em um mapa interativo;
- Reportar ocorrências em tempo real, com protocolo gerado automaticamente;
- Acessar orientações de evacuação e localização de abrigos próximos;
- Filtrar alertas por tipo, gravidade e região.

### Alinhamento com os ODS

| ODS | Objetivo | Contribuição do Projeto |
|-----|----------|------------------------|
| **ODS 11** | Cidades e Comunidades Sustentáveis | Redução de vítimas e danos por meio de alertas precoces |
| **ODS 13** | Ação Contra a Mudança Global do Clima | Monitoramento contínuo de eventos climáticos extremos |

---

## Tecnologias Utilizadas

| Camada | Tecnologia |
|--------|-----------|
| Marcação | HTML5 semântico (WAI-ARIA, elementos nativos) |
| Estilo | CSS3 (Custom Properties, Grid, Flexbox, `@keyframes`) |
| Lógica | JavaScript ES6+ (Vanilla — sem frameworks) |
| Ícones | SVG inline |
| Fontes | Google Fonts — Space Grotesk + Inter |
| Dados de referência | NASA Earthdata · ESA Copernicus · INPE BDQueimadas · CEMADEN |

> **Sem dependências externas** — nenhuma biblioteca de terceiros foi utilizada (sem Bootstrap, jQuery, React ou similares).

---

## Estrutura de Pastas

```
alertaterra/
├── index.html          # Página inicial — hero, problema, como funciona, ODS
├── sobre.html          # Sobre o projeto — missão, tecnologias, timeline
├── alertas.html        # Mapa SVG + 15 alertas simulados com filtros dinâmicos
├── reportar.html       # Formulário de reporte com geração de protocolo
├── faq.html            # Perguntas frequentes com acordeon funcional
├── integrantes.html    # Cards da equipe com foto, RM, turma, GitHub e LinkedIn
├── contato.html        # Formulário de contato com validação e modal de sucesso
├── README.md           # Este arquivo
│
├── css/
│   ├── style.css       # Reset, variáveis CSS, tipografia e utilitários globais
│   ├── components.css  # Navbar, footer, botões, cards, formulários, mapa
│   └── responsive.css  # Media queries (mobile-first: 480 / 768 / 992 / 1200 px)
│
├── js/
│   ├── main.js         # Menu hambúrguer, scroll effects, fade-in, scroll-to-top
│   ├── alertas.js      # Dados simulados, filtros dinâmicos, mapa e contadores
│   ├── form.js         # Validação dos formulários de contato e reporte, modais
│   └── faq.js          # Acordeon animado com transição por max-height
│
└── assets/
    ├── img/            # Fotos dos integrantes e favicon
    └── icons/          # SVGs de ícones adicionais
```

---

## Como Executar

O projeto é 100% estático — não requer servidor, processo de build ou instalação de dependências.



## Páginas do Site

| Página | Arquivo | Descrição |
|--------|---------|-----------|
| Início | `index.html` | Hero, cards do problema, como funciona (4 passos), alinhamento ODS |
| Sobre | `sobre.html` | Contexto RS 2024, missão/visão/valores, stack tecnológica, timeline |
| Alertas | `alertas.html` | Mapa SVG interativo + 15 alertas simulados + filtros dinâmicos |
| Reportar | `reportar.html` | Formulário com validação em tempo real e geração de protocolo |
| FAQ | `faq.html` | 10 perguntas em 4 categorias, acordeon animado com JavaScript |
| Equipe | `integrantes.html` | Cards responsivos com foto, RM, turma, GitHub e LinkedIn |
| Contato | `contato.html` | Formulário validado com modal de confirmação customizado |

---

## Equipe

| Nome | RM | Turma | GitHub | LinkedIn |
|------|----|-------|--------|----------|
| Guilherme Souza Suzart | 569884 | 1TDSPK | [Suzart007](https://github.com/Suzart007) | [guilherme-suzart](https://www.linkedin.com/in/guilherme-suzart-ba83193b3) |
| Kaio Marcus Macedo Chiappinelli | 573365 | 1TDSPK | [KaioChiappinelli](https://github.com/KaioChiappinelli) | [kaio-chiappinelli](https://www.linkedin.com/in/kaio-chiappinelli-183106322) |
| Matheus Vecchi de Oliveira Santos | 569749 | 1TDSPK | [ogvecchi](https://github.com/ogvecchi) | [matheusvecchi](https://www.linkedin.com/in/matheusvecchi-) |
| Rafael Rodrigues Trindade | 564303 | 1TDSPK | [rafael04072007](https://github.com/rafael04072007) | [rafael-rodrigues](https://www.linkedin.com/in/rafael-rodrigues-7708b0283/) |


---

## Repositório



```
https://github.com/Suzart007/Ecoeye.git
```


## Fontes e Referências

O detalhamento completo das fontes, referências técnicas, dados consultados e inspirações de design está disponível no arquivo dedicado:

➡️ **[Ver todas as fontes (FONTES.txt)](./FONTES.txt)**

### Principais fontes

| Categoria | Fonte | Link |
|-----------|-------|------|
| Dados orbitais | NASA Earthdata | [earthdata.nasa.gov](https://www.earthdata.nasa.gov/) |
| Dados orbitais | ESA Copernicus | [copernicus.eu](https://www.copernicus.eu/pt) |
| Dados orbitais | International Charter Space and Major Disasters | [disasterscharter.org](https://disasterscharter.org/) |
| Dados nacionais | INPE — Instituto Nacional de Pesquisas Espaciais | [inpe.br](https://www.gov.br/inpe/pt-br) |
| Dados nacionais | CEMADEN — Centro Nacional de Monitoramento e Alertas | [gov.br/cemaden](https://www.gov.br/cemaden/pt-br) |
| Dados nacionais | Defesa Civil Nacional | [gov.br/mdr](https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil) |
| ONU / ODS | Agenda 2030 — ODS 11 e 13 | [brasil.un.org](https://brasil.un.org/pt-br/sdgs) |
| Documentação técnica | MDN Web Docs | [developer.mozilla.org](https://developer.mozilla.org/pt-BR/) |
| Padrões web | W3C / WAI-ARIA | [w3.org](https://www.w3.org/) |
| Tipografia | Google Fonts — Space Grotesk + Inter | [fonts.google.com](https://fonts.google.com/) |

> **Nota sobre os alertas do mapa:** os 15 alertas exibidos na página de alertas são cenários simulados, criados exclusivamente para demonstrar o funcionamento da interface (filtros, mapa interativo e cards). Eles não representam ocorrências em tempo real, mas são baseados em padrões de risco reais e geograficamente coerentes com as regiões indicadas (ex.: enchentes no RS/SP, queimadas no MS/PA, seca no CE/BA). As estatísticas históricas citadas no site — como os dados da catástrofe do Rio Grande do Sul em maio de 2024 — são informações verificáveis extraídas de fontes oficiais (Defesa Civil, IBGE, governo do RS) e estão corretas.

---

## Uso de Inteligência Artificial

Em conformidade com as boas práticas acadêmicas, a equipe declara que **partes específicas e tecnicamente complexas** deste projeto contaram com o auxílio de inteligência artificial generativa (Claude — Anthropic). O suporte de IA foi utilizado pontualmente nas seguintes situações:

- Geração da estrutura base de componentes HTML de maior complexidade (ex.: mapa SVG interativo, acordeon animado);
- Implementação de lógicas JavaScript de maior extensão (filtros dinâmicos, validação de formulários, Intersection Observer);
- Organização e padronização do CSS para garantir consistência entre os componentes.

O restante do projeto — incluindo a concepção, identidade visual, definição de escopo, conteúdo editorial, decisões de arquitetura e a maior parte do código — foi desenvolvido integralmente pelos integrantes da equipe. Todo o código gerado com auxílio de IA foi revisado, compreendido e adaptado pelos autores antes de ser incorporado ao projeto.

---

## Informações Acadêmicas

| Campo | Valor |
|-------|-------|
| **Instituição** | FIAP — Faculdade de Informática e Administração Paulista |
| **Curso** | Análise e Desenvolvimento de Sistemas |
| **Turma** | 1TDSPK |
| **Desafio** | Global Solution 2026/1 |
| **Tema** | Prevenção e resposta a desastres climáticos com tecnologia |
| **Semestre** | 1º semestre de 2026 |

---

*Projeto desenvolvido com fins exclusivamente acadêmicos, sem fins lucrativos.*

