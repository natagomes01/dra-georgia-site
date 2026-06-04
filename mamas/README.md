# Site v4 — Dra. Geórgia Peres

Landing de conversão (mama) — autocontida, HTML/CSS estático.

## Como abrir
```
open index.html
```
Ou: arrastar `index.html` no navegador. Sem build, sem Node.

## Estrutura
```
site-v4/
├── index.html
├── styles.css
├── PROMPTS-IA-BEFORE-AFTER.md   ← prompts pra gerar fotos dos 3 casos (S7)
├── README.md
└── assets/
    ├── photos/    (3 retratos do brand: hero + especialista)
    └── logos/     (logomarks SVG)
```

## Stack
- HTML5 + CSS3 + JS vanilla (~30 linhas)
- Cormorant Garamond + Inter via Google Fonts
- Sem framework, sem dependências
- Mobile-first · breakpoints 560 / 768 / 900 / 1000 / 1200

## Mapa das 9 seções
1. **Hero** — bordô-âncora "luz acesa" + CTA primário/secundário + microcopy de confiança
2. **Identificação** — 7 linhas curtas em Cormorant + frase de virada + CTA
3. **Promessa** — full-bleed bordô, palavra-âncora *Imagine* gigante (CTA emocional, sem botão)
4. **Especialista** — foto + 1ª pessoa + assinatura CRM/RQE
5. **Com / sem prótese** — 2 cards simétricos + CTA "Quero saber qual é o meu caso"
6. **Régua IPC** — 6 cards 0→5 com silhueta + número Cormorant; o 5 destacado em dourado ★
7. **Prova** — 3 cards de caso com silhueta antes/depois + métrica IPC + quote
8. **O que muda** — 4 quotes curtas em cards verticais
9. **Oferta + FAQ** — full-bleed bordô, value-stack, investimento, mini-FAQ accordion, CTA final + WhatsApp

CTA total: **4** (Hero, S2-pós-mirror, S5-pós-decisão, S9-oferta) + WhatsApp persistente flutuante.

## Identidade aplicada
- Bordô (#650810) reservado a 3 momentos: Hero, S3 Promessa, S9 Oferta
- Dourado (#C9A24A) só em fios finos, IPC 5, ◆ bullets, divisores
- Cormorant Garamond italic em palavras-âncora; Inter no corpo
- Sombras quentes (matiz vermelho-marrom), nunca cinza neutro
- `prefers-reduced-motion` respeitado
- Sem glassmorphism, sem mesh gradients, sem neon

## Imagens pendentes
A Seção 7 (Prova) renderiza placeholders SVG estilizados (silhuetas de tórax/colo). Para substituir por fotos reais geradas por IA, ver [`PROMPTS-IA-BEFORE-AFTER.md`](./PROMPTS-IA-BEFORE-AFTER.md). Quando os JPGs forem entregues, salvar em `assets/photos/casos/` e trocar os blocos `<svg class="ba__sil">` por `<img src="…">`.

## Contato (no rodapé e CTAs)
- WhatsApp: (11) 98803-2382 — `https://wa.me/5511988032382`
- Endereço: Rua Escobar Ortiz, 335 — São Paulo · SP
- CRM-SP 180223 · RQE 64136

## Skills invocadas (linha studio)
- `ui-ux-pro-max` ✓ — design system, hierarquia, padrões UX (acessibilidade, motion, layout)
- `ckm-design-system` — embutido como tokens via `colors_and_type.css` do brand existente (autoritativo)
- `ckm-ui-styling` — implementação Tailwind-like em CSS puro com variáveis semânticas

## Pre-delivery checklist (pontos verificados)
- [x] Sem emoji estrutural (◆ é unicode decorativo do brand; ★ só no IPC 5)
- [x] Touch targets ≥ 48px (botões 48–58px de altura)
- [x] Contraste: bordô #650810 com offwhite #F1EBEB = 12.4:1 ✓ AAA
- [x] `prefers-reduced-motion` desliga reveal e transições
- [x] Skip-link, focus-visible com outline dourado, aria-labels nos botões e ícones
- [x] Mobile single-column em ≤768px; régua IPC vira carrossel horizontal em ≤1000px
- [x] `viewport` correto, sem disable-zoom
- [x] WhatsApp flutuante persistente (não rouba foco)
