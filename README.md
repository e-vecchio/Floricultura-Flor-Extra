# Floricultura Flor-Extra — Website (Entrega 1)

> ⚠️ **Atenção, grupo:** os campos marcados com `[PREENCHER]` abaixo precisam
> ser completados por vocês antes da entrega. Eu não posso preencher a
> identificação do grupo, o link do site já hospedado, nem o relato da
> visita/entrevista com a foto/print de comprovação, pois isso precisa ser
> feito e comprovado por vocês de verdade.

## 1. Identificação do Grupo

| Nome completo | RGM | Usuário no GitHub |
|---|---|---|
| [PREENCHER] | [PREENCHER] | [PREENCHER] |
| [PREENCHER] | [PREENCHER] | [PREENCHER] |
| [PREENCHER] | [PREENCHER] | [PREENCHER] |

## 2. Link do Website Hospedado e Validação W3C

- **Site hospedado (GitHub Pages / Netlify):** [PREENCHER — ex: https://usuario.github.io/nome-do-repositorio/]
- **Validação W3C:** Todas as 10 páginas foram checadas localmente com o
  validador HTML5 (mesmo motor usado pelo [W3C Validator](https://validator.w3.org/nu/))
  e não apresentaram erros. Após publicar o site, valide cada página também
  em https://validator.w3.org/nu/ e cole aqui os links dos resultados:
  - index.html: [PREENCHER]
  - sobre.html: [PREENCHER]
  - servicos.html: [PREENCHER]
  - casamentos.html: [PREENCHER]
  - buques.html: [PREENCHER]
  - eventos-corporativos.html: [PREENCHER]
  - jardinagem.html: [PREENCHER]
  - galeria.html: [PREENCHER]
  - orcamento.html: [PREENCHER]
  - contato.html: [PREENCHER]

## 3. Introdução — Organização Escolhida

A organização escolhida foi a **Floricultura Flor-Extra**, uma floricultura
localizada em São Paulo/SP que atua na produção de decorações florais para
casamentos, eventos corporativos, buquês para diversas ocasiões e também
comercializa plantas ornamentais, sementes e material de jardinagem. A
empresa foi encontrada a partir do cardápio digital disponível em
`https://floriculturaflorextra.igadelivery.com.br/menu`.

[PREENCHER: complementem esta introdução com o que aprenderam durante a
visita/entrevista — desde quando a empresa existe, quantos funcionários tem,
diferenciais, etc.]

## 4. Relato e Comprovação do Contato

**Tipo de contato realizado:** [PREENCHER — presencial / Zoom / Meet]

**Data e horário:** [PREENCHER]

**Responsável entrevistado (nome/cargo):** [PREENCHER]

**Relato da visita/entrevista:**

[PREENCHER — descrevam em detalhes como foi a visita ou a reunião: como
agendaram, quem os recebeu, quais perguntas fizeram, o que aprenderam sobre
o funcionamento do negócio, dificuldades e facilidades do contato, etc.
Lembrem-se: conversas apenas por WhatsApp/Discord não são aceitas como única
forma de comprovação.]

**Comprovação (foto/print do contato):**

[PREENCHER — insiram aqui a imagem, por exemplo:]
`![Foto da visita](caminho/para/foto-visita.jpg)`

## 5. Conclusão — Reflexão do Grupo

[PREENCHER — reflitam sobre os aprendizados desta etapa: dificuldades ao
estruturar o HTML semântico, ao criar o formulário com validação nativa, ao
gravar/inserir áudio e vídeo, ao validar no W3C, ao hospedar no GitHub
Pages, e ao entrar em contato com uma empresa real.]

---

## Sobre o Projeto (Entrega 1)

Estrutura em HTML5 puro (sem CSS ou estilização visual), conforme o escopo
desta etapa.

### Páginas do site (10 páginas interligadas)

| Página | Arquivo |
|---|---|
| Início | `index.html` |
| Sobre Nós | `sobre.html` |
| Serviços | `servicos.html` |
| Casamentos | `casamentos.html` |
| Buquês | `buques.html` |
| Eventos Corporativos | `eventos-corporativos.html` |
| Plantas & Jardinagem | `jardinagem.html` |
| Galeria (contém vídeo) | `galeria.html` |
| Orçamento (formulário) | `orcamento.html` |
| Contato (formulário + áudio) | `contato.html` |

### Requisitos técnicos atendidos

- **Estrutura semântica** (`header`, `nav`, `main`, `section`, `article`,
  `footer`) em todas as páginas.
- **Formulário de contato** (`contato.html`) e **formulário de orçamento**
  (`orcamento.html`) com validação nativa do HTML5: `required`, `minlength`,
  `maxlength`, `pattern`, `type="email"`, `type="tel"`, `type="date"`,
  `type="number"`, `type="range"`, `select`, `radio`, `checkbox`.
- **Áudio**: mensagem de boas-vindas em `contato.html` (`<audio>`).
- **Vídeo**: vídeo institucional em `index.html` e vídeo de bastidores em
  `galeria.html` (`<video>`), com faixa de legenda (`<track>`) e texto
  alternativo para navegadores sem suporte.
- **Validação W3C**: todas as páginas foram testadas com o mesmo motor de
  validação do W3C (Nu Html Checker) e não apresentaram erros. Recomenda-se
  reconferir em https://validator.w3.org/nu/ após a hospedagem.

### Estrutura de pastas

```
/
├── index.html
├── sobre.html
├── servicos.html
├── casamentos.html
├── buques.html
├── eventos-corporativos.html
├── jardinagem.html
├── galeria.html
├── orcamento.html
├── contato.html
├── README.md
└── assets/
    ├── img/     (fotos — ver LEIA-ME.txt)
    ├── video/   (vídeos — ver LEIA-ME.txt)
    └── audio/   (áudio — ver LEIA-ME.txt)
```

### Como hospedar no GitHub Pages

1. Crie um repositório no GitHub e envie (`push`) todos estes arquivos.
2. Vá em **Settings > Pages**.
3. Em "Branch", selecione `main` e a pasta `/root`, depois **Save**.
4. Aguarde alguns minutos e acesse o link gerado pelo GitHub (algo como
   `https://usuario.github.io/nome-do-repositorio/`).
5. Cole esse link na seção 2 deste README.

### Observação sobre conteúdo de mídia

As imagens, vídeos e áudio referenciados no HTML são **placeholders**: os
arquivos ainda precisam ser adicionados nas pastas `assets/img`,
`assets/video` e `assets/audio` (veja os arquivos `LEIA-ME.txt` em cada
pasta). Isso não impede a validação W3C, pois o validador verifica apenas a
sintaxe do HTML, não a existência dos arquivos de mídia — mas é importante
adicionar conteúdo real antes da entrega final/apresentação.
