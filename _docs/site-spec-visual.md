# Spec Visual — Site Dra. Geórgia (v2 · Schwartz revisada)
## Landing Page Mamas — 9 Seções

> **Acompanha:** [`copy-site-mamas-v2.md`](./copy-site-mamas-v2.md)
> **Sistema:** [`design-sys/`](../design-sys/) · tokens `colors_and_type.css`
> **Público:** mulheres 30–45 · estado emocional alvo = **desejada, plena, despida sem vergonha**

---

## Mudanças visuais da v1 para a v2

| v1 | v2 | Por quê |
|---|---|---|
| 13 seções | 9 seções | Cortes de redundância acompanham a copy |
| Hero com selo IPC e badge | Hero limpo, foto + uma promessa | Selo IPC é técnico — não vende emocional |
| Seção "Vilão" full-bleed bordô | Cortada · vilão diluído na voz da Dra. | Atacar "o mercado" gasta seção inteira sem somar |
| Escala IPC com 6 silhuetas vetoriais animadas | Escala enxuta · 6 linhas curtas, ilustração simples | Mulher de 30-45 não estuda gráfico técnico |
| Timeline vertical com 5 marcadores numerados | Cortada (protocolo cortado da copy) | Detalhe operacional não converte |
| FAQ accordion com 8 perguntas | Mini-FAQ inline na oferta | Só objeções de compra — não curiosidades |
| Seção "Promessa Manifesto" | **Nova: Seção 3 (A Promessa)** com bloco poético | Schwartz: vender o resultado vivido antes do mecanismo |
| Bordô full-bleed em 2 momentos (Vilão + Oferta) | Bordô full-bleed em **1 momento** (Promessa S3) | A Promessa virou o pico bordô. Oferta volta pra off-white com bloco vinho. |

---

## Princípios visuais que governam a v2

1. **Foto no comando.** Em vez de carregar tipografia, a v2 deixa **foto da Dra. + foto editorial de mulher despida (silhueta, sombra)** carregar a emoção. Tipografia entra como suporte.
2. **Bordô como herói emocional, não vilão.** Full-bleed bordô agora aparece **na Promessa (Seção 3)** — o momento de imaginar o resultado. É calor, intimidade, não confronto.
3. **Whitespace ainda mais generoso.** Menos seções = mais respiro entre cada uma. `--sp-13` (104px) mínimo entre blocos.
4. **Tipografia "respiratória".** Frases curtas em linhas próprias, parágrafos de 1 frase. Cormorant Italic para palavras-âncora sensoriais (*despir*, *luz*, *sutiã*, *desejada*).
5. **Dourado em traço** — mantido. Aparece em filete, ícones, e **só uma vez como preenchimento** no botão de conversão da Seção 9.
6. **Sem ruído gráfico.** Nada de cards complexos, nada de wireframes "técnicos" visíveis (régua, gráficos). A complexidade técnica fica no nome (IPC) — visualmente é simples.

---

## Layout global

- **Grid:** 12 colunas, max-width 1280px, padding lateral 64px (desktop) / 24px (mobile).
- **Nav:** fixa no topo, fundo `--dg-offwhite` 92% opacity + blur sutil, filete dourado 1px no fundo. Logo `◆ Geórgia Peres` à esquerda · CTA "Avaliação →" à direita.
- **CTA sticky mobile:** botão bordô full-width fixo no rodapé com 24px de margem.
- **Spacing entre seções:** `--sp-13` (104px) desktop, `--sp-8` (64px) mobile.

---

# SEÇÃO 1 — HERO

### Conceito visual
**Foto manda. Tipografia respira.** Foto vertical premium da Dra. Geórgia (`ensaio-ia-02-bordo.png`) ocupando ~50% da tela à direita, full-bleed vertical (toca topo e base do hero). À esquerda, headline em Cormorant gigante com palavra-âncora *"luz acesa"* em itálico. Sem badges, sem selo flutuante, sem cards. **Limpo. Sensorial. Convidativo.**

### Layout

```
┌──────────────────────────────────────┬──────────────────────────┐
│ [NAV]                                │                          │
├──────────────────────────────────────┤                          │
│                                      │                          │
│  ◆ CIRURGIA DE MAMA · SP             │                          │
│  ─── filete dourado 40px ───         │                          │
│                                      │                          │
│                                      │   [FOTO DRA. GEÓRGIA]    │
│                                      │    full-bleed vertical   │
│                                      │    ensaio bordô,         │
│  Você merece                         │    sentada, olhar        │
│  tirar a roupa                       │    direto                │
│  de *luz acesa.*                     │                          │
│                                      │    ratio 3:4             │
│  ─── Cormorant 72px ───              │    sombra de janela      │
│  ─── "luz acesa" em italic ───       │    overlay 135°          │
│                                      │                          │
│                                      │                          │
│  Cirurgia de mama com colo natural,  │                          │
│  alto e firme — com ou sem prótese.  │                          │
│  Quem decide é o seu corpo,          │                          │
│  não um catálogo.                    │                          │
│  ─── Inter Light 18px ───            │                          │
│                                      │                          │
│  [ Quero minha avaliação → ]         │                          │
│   ↑ botão bordô primário             │                          │
│                                      │                          │
│  Como funciona ↓                     │                          │
│   ↑ link discreto                    │                          │
│                                      │                          │
│  ─── filete dourado 80px ───         │                          │
│  R$800 presencial · vira crédito ·   │                          │
│  8 vagas/mês                         │                          │
│                                      │                          │
└──────────────────────────────────────┴──────────────────────────┘
```

### Detalhamento
- **Fundo:** `--dg-offwhite` com textura papel sutil.
- **Foto:** ratio 3:4, full-bleed vertical (toca topo do hero e base — sem border-radius nas laterais que tocam a borda da viewport, radius 14px só nas laterais internas se houver).
- **Eyebrow:** `dg-overline`, glyph `◆` em `--dg-ouro`, filete dourado 1px x 40px após o texto.
- **H1:** Cormorant 72px (clamp 48px–80px), peso 500. Linha 1: "Você merece" peso 400. Linha 2: "tirar a roupa". Linha 3: "de **luz acesa.**" — *luz acesa* em Cormorant Italic 500, cor `--dg-bordo`. Line-height 1.05.
- **Sub-headline:** Inter Light 18px, line-height 1.7, cor `--fg-1`, max-width 440px. Palavras "*com ou sem prótese*" em Cormorant Italic inline (mistura editorial sutil).
- **CTA primário:** botão bordô (`--dg-bordo`), texto `--dg-offwhite`, padding 24px 40px, radius 8px, sombra `--shadow-md`, Inter SemiBold 16px, seta Lucide ArrowRight 1.5px stroke. Hover brightness 0.94 + shadow spread +2px.
- **CTA secundário:** "Como funciona" + glyph ↓, Inter Regular 14px, cor `--dg-bordo`, border-bottom 1px `--rule-bordo`. Funciona como anchor link suave pra Seção 4.
- **Microcopy de confiança:** classe `dg-small`, separador "·" em `--dg-ouro`, precedida de filete 1px x 80px.

### Animação de entrada
- Eyebrow + filete: fade 240ms.
- H1: fade + 8px slide-up, 480ms, easing `cubic-bezier(0.22, 0.61, 0.36, 1)`, delay 100ms.
- Sub + CTA: fade + 8px slide-up, delay 200ms.
- Foto: fade in puro (sem slide), 600ms, delay 0ms (entra primeiro).

### Mobile
- Foto vai pro topo, ratio 4:5, ocupa 55vh.
- Texto abaixo, single column, padding 24px.
- H1 reduz pra 44px.
- CTA primário sticky no bottom (full-width).

---

# SEÇÃO 2 — IDENTIFICAÇÃO

### Conceito visual
**Lista de batida — ritmo de respiração.** Sem checkboxes, sem cards. Cada linha sozinha, com espaço acima e abaixo, como se fosse uma página de diário arrancada. A paciente lê devagar. Cada frase é um soco curto. Ao final, a frase de virada quebra o ritmo com itálico Cormorant.

### Layout

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│         ◆ VOCÊ                                                 │
│                                                                │
│         Se você se reconhece aqui,                             │
│         continua lendo.                                        │
│         ─── Cormorant 36px, alinhado à esquerda                │
│                                                                │
│                                                                │
│         Você troca de roupa de costas pro espelho.             │
│                                                                │
│         Apaga a luz antes do sutiã sair.                       │
│                                                                │
│         Já encheu duas gavetas de bojo, fita, top com aro.     │
│                                                                │
│         Corta foto do ombro pra cima — sempre.                 │
│                                                                │
│         Adiou biquíni esse verão. E o passado.                 │
│         E o anterior.                                          │
│                                                                │
│         Já pesquisou cirurgia. Saiu mais perdida               │
│         do que entrou.                                         │
│                                                                │
│         Tem medo de prótese. E medo igual                      │
│         de não fazer nada.                                     │
│                                                                │
│         ─── filete dourado 80px ───                            │
│                                                                │
│         *Não é vaidade. É você querendo*                       │
│         *se ver de novo.*                                      │
│         ─── Cormorant Italic 32px, --dg-bordo                  │
│                                                                │
│         [ Quero minha avaliação → ]                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Detalhamento
- **Fundo:** `--dg-offwhite`. Padding `--sp-13` vertical.
- **Container:** max-width 720px, alinhamento à esquerda (não centralizado — sensação de leitura íntima, como se fosse texto endereçado a ela).
- **Eyebrow:** `dg-overline` + glyph `◆`. Texto curto: "VOCÊ".
- **H2:** Cormorant Regular 36px, peso 500, line-height 1.18.
- **Lista de frases:** Inter Light 20px (`--t-body-lg` aumentado), line-height 1.5, cor `--dg-grafite`, **sem bullets**. Cada frase é um parágrafo separado com **margin-top 24px** entre elas — gera o ritmo respiratório.
  - Palavras-chave em Cormorant Italic inline: *espelho*, *luz*, *sutiã*, *bojo*, *biquíni*, *cirurgia*, *prótese*. Cor mantida (não destacar com cor — o italic basta).
- **Filete dourado:** 1px x 80px, alinhado à esquerda (não centralizado), margin 64px 0.
- **Frase de virada:** Cormorant Italic 32px, peso 500, cor `--dg-bordo`. Max-width 540px. Quebra em duas linhas pra criar pausa.
- **CTA inline:** padrão bordô, alinhado à esquerda.

### Animação
- Cada frase da lista entra em sequência ao scroll: fade + 4px slide-up, stagger 80ms. Reforça a sensação de "linha por linha, eu me reconheço".

### Mobile
- Container full-width com padding 24px.
- H2 reduz pra 28px.
- Frases reduzem pra 18px.

---

# SEÇÃO 3 — A PROMESSA (o pico bordô)

### Conceito visual
**O coração emocional da página.** Full-bleed bordô (`--dg-bordo`) com sombra de janela. Foto editorial de **silhueta de mulher saindo do banho** ou foco no colo (não a Dra. — é "ela", a paciente projetada). Crop respeitoso, jamais explícito. Texto poético em `--dg-offwhite` ao lado. Cada parágrafo é uma linha solta. Sensação de **respiração ofegante, baixa, íntima**.

### Layout

```
╔════════════════════════════════════╦═══════════════════════════╗
║                                    ║                           ║
║                                    ║                           ║
║                                    ║                           ║
║   ◆ IMAGINE ASSIM                  ║                           ║
║                                    ║                           ║
║                                    ║   [FOTO EDITORIAL]        ║
║                                    ║    silhueta de mulher,    ║
║   Você sai do banho.               ║    foco em colo/ombro,    ║
║                                    ║    luz natural quente,    ║
║   O espelho devolve um peito que   ║    crop ético             ║
║   sustenta sozinho. Colo alto.     ║                           ║
║   Decote presente.                 ║    duotone bordô/nude     ║
║                                    ║    sombra de janela       ║
║   Vestido sem bojo cai. Biquíni    ║    overlay 135°           ║
║   cai. Camisola cai.               ║                           ║
║                                    ║    ratio 3:4              ║
║   Você não ajusta nada antes de    ║                           ║
║   abrir a porta.                   ║                           ║
║                                    ║                           ║
║   Quando alguém olha, você         ║                           ║
║   sustenta o olhar.                ║                           ║
║                                    ║                           ║
║   *Quando você se despe,*          ║                           ║
║   *a luz fica acesa.*              ║                           ║
║   ↑ Cormorant Italic 36px, --gold  ║                           ║
║                                    ║                           ║
║   ─── filete dourado 80px ───      ║                           ║
║                                    ║                           ║
║   Esse é o trabalho da Dra.        ║                           ║
║   Geórgia. *Devolver isso pra você.*║                          ║
║                                    ║                           ║
╚════════════════════════════════════╩═══════════════════════════╝
   ↑ overlay --light-window 135° em todo o full-bleed
```

### Detalhamento
- **Fundo:** `--dg-bordo` full-bleed, padding vertical `--sp-21` (168px). Overlay `--light-window` 135° na camada superior — assinatura da marca, visível.
- **Layout:** 7/12 texto + 5/12 foto. Foto vai full-bleed à direita (toca borda direita da viewport).
- **Eyebrow:** `dg-overline`, cor `--fg-on-bordo-2`, glyph `◆` em `--dg-ouro`.
- **Bloco poético:**
  - Inter Light 22px, line-height 1.6, cor `--dg-offwhite`.
  - **Cada parágrafo é uma linha**, separados por margin-top 32px. Ritmo de prosa lenta.
  - Palavras-âncora em Cormorant Italic inline: *peito*, *espelho*, *vestido*, *biquíni*, *camisola*, *despe*, *luz*. Cor mantida `--dg-offwhite`.
- **Frase-clímax (dentro do bloco):** *"Quando você se despe, a luz fica acesa."* — Cormorant Italic 36px, peso 500, cor `--dg-ouro`. Quebra em duas linhas. É o pico.
- **Filete dourado:** 1px x 80px.
- **Frase final:** Inter Light 18px, cor `--dg-offwhite`. *"Devolver isso pra você."* em Cormorant Italic, cor `--dg-ouro`.
- **Foto:**
  - Imagem editorial de silhueta — foco em ombro, costas, colo de perfil ou em sombra. Crop respeitoso (jamais frontal explícito).
  - **Tratamento duotone:** mistura bordô + nude/dourado pra integrar com o fundo. Sensação de "fundida com a seção".
  - Border-radius 14px nas laterais internas, full-bleed nas laterais externas.
  - Sombra de janela `--light-window` em overlay próprio.

### Animação
- Texto entra parágrafo por parágrafo em stagger 200ms (mais lento do que outras seções — reforça a respiração).
- Foto faz fade-in lento (800ms) sem slide.
- A frase-clímax ("a luz fica acesa") entra com escala 0.98 → 1, suavíssima, 480ms.

### Mobile
- Stack vertical: foto no topo (55vh), texto abaixo.
- Bloco poético reduz pra 18px.
- Frase-clímax reduz pra 28px.

---

# SEÇÃO 4 — A ESPECIALISTA

### Conceito visual
**Página de revista — entrevista íntima.** Foto vertical da Dra. (`ensaio-ia-01-branco.png` ou `ensaio-ia-04.png`) à esquerda. Texto à direita em primeira pessoa, formato de carta-manifesto. Palavra-âncora gigante "**Mama**" em marca-d'água atrás do título. Fundo `--dg-offwhite`. Sem ruído de cards adicionais — só foto + texto.

### Layout

```
┌───────────────────────────────┬────────────────────────────────┐
│                               │                                │
│                               │  ◆ A ESPECIALISTA              │
│                               │                                │
│                               │  ┌──────────────────┐          │
│                               │  │  Mama            │← marca-d'│
│   [FOTO DRA.]                 │  └──────────────────┘  água    │
│    ensaio branco              │   é a única coisa              │
│    full-height vertical       │   que eu *opero.*              │
│    ratio 3:4                  │   ─── Cormorant 56px ─         │
│    sombra de janela           │                                │
│    border-radius 14px         │  ─── filete dourado 64px ───   │
│                               │                                │
│                               │   A maioria dos cirurgiões     │
│                               │   plásticos opera tudo: rosto, │
│                               │   abdômen, lipo, mama.         │
│                               │                                │
│                               │   Eu escolhi um caminho        │
│                               │   diferente.                   │
│                               │                                │
│                               │   *Mama é a minha especialida-*│
│                               │   *de. Só mama.*               │
│                               │   ↑ destaque Cormorant Italic  │
│                               │                                │
│                               │   Foi por isso que percebi...  │
│                               │   [continuação]                │
│                               │                                │
│                               │   *Primeiro a gente desenha*   │
│                               │   *o seu decote.*              │
│                               │   *Depois — e só se fizer*     │
│                               │   *sentido — a técnica.*       │
│                               │   ↑ destaque Cormorant Italic  │
│                               │     32px, --dg-bordo           │
│                               │                                │
│                               │   ─── filete dourado ───       │
│                               │                                │
│                               │   Dra. Geórgia Peres           │
│                               │   CRM-SP 180223 · RQE 64136    │
│                               │   ─── Inter --t-meta           │
│                               │                                │
└───────────────────────────────┴────────────────────────────────┘
```

### Detalhamento
- **Fundo:** `--dg-offwhite`.
- **Coluna esquerda:** 6/12 colunas, foto ratio 3:4, full-height da seção, border-radius 14px, sombra `--shadow-lg`, overlay `--light-window`.
- **Coluna direita:** 5/12, padding-left 64px.
- **Eyebrow:** padrão.
- **Palavra-âncora "Mama"**: classe `dg-anchor-word` (clamp 80–160px), Cormorant Italic, cor `--dg-bordo` em opacity 6%. Posicionada absolutamente atrás do H2.
- **H2:** Cormorant Regular 56px, peso 500. Palavra "*opero*" em Cormorant Italic. Line-height 1.05.
- **Filete dourado:** 1px x 64px.
- **Texto-corpo:**
  - Inter Light 18px, line-height 1.7, cor `--fg-1`, max-width 480px.
  - Parágrafos curtos (1–3 linhas).
  - **Pull-quotes inline** (frases destacadas): Cormorant Italic 28–32px, cor `--dg-bordo`, peso 500, com filete dourado 1px x 24px acima e abaixo. Atravessam a leitura como respiros editoriais. Aparecem 2 vezes:
    1. *"Mama é a minha especialidade. Só mama."*
    2. *"Primeiro a gente desenha o seu decote. Depois — e só se fizer sentido — a técnica."*
- **Assinatura:** classe `dg-meta`, separador "·" em `--dg-ouro`. Precedida de filete dourado 1px x 32px.

### Mobile
- Stack vertical: foto primeiro (4:5 crop), texto abaixo.
- Palavra-âncora reduz pra 80px.
- H2 reduz pra 36px.

---

# SEÇÃO 5 — COM OU SEM PRÓTESE

### Conceito visual
**Decisão visual em duas colunas equivalentes.** Sem ícones complexos. Cada coluna ganha uma **palavra-âncora gigante em Cormorant Italic** ("Sem" / "Com") como cabeçalho. Filete dourado vertical central. Sensação de "duas portas iguais" — o ponto é mostrar que **não há caminho-default**.

### Layout

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ◆ A SUA ESCOLHA                                               │
│                                                                │
│  Com prótese ou sem prótese?                                   │
│  *Você vai saber.*                                             │
│  ─── Cormorant 48px                                            │
│                                                                │
│  Na sua avaliação, você vê os dois caminhos                    │
│  lado a lado, com fotos e plano. E escolhe                     │
│  sabendo o que cada um entrega.                                │
│  ─── Inter Light 18px                                          │
│                                                                │
│                                                                │
│  ┌──────────────────────────┬──────────────────────────┐       │
│  │                          │                          │       │
│  │     *Sem*                │     *Com*                │       │
│  │    prótese               │    prótese calibrada     │       │
│  │  ↑ Cormorant Italic      │  ↑ Cormorant Italic      │       │
│  │    72px --dg-bordo       │    72px --dg-bordo       │       │
│  │                          │                          │       │
│  │  ── filete --gold ──     │  ── filete --gold ──     │       │
│  │                          │                          │       │
│  │  Pra quem o próprio      │  Pra quem precisa de     │       │
│  │  tecido tem como         │  preenchimento que o     │       │
│  │  entregar o decote.      │  tecido sozinho não dá.  │       │
│  │                          │                          │       │
│  │  Eu reposiciono,         │  A prótese é escolhida   │       │
│  │  sustento e preencho     │  pelo desenho do decote  │       │
│  │  com o que já é seu.     │  — não pelo tamanho.     │       │
│  │                          │                          │       │
│  │  RESULTADO:              │  RESULTADO:              │       │
│  │  Colo alto, natural,     │  Colo cheio, transição   │       │
│  │  *zero corpo estranho.*  │  natural, *sem cara*     │       │
│  │                          │  *de plástico.*          │       │
│  │                          │                          │       │
│  │  INDICADA QUANDO:        │  INDICADA QUANDO:        │       │
│  │  o seio tem volume mas   │  tem vazio no colo que   │       │
│  │  está mal posicionado.   │  só preenchimento        │       │
│  │                          │  estrutural resolve.     │       │
│  │                          │                          │       │
│  └──────────────────────────┴──────────────────────────┘       │
│              ↑ filete dourado vertical 1px central             │
│                                                                │
│  ─── filete dourado 80px ───                                   │
│                                                                │
│  Em qualquer dos dois caminhos, o objetivo é o mesmo:          │
│  *decote bonito, natural, que dura.*                           │
│  ─── Cormorant Italic 28px, centralizado                       │
│                                                                │
│  [ Quero saber qual é o meu caso → ]                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Detalhamento
- **Fundo:** `--dg-offwhite`.
- **Container das duas colunas:** max-width 1080px, fundo `--dg-ivory`, radius 24px, padding 64px, sombra `--shadow-md`.
- **Divisor central:** filete vertical 1px `--rule-bordo`, full-height da área de cards. Glyph `◆` dourado 14px na altura média como "fivela".
- **Palavras-âncora "Sem" / "Com":** Cormorant Italic 72px, peso 500, cor `--dg-bordo`. Subtítulo "prótese" / "prótese calibrada" em Cormorant Regular 28px logo abaixo.
- **Filete dourado 1px x 32px** abaixo do título da coluna.
- **Texto:** Inter Light 16px, line-height 1.7, cor `--fg-1`. Palavras-chave em Cormorant Italic inline (*tecido*, *desenho*, *decote*, *zero corpo estranho*, *sem cara de plástico*).
- **Mini-overlines (RESULTADO / INDICADA QUANDO):** Inter Bold 11px uppercase letter-spacing 0.18em, cor `--dg-bordo`. Padding-top 16px.
- **Frase de fechamento:** Cormorant Italic 28px, palavra-âncora final centralizada, max-width 600px.
- **CTA inline:** padrão bordô.

### Mobile
- Duas colunas viram **tabs** (pill switch no topo: "Sem prótese" / "Com prótese"). Conteúdo abaixo, sem split visual. Pill ativo: fundo `--dg-bordo` texto `--dg-offwhite`.

---

# SEÇÃO 6 — A RÉGUA (Mapa IPC simplificado)

### Conceito visual
**Régua minimalista — não infográfico técnico.** Em vez de 6 silhuetas vetoriais animadas, a v2 usa **6 cards horizontais simples** com número grande em Cormorant Italic + descrição curta em uma linha. Card 5 ganha leve destaque (fundo nude + estrela ouro). Sensação de **escala simples como menu de degustação** — não régua de medicina.

### Layout

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ◆ A RÉGUA                                                     │
│                                                                │
│  Existe uma régua pro seu *decote.*                            │
│  Ela vai de 0 a 5.                                             │
│  ─── Cormorant 48px                                            │
│                                                                │
│  *IPC* é como eu meço o quanto o seu colo preenche             │
│  o seio numa foto a 45°.                                       │
│  Quanto maior o número, mais cheio e natural é o decote.       │
│  *O alvo é 5.*                                                 │
│  ─── Inter Light 18px                                          │
│                                                                │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  0  Vazio. Sutiã não preenche.                         │    │
│  ├────────────────────────────────────────────────────────┤    │
│  │  1  Quase nada. Decote inexistente.                    │    │
│  ├────────────────────────────────────────────────────────┤    │
│  │  2  Começo. Falta sustentação.                         │    │
│  ├────────────────────────────────────────────────────────┤    │
│  │  3  Harmônico. Sutiã enche.                            │    │
│  ├────────────────────────────────────────────────────────┤    │
│  │  4  Marcado. Elegante.                                 │    │
│  ├────────────────────────────────────────────────────────┤    │
│  │ ⭐5  Cheio natural. É aqui que a gente quer chegar.    │ ← destaque
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
│  ─── filete dourado 64px ───                                   │
│                                                                │
│  Sua avaliação começa com uma pergunta simples:                │
│  *qual é o seu IPC hoje?*                                      │
│  A partir daí, o plano se desenha.                             │
│  ─── Cormorant Italic 24px, centralizado                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Detalhamento
- **Fundo:** `--dg-offwhite`.
- **Container da escala:** max-width 720px centralizado, fundo `--dg-ivory`, radius 14px, padding 0 (linhas tocam as bordas), sombra `--shadow-sm`. Borda 1px `--rule-soft`.
- **Cada linha da escala:**
  - Padding 24px 32px.
  - Separador 1px `--rule-soft` entre linhas.
  - **Número grande:** Cormorant Italic 48px, peso 500, cor `--dg-bordo`, largura fixa 64px (alinhamento).
  - **Descrição:** Inter Regular 16px, cor `--fg-1`.
  - **Linha do 5 (destaque):**
    - Fundo `--dg-nude` em opacity 30%.
    - Estrela `⭐` (Lucide Star fill) em `--dg-ouro` 20px à esquerda do número.
    - Número e descrição em peso ligeiramente maior (Cormorant SemiBold + Inter Medium).
- **Frase-âncora de fechamento:** Cormorant Italic 24px, max-width 640px, centralizada.

### Animação
- Linhas da escala entram em sequência stagger 60ms ao scroll. Linha do 5 entra por último com leve scale 0.98 → 1.

### Mobile
- Container ocupa full-width com padding 24px.
- Número reduz pra 36px.
- Descrição reduz pra 14px.

---

# SEÇÃO 7 — PROVA

### Conceito visual
**Galeria editorial — 3 casos lado a lado.** Cada caso é um card amplo com **foto duotone respeitosa + número antes/depois grande + citação curta**. Sem sequência de 3 thumbs (a v1 mostrava antes/D30/D90 — agora simplifica pra antes/depois apenas, com nota IPC). Crop ético: silhueta, contorno do colo, jamais frontal.

### Layout

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ◆ PROVA                                                       │
│                                                                │
│  O que aconteceu com mulheres                                  │
│  *como você.*                                                  │
│  ─── Cormorant 48px                                            │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │                                                          │ │
│  │  CASO 01 · SEM PRÓTESE                                   │ │
│  │  ─── overline ───                                        │ │
│  │                                                          │ │
│  │  IPC *1* → IPC *5*                                       │ │
│  │  ─── Cormorant Italic 48px ───                           │ │
│  │                                                          │ │
│  │  ┌──────────┐         ┌──────────┐                       │ │
│  │  │  ANTES   │         │  DEPOIS  │                       │ │
│  │  │          │   →     │          │                       │ │
│  │  │ [silhu-  │         │ [silhu-  │                       │ │
│  │  │  eta]    │         │  eta]    │                       │ │
│  │  │ duotone  │         │ duotone  │                       │ │
│  │  │ bordô    │         │ ouro     │                       │ │
│  │  │ 4:5      │         │ 4:5      │                       │ │
│  │  │  ⓘ 1     │         │  ⓘ 5⭐   │                       │ │
│  │  └──────────┘         └──────────┘                       │ │
│  │                                                          │ │
│  │  *"Eu não sabia que dava pra ter esse colo*              │ │
│  │  *sem prótese."*                                         │ │
│  │                                                          │ │
│  │  34 anos · pós-amamentação                               │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  [card 02]                                                     │
│  [card 03]                                                     │
│                                                                │
│  *Fotos com IPC em 90 dias, não em 7. Resultado*               │
│  *de verdade — não inchaço.*                                   │
│  ─── Inter Light 14px, italic, --fg-2                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Detalhamento
- **Fundo:** `--dg-offwhite`.
- **Cards de caso:**
  - Max-width 1080px, padding 48px, fundo `--dg-ivory`, radius 24px, sombra `--shadow-md`.
  - Spacing entre cards: `--sp-8` (64px).
- **Eyebrow do caso:** Inter Bold 11px uppercase letter-spacing 0.18em, cor `--dg-bordo`.
- **Headline (IPC X → IPC Y):** Cormorant Italic 48px, números em peso 500 cor `--dg-bordo`, seta `→` em `--dg-ouro` peso fino. Centralizado.
- **2 thumbnails:**
  - Cada thumb: 280x350px (4:5 ratio), border-radius 14px, sombra `--shadow-sm`.
  - **Tratamento duotone:** ANTES em duotone bordô/nude (mais frio, menos saturado). DEPOIS em duotone ouro/nude (quente, luminoso). Diferença de tratamento reforça narrativa visual sem precisar de texto extra.
  - Crop respeitoso (silhueta, contorno do colo).
  - Overlay `--light-window` 135°.
- **Seta entre as duas thumbs:** glyph `→` em Cormorant 48px, cor `--dg-ouro`. Centralizada vertical entre as fotos.
- **Badges IPC** sobre cada thumb (canto inferior-direito):
  - Pill 999px, fundo `--dg-bordo`, borda 1px `--dg-ouro`, padding 8px 16px.
  - Texto: Inter SemiBold 12px `--dg-offwhite` + número Cormorant Italic 18px `--dg-ouro`.
  - Card "DEPOIS" do IPC 5: ganha estrela ⭐ inline.
- **Citação:** Cormorant Italic 22px, cor `--fg-1`, max-width 720px. Aspas em `--dg-ouro`.
- **Atribuição:** classe `dg-meta`, separador "·" em `--dg-ouro`.
- **Linha final:** Inter Light 14px italic, cor `--fg-2`, centralizada.

### Animação
- Thumbnails: ANTES aparece primeiro, depois seta cresce, depois DEPOIS aparece com fade + 8px slide.

### Mobile
- Card padding 24px.
- 2 thumbs viram stack vertical com seta vertical entre elas (`↓` em vez de `→`).

---

# SEÇÃO 8 — DEPOIMENTOS

### Conceito visual
**Mural de 4 quotes — masonry leve.** Mais enxuto que a v1: as quotes são curtíssimas (uma frase), tratamento de "destaque tipográfico" em cards menores. Sem aspas decorativas gigantes — a citação em si é o herói.

### Layout

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ◆ ELAS DIZEM                                                  │
│                                                                │
│  O que elas dizem *depois.*                                    │
│  ─── Cormorant 48px                                            │
│                                                                │
│  ┌─────────────────────┐  ┌──────────────────────────┐         │
│  │                     │  │                          │         │
│  │  *"Voltei a usar    │  │  *"Meu marido perguntou  │         │
│  │   biquíni depois    │  │   o que eu tinha feito.  │         │
│  │   de 8 anos."*      │  │   Eu respondi: 'eu       │         │
│  │                     │  │   preencho meu sutiã     │         │
│  │  ── filete --gold ──│  │   agora.'"*              │         │
│  │  M., 36             │  │                          │         │
│  │                     │  │  ── filete --gold ──     │         │
│  └─────────────────────┘  │  C., 43                  │         │
│                           └──────────────────────────┘         │
│                                                                │
│  ┌──────────────────────────┐  ┌─────────────────────┐         │
│  │  *"Parei de cortar       │  │                     │         │
│  │   foto do ombro pra      │  │  *"Tomei a decisão  │         │
│  │   cima."*                │  │   sem pressão. Foi  │         │
│  │                          │  │   a primeira vez."* │         │
│  │  ── filete --gold ──     │  │                     │         │
│  │  L., 39                  │  │  ── filete --gold ──│         │
│  │                          │  │  A., 31             │         │
│  └──────────────────────────┘  └─────────────────────┘         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Detalhamento
- **Fundo:** `--dg-offwhite` com camada `--dg-nude` 20% opacity.
- **Layout:** CSS Grid masonry, 2 colunas no desktop, 1 col no mobile. Alturas variáveis pra criar movimento.
- **Cards:**
  - Fundo `--dg-ivory`, radius 14px, padding 32px, sombra `--shadow-sm`.
  - Max-width por card varia entre 360–480px (gera mosaico).
- **Citação:** Cormorant Italic 22px (cards menores) ou 24px (maiores), peso 500, cor `--dg-grafite`. Aspas tipográficas inline normais (sem decoração gigante).
- **Filete dourado:** 1px x 32px entre citação e atribuição.
- **Atribuição:** classe `dg-meta`, formato simples "M., 36".

### Mobile
- 1 coluna, padding 24px nos cards.

---

# SEÇÃO 9 — A OFERTA + FAQ

### Conceito visual
**Bloco de oferta unificado.** Em vez de full-bleed bordô (v1), agora a oferta vive sobre `--dg-offwhite` com **um bloco central em `--dg-vinho`** carregando o investimento. Mini-FAQ logo abaixo do value stack, antes do CTA final. CTA final em **dourado preenchido** — a única cor de preenchimento dourado da página.

### Layout

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ◆ SUA AVALIAÇÃO                                               │
│                                                                │
│  *Sua avaliação.*                                              │
│  ─── Cormorant 56px ─                                          │
│                                                                │
│  Não é uma consulta de 15 minutos.                             │
│  São *90 minutos* com a Dra. Geórgia onde você sai com:        │
│  ─── Inter Light 18px                                          │
│                                                                │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  ◆  O SEU IPC HOJE                                       │ │
│  │     medido em foto, com plano visual sobre o seu corpo.  │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │  ◆  OS DOIS CAMINHOS COMPARADOS                          │ │
│  │     com prótese e sem prótese, lado a lado.              │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │  ◆  O PLANO DOS 90 DIAS                                  │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │  ◆  ORÇAMENTO POR CENÁRIO                                │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │  ◆  DECISÃO SUA                                          │ │
│  │     sem pressão, sem empurrão.                           │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│                                                                │
│  ╔══════════════════════════════════════════════════════╗     │
│  ║                                                      ║     │
│  ║   INVESTIMENTO                                       ║     │
│  ║   ─── overline --gold ───                            ║     │
│  ║                                                      ║     │
│  ║   R$ 800        |        R$ 250                      ║     │
│  ║   PRESENCIAL    |        ONLINE                      ║     │
│  ║   ─ Cormorant Italic 80px --gold/--offwhite ─        ║     │
│  ║                                                      ║     │
│  ║   *O valor da avaliação vira crédito*                ║     │
│  ║   *na sua cirurgia, em até 90 dias.*                 ║     │
│  ║                                                      ║     │
│  ╚══════════════════════════════════════════════════════╝     │
│   ↑ container --dg-vinho, radius 24, padding 64, --shadow-lg   │
│                                                                │
│                                                                │
│  ─── filete dourado 80px ───                                   │
│                                                                │
│                                                                │
│  PERGUNTAS QUE TRAVAM                                          │
│  ─── overline ───                                              │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  *"Vou ser obrigada a colocar prótese?"*          ─    │    │
│  │  Não. Muitas pacientes saem daqui com colo alto sem... │    │
│  ├────────────────────────────────────────────────────────┤    │
│  │  *"Vai ficar com cara de plástico?"*              +    │    │
│  ├────────────────────────────────────────────────────────┤    │
│  │  *"E a cicatriz?"*                                +    │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
│                                                                │
│  ─── filete dourado 80px ───                                   │
│                                                                │
│                                                                │
│  [   Quero minha avaliação →   ]                               │
│   ↑ botão DOURADO PREENCHIDO gigante                           │
│     fundo --dg-ouro, texto --dg-vinho, padding 28x56            │
│                                                                │
│  *Prefere conversar antes? WhatsApp →*                         │
│                                                                │
│  ─── filete dourado 64px ───                                   │
│                                                                │
│  8 avaliações por mês · agenda mês a mês                       │
│  Sem garantia de resultado · garantia de clareza do plano      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Detalhamento
- **Fundo da seção:** `--dg-offwhite`. Padding `--sp-21` (168px) vertical.
- **H2:** Cormorant 56px, *Sua avaliação* em italic, peso 500.
- **Lead:** palavra "*90 minutos*" em Cormorant Italic.
- **Value stack (5 itens):**
  - Container max-width 720px, fundo `--dg-ivory`, radius 14px, sombra `--shadow-sm`.
  - Cada item separado por filete 1px `--rule-soft`. Padding 24px 32px.
  - Bullet `◆` em `--dg-ouro` 14px à esquerda.
  - Título em Inter Bold 14px uppercase letter-spacing 0.12em, cor `--dg-grafite`.
  - Descrição inline ou em linha abaixo: Inter Light 14px, cor `--fg-2`.
- **Bloco de investimento:**
  - Container `--dg-vinho` (mais escuro = profundidade), radius 24px, padding 64px, sombra `--shadow-lg`, borda 1px `--dg-ouro` filete fino.
  - Overlay `--light-window` 135°.
  - Layout: 2 colunas (Presencial / Online) separadas por divisor vertical 1px `--dg-ouro`.
  - Overline "INVESTIMENTO" em `--dg-ouro` Inter Bold 11px uppercase.
  - Preços: Cormorant Italic 80px (clamp 56–80), peso 500. Presencial em `--dg-ouro`, Online em `--dg-offwhite`. "R$" reduzido pra superscript 28px.
  - Label "PRESENCIAL" / "ONLINE": Inter Bold 11px uppercase letter-spacing 0.18em.
  - Frase do crédito: Cormorant Italic 22px abaixo, max-width 600px, cor `--dg-offwhite`.
- **Mini-FAQ:**
  - Overline "PERGUNTAS QUE TRAVAM" em `--dg-bordo`.
  - Container max-width 880px.
  - Accordion com filete 1px `--rule-soft` entre items.
  - Pergunta: Cormorant Italic 22px, cor `--dg-grafite`.
  - Toggle: glyph "+/−" em Cormorant Light 28px, cor `--dg-ouro`.
  - Resposta: Inter Light 16px, line-height 1.7.
  - Item ativo ganha leve fundo `--dg-ivory` + filete dourado vertical 2px à esquerda.
- **CTA primário (DOURADO PREENCHIDO):**
  - Fundo `--dg-ouro`, texto `--dg-vinho`, padding 28px 56px, radius 8px, Inter Bold 18px.
  - Sombra `--shadow-lg`.
  - Hover: brightness 0.94, shadow spread +4px.
  - Centralizado.
  - **Esta é a única cor preenchida em ouro da página inteira.** Peso visual máximo aqui.
- **CTA secundário:** link em `--dg-bordo` border-bottom dourado.
- **Microcopy de escassez:** classe `dg-small`, separador "·" em `--dg-ouro`.

### Animação
- Value stack: itens entram em stagger 60ms ao scroll.
- Bloco de investimento: entra com fade + 12px slide-up, 600ms.
- CTA dourado: leve pulse scale 1 → 1.02 → 1 (600ms) ao chegar no viewport, **uma única vez** — sinal visual de "última chamada".

### Mobile
- Value stack mantém vertical.
- Bloco de investimento: stack vertical (Presencial em cima, divisor horizontal, Online embaixo). Preço reduz pra 56px.
- CTA dourado full-width.

---

# RODAPÉ

### Conceito visual
**Rodapé editorial mínimo.** Fundo `--dg-vinho` discreto. Filete dourado 1px no topo. Apenas 3 blocos (não 4 da v1). Sem links de navegação interna excessivos — só o essencial.

### Layout

```
─── filete dourado 1px full-width ───
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║  ◆ Geórgia Peres                                               ║
║                                                                ║
║  Dra. Geórgia Peres   |   [endereço]      |   © 2026          ║
║  CRM-SP 180223        |   WhatsApp: ...   |   São Paulo, SP   ║
║  RQE 64136            |                   |                    ║
║  Cirurgia mamária     |                   |                    ║
║                                                                ║
║  ─── filete --rule-bordo ───                                   ║
║                                                                ║
║  Aviso ético: Resultados estéticos variam. Não há garantia de  ║
║  resultado clínico. Toda imagem de paciente publicada nesta    ║
║  página foi autorizada por escrito.                            ║
║  ─── --t-meta, --fg-on-bordo-2                                 ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Detalhamento
- **Fundo:** `--dg-vinho`.
- **Filete dourado superior:** 1px x 100%.
- **Logo:** glyph `◆` + texto "Geórgia Peres" em Cormorant Italic 22px cor `--dg-offwhite`.
- **3 colunas:** Inter Light 13px, cor `--fg-on-bordo-2`. Separador vertical 1px `--rule-bordo`.
- **Aviso ético:** Inter Light 11px, cor `--fg-on-bordo-2`, max-width 880px, centralizado.

---

# COMPONENTES TRANSVERSAIS (mantidos da v1)

- **Botão Primário (bordô)** — Hero, S2, S5
- **Botão Conversão (dourado preenchido)** — apenas Seção 9
- **Card editorial padrão** — fundos `--dg-ivory` sobre off-white
- **Filete dourado decorativo** — divisores e ornamentos
- **Eyebrow padrão** — `◆` + uppercase Inter Bold 11px

---

# CHECKLIST DE FIDELIDADE (v2)

- [ ] **Foto manda na S1, S3, S4.** Tipografia respira ao lado, não dentro.
- [ ] **Bordô full-bleed aparece UMA vez (Seção 3 — A Promessa).** Não na oferta. Não no vilão (cortado).
- [ ] **Dourado preenchido aparece UMA vez (Seção 9 — CTA final).** Resto é filete.
- [ ] **Frase "Quando você se despe, a luz fica acesa" é o pico emocional.** Tratamento tipográfico tem que entregar.
- [ ] **CTA aparece 4 vezes** (Hero S1, Identificação S2, Decisão S5, Oferta S9). Nem mais, nem menos.
- [ ] **Mini-FAQ tem 3 perguntas, não 8.** Só objeções de compra.
- [ ] **Vocabulário "sentir, despir, luz, espelho, biquíni"** domina sobre "técnica, protocolo, mecanismo".
- [ ] **Inter Light 18–22px** em corpos longos (era 16px na v1) — leitura mais relaxada, ar de revista.
- [ ] **Nenhuma seção é "técnica visível":** sem timeline numerada, sem silhuetas vetoriais animadas, sem 3-thumbs (antes/D30/D90 → vira antes/depois apenas).

---

# MOBILE — RITMO RECOMENDADO

A v2 funciona ainda melhor no mobile porque tem **menos seções e mais respiro**. Diretrizes:

1. **Hero ocupa 100vh** com foto no topo (55vh) + texto + CTA sticky.
2. **Cada seção respira `--sp-8` (64px) entre elas.**
3. **CTA sticky no rodapé** durante toda a navegação (com toggle pra esconder no scroll-up).
4. **Frases poéticas (S2, S3) ganham ainda mais ar** — line-height 1.7 mínimo.
5. **Tabs em vez de duas colunas** na S5 (Sem/Com prótese).
6. **2 thumbs da prova viram stack vertical** com seta vertical entre.

---

# RESUMO DA EXPERIÊNCIA EMOCIONAL ESPERADA

A jornada visual da v2, traduzida em sensações que a paciente deve sentir em cada seção:

| Seção | Sensação alvo |
|---|---|
| 1. Hero | "Isso é pra mim. Eu mereço isso." |
| 2. Identificação | "Eles me conhecem. Esse texto foi escrito sobre mim." |
| 3. A Promessa | "Eu quero isso. Eu já me vi assim." (clímax bordô) |
| 4. A Especialista | "Ela é diferente. Ela me entende. Ela não vai me empurrar." |
| 5. Com/Sem Prótese | "Tem caminho pra mim, sem ser obrigatório." (alívio) |
| 6. A Régua | "Existe método. Não é loteria." (confiança) |
| 7. Prova | "Mulheres como eu fizeram isso. Elas estão bem." |
| 8. Depoimentos | "Eu também vou dizer isso depois." |
| 9. Oferta | "Eu vou agendar agora." (decisão) |

**Cada seção entrega uma emoção. Se uma seção não entrega, ela é peso morto e deve ser cortada.**
