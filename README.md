# Site Dra. Geórgia Peres

Site institucional + landing pages especialidade.
HTML/CSS estático, sem build, deploy via GitHub Pages.

**Dra. Geórgia Peres** · Cirurgiã plástica · CRM-SP 180223 · RQE 64136
São Paulo · Rua Escobar Ortiz, 335

## Estrutura

```
site/
├── index.html         Homepage da Dra. (placeholder até reformulação completa)
├── mamas/             Landing page de mama (= ex-site-v4)
├── _docs/             Copy, spec visual, prompts de IA — não publicado
├── _archive/          Versões anteriores (v2, v3)
└── README.md
```

URLs após deploy:
- `/` → homepage
- `/mamas/` → landing especialidade mama

## Como rodar local

Abrir direto:
```
open index.html
```

Ou servir com qualquer http server:
```
python3 -m http.server 8000
# http://localhost:8000
```

## Deploy

Push pra `main` → GitHub Pages atualiza em ~1 min.

## Stack

- HTML5 + CSS3 + JS vanilla
- Cormorant Garamond + Inter (Google Fonts)
- Sem dependências, sem build, sem Node
- Mobile-first

## Identidade de marca

Definida em [`../design-sys/`](../design-sys/) (fora do repo — pasta-pai do workspace).
Paleta autoritativa: bordô `#650810`, dourado `#C9A24A`, nude `#D6C0B2`, off-white `#F1EBEB`.

## Roadmap

- [x] Landing `/mamas/` (v4)
- [ ] Homepage institucional completa
- [ ] Outras especialidades (a definir com a Dra.)
- [ ] Apontar domínio próprio quando aprovado
