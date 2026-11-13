### Nomes dos alunos do grupo:

Enzo Rocha Vecchio

Douglas de Siqueira Vicente

Henrique Santos Brunheiro

Maria Eduarda Lima Pereira

Murilo Queiroz Braga

### Link do Site:

https://e-vecchio.github.io/Floricultura-Flor-Extra/

### Link do vídeo de apresentação:

https://youtu.be/Cef5OJibZiw

## Introdução

A organização escolhida foi a **Floricultura Flor Extra**, uma floricultura
localizada em São Paulo/SP que atua na produção de decorações florais para
casamentos, eventos corporativos e buquês para diversas ocasiões, além de
comercializar plantas ornamentais, sementes e material de jardinagem.

O objetivo do site é apresentar os serviços da empresa de forma clara e
acessível, permitindo que clientes conheçam o catálogo de produtos, entrem
em contato pelos canais disponíveis (telefone, WhatsApp ou formulário) e
solicitem orçamentos diretamente pela página dedicada a esse fim.

O projeto foi desenvolvido em duas etapas. Na primeira, o foco foi a
estruturação do conteúdo com **HTML5 semântico**, sem CSS ou JavaScript. Na
etapa atual, o site recebeu **CSS**, responsável pela identidade visual e pelo
layout, e **JavaScript**, responsável pela interatividade das páginas.


## Desenvolvimento


### Contato com a organização


**Tipo de contato realizado:** WhatsApp e Presencialmente


O contato inicial com a Floricultura Flor Extra foi feito por WhatsApp
e agendado com antecedência para garantir a disponibilidade do
responsável. Durante a conversa, o grupo apresentou o objetivo do trabalho
acadêmico e fez uma breve entrevista. As respostas obtidas ajudaram a
direcionar o conteúdo e a organização das páginas do site, especialmente as
seções de Serviços, Casamentos, Eventos Corporativos e Jardinagem.


###  Prova de Contato

<img width="240" height="180" alt="654868603-7887acf1-dd84-43be-be6a-effc1150446e" src="https://github.com/user-attachments/assets/48edebb1-904e-4d39-8a76-cac1e644df65" />

### Processo de desenvolvimento do site


O site foi planejado com 10 páginas interligadas (Início, Sobre Nós,
Serviços, Casamentos, Buquês, Eventos Corporativos, Plantas & Jardinagem,
Galeria, Orçamento e Contato), cobrindo as principais linhas de produtos e
serviços levantadas junto à organização. Os arquivos foram organizados em
pastas: a página inicial fica na raiz, as demais em `paginas/` e os recursos
(logo, imagens, vídeo, estilos e scripts) em `assets/`.

##### Uso de IA
Utilizamos quase exclusivamente o Claude Sonnet 5.5 durante o desenvolvimento do design inicial do site, na estruturação e organização dos elementos visuais, ajustes de cores e detalhes estéticos em CSS.

#### HTML

Todas as páginas usam a estrutura semântica (`header`, `nav`, `main`,
`section`, `article`, `footer`) e compartilham o mesmo menu de navegação e
rodapé. O conteúdo inclui tabela de horário de funcionamento, vídeo
institucional (`video`) na página inicial, logo em SVG e links diretos de
telefone (`tel:`) e WhatsApp.

#### CSS

Utilizamos o CSS para desenvolver a identidade visual da Floricultura Flor-Extra, aplicando cores, fontes, espaçamentos e elementos gráficos que transmitem elegância e delicadeza. Também organizamos o layout das páginas, garantindo uma apresentação harmoniosa, intuitiva e responsiva, facilitando a navegação e proporcionando uma melhor experiência ao usuário.

#### JavaScript

O JavaScript foi adicionado para tornar as páginas mais dinâmicas e melhorar a
experiência de quem usa o site. As funcionalidades implementadas foram:


Os scripts foram mantidos em arquivo separado (pasta `assets/`) e ligados às
páginas por `<script>`, mantendo o HTML limpo e facilitando a manutenção.

#### Principais desafios

Entre os principais desafios técnicos enfrentados pelo grupo foram:

Garantir que toda a estrutura semântica fosse usada de forma consistente nas
  10 páginas.
  
  Validar todas as páginas no W3C Nu Html Checker e o CSS no W3C CSS Validation
    Service, corrigindo os erros apontados antes da publicação.
  
  Manter o layout consistente e responsivo em todas as páginas, sem repetir
    regras de estilo desnecessárias. 
  
  Fazer o JavaScript funcionar corretamente em todas as páginas, ajustando
    caminhos de arquivos entre a raiz e a pasta `paginas/`.
  
Publicar o site no GitHub Pages e entender o funcionamento do processo de
  deploy inclusive aprendendo, na prática, que é preciso esperar alguns
  minutos depois de cada update para que a nova versão do site realmente entre
  no ar, já que testar o link rápido demais pode mostrar uma versão antiga
  da página ou simplesmente dar o famoso erro 404.

## W3C Validator
<img width="240" height="180" alt="W3C validator" src="https://github.com/user-attachments/assets/f03ebf53-d3e9-46f7-abb0-cf11d6848328" />

## CSS Validation Service
<img width="240" height="180" alt="CSS validator" src="https://github.com/user-attachments/assets/62ffc51c-e645-453e-862b-ecea8bd6f75a" />

## Conclusão


Este projeto ajudou o grupo a colocar em prática conceitos de HTML semântico,
CSS e JavaScript em um projeto com finalidade real, indo além de exercícios
isolados. Ficou claro o papel de cada tecnologia: o HTML organiza o conteúdo,
o CSS cuida da apresentação e o JavaScript adiciona comportamento.

A necessidade de organizar o conteúdo pensando em uma empresa de verdade
trouxe desafios que não apareceriam em um exemplo fictício, como lidar com
informações de contato reais, ajustar a estrutura de pastas para manter o
projeto organizado e validar o site tanto tecnicamente (W3C, para HTML e CSS)
quanto na prática (testando funcionalidades e links depois de publicado).
