/**
 * Floricultura Flor-Extra — comportamento do site (Entrega 2)
 *
 * Tudo aqui é melhoria progressiva: a validação básica dos formulários continua
 * sendo feita pelo HTML5 nativo (required, pattern, type="email", type="tel"...),
 * e o site segue navegável se o JavaScript estiver desativado.
 *
 * Componentes (cada um responde a eventos do usuário):
 *  1. Menu de navegação recolhível em telas pequenas  (click / keydown)
 *  2. Máscara de telefone                             (input)
 *  3. Contador de caracteres dos campos de texto      (input / reset)
 *  4. Valor em reais da faixa de orçamento            (input)
 *  5. Feedback visual de campos válidos/inválidos     (blur / change / invalid)
 *  6. Envio dos formulários via WhatsApp              (submit)
 *  7. Selo "aberto agora / fechado agora"             (carga da página)
 */
(function () {
  "use strict";

  var WHATSAPP = "5511958748311";
  var HORARIO = { abre: 8, fecha: 20, diaFechado: 0 }; // domingo fechado

  /* 1. Menu recolhível ---------------------------------------------------- */
  function iniciarMenu() {
    var nav = document.querySelector("header nav");
    var lista = nav && nav.querySelector("ul");
    if (!lista) { return; }

    var botao = document.createElement("button");
    botao.type = "button";
    botao.className = "nav-toggle";
    botao.setAttribute("aria-expanded", "false");
    botao.setAttribute("aria-controls", "menu-principal");
    botao.textContent = "Menu";

    lista.id = "menu-principal";
    nav.classList.add("nav-recolhivel");
    nav.insertBefore(botao, lista);

    function alternar(aberto) {
      nav.classList.toggle("aberto", aberto);
      botao.setAttribute("aria-expanded", String(aberto));
      botao.textContent = aberto ? "Fechar menu" : "Menu";
    }

    botao.addEventListener("click", function () {
      alternar(botao.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape" && nav.classList.contains("aberto")) {
        alternar(false);
        botao.focus();
      }
    });
  }

  /* 2. Máscara de telefone: (11) 91234-5678 ------------------------------- */
  function formatarTelefone(valor) {
    var d = valor.replace(/\D/g, "").slice(0, 11);
    if (d.length === 0) { return ""; }
    if (d.length <= 2) { return "(" + d; }

    var ddd = d.slice(0, 2);
    var resto = d.slice(2);
    if (resto.length <= 4) { return "(" + ddd + ") " + resto; }

    var corte = d.length <= 10 ? 4 : 5;
    return "(" + ddd + ") " + resto.slice(0, corte) + "-" + resto.slice(corte);
  }

  function iniciarMascaraTelefone() {
    document.querySelectorAll('input[type="tel"]').forEach(function (campo) {
      campo.addEventListener("input", function () {
        campo.value = formatarTelefone(campo.value);
      });
    });
  }

  /* 3. Contador de caracteres -------------------------------------------- */
  function iniciarContadores() {
    document.querySelectorAll("textarea[maxlength]").forEach(function (campo) {
      var contador = document.createElement("small");
      contador.className = "contador";
      campo.insertAdjacentElement("afterend", contador);

      function atualizar() {
        contador.textContent = campo.value.length + " / " + campo.maxLength + " caracteres";
      }

      campo.addEventListener("input", atualizar);
      if (campo.form) {
        // o reset só altera o valor depois do evento; espera o ciclo seguinte
        campo.form.addEventListener("reset", function () { setTimeout(atualizar, 0); });
      }
      atualizar();
    });
  }

  /* 4. Faixa de orçamento em reais --------------------------------------- */
  function iniciarFaixaOrcamento() {
    document.querySelectorAll('input[type="range"]').forEach(function (faixa) {
      var saida = document.createElement("output");
      saida.className = "valor-faixa";
      saida.htmlFor = faixa.id;
      saida.setAttribute("aria-live", "off");
      faixa.insertAdjacentElement("afterend", saida);

      function atualizar() {
        saida.value = Number(faixa.value).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 0
        });
      }

      faixa.addEventListener("input", atualizar);
      if (faixa.form) {
        faixa.form.addEventListener("reset", function () { setTimeout(atualizar, 0); });
      }
      atualizar();
    });
  }

  /* Data do evento: não permite datas passadas --------------------------- */
  function limitarDatas() {
    var hoje = new Date();
    var iso = hoje.getFullYear() + "-" +
      String(hoje.getMonth() + 1).padStart(2, "0") + "-" +
      String(hoje.getDate()).padStart(2, "0");
    document.querySelectorAll('input[type="date"]').forEach(function (campo) {
      campo.min = iso;
    });
  }

  /* 5. Feedback visual de validação -------------------------------------- */
  function iniciarFeedbackValidacao() {
    document.querySelectorAll("form").forEach(function (form) {
      function marcar(evento) {
        if (/^(INPUT|SELECT|TEXTAREA)$/.test(evento.target.tagName)) {
          evento.target.classList.add("campo-tocado");
        }
      }

      form.addEventListener("focusout", marcar);
      form.addEventListener("change", marcar);
      form.addEventListener("invalid", marcar, true); // "invalid" não propaga: captura

      form.addEventListener("reset", function () {
        form.querySelectorAll(".campo-tocado").forEach(function (campo) {
          campo.classList.remove("campo-tocado");
        });
      });
    });
  }

  /* 6. Envio dos formulários ---------------------------------------------- */
  // Não há servidor próprio: ao enviar, o formulário (já validado pelo HTML5)
  // monta a mensagem e abre o WhatsApp da loja com o texto pronto.
  function textoDoRotulo(elemento) {
    return elemento ? elemento.textContent.replace(/\*/g, "").replace(/\s+/g, " ").trim() : "";
  }

  function nomeDoCampo(campo) {
    if (campo.type === "radio") {
      return textoDoRotulo(campo.closest("fieldset") && campo.closest("fieldset").querySelector("legend"));
    }
    var rotulo = campo.id && document.querySelector('label[for="' + campo.id + '"]');
    return textoDoRotulo(rotulo || campo.closest("label")) || campo.name;
  }

  function valorDoCampo(campo) {
    if (campo.tagName === "SELECT") { return campo.options[campo.selectedIndex].text; }
    if (campo.type === "radio") { return textoDoRotulo(document.querySelector('label[for="' + campo.id + '"]')); }
    if (campo.type === "checkbox") { return "Sim"; }
    if (campo.type === "date") { return campo.value.split("-").reverse().join("/"); }
    if (campo.type === "range") {
      return Number(campo.value).toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
    }
    return campo.value.trim();
  }

  function montarMensagem(form) {
    var assunto = form.id === "form-orcamento" ? "solicitar um orçamento" : "entrar em contato";
    var linhas = ["Olá, Flor-Extra! Vim pelo site e gostaria de " + assunto + "."];

    Array.prototype.forEach.call(form.elements, function (campo) {
      var ehBotao = campo.tagName === "BUTTON" || campo.tagName === "OUTPUT" ||
        campo.type === "submit" || campo.type === "reset";
      var semMarcacao = (campo.type === "radio" || campo.type === "checkbox") && !campo.checked;
      var ehAceite = campo.type === "checkbox" && campo.required; // consentimento não precisa ir na mensagem
      if (ehBotao || semMarcacao || ehAceite || !campo.value) { return; }
      linhas.push(nomeDoCampo(campo) + ": " + valorDoCampo(campo));
    });
    return linhas.join("\n");
  }

  function iniciarEnvio() {
    document.querySelectorAll("#form-contato, #form-orcamento").forEach(function (form) {
      form.addEventListener("submit", function (evento) {
        evento.preventDefault(); // o navegador já validou os campos antes deste evento

        var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(montarMensagem(form));
        window.open(url, "_blank", "noopener");

        var aviso = form.querySelector(".mensagem-form");
        if (!aviso) {
          aviso = document.createElement("p");
          aviso.className = "mensagem-form";
          aviso.setAttribute("role", "status");
          aviso.tabIndex = -1;
          form.appendChild(aviso);
        }
        aviso.textContent = "Tudo certo! Abrimos o WhatsApp com a sua mensagem pronta — é só enviar. ";
        var link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = "Não abriu? Clique aqui.";
        aviso.appendChild(link);
        aviso.focus();

        form.reset();
      });
    });
  }

  /* 7. Selo aberto/fechado (página inicial) ------------------------------- */
  function iniciarStatusFuncionamento() {
    var secao = document.getElementById("funcionamento");
    var tabela = secao && secao.parentElement.querySelector("table");
    if (!tabela) { return; }

    var partes = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Sao_Paulo",
      weekday: "short",
      hour: "numeric",
      hourCycle: "h23"
    }).formatToParts(new Date());

    var dias = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    var dia = dias[partes.filter(function (p) { return p.type === "weekday"; })[0].value];
    var hora = Number(partes.filter(function (p) { return p.type === "hour"; })[0].value);

    var aberto = dia !== HORARIO.diaFechado && hora >= HORARIO.abre && hora < HORARIO.fecha;
    var proxima = "abre amanhã às 08h";
    if (dia !== HORARIO.diaFechado && hora < HORARIO.abre) { proxima = "abre hoje às 08h"; }
    else if (dia === 6 || dia === HORARIO.diaFechado) { proxima = "abre segunda às 08h"; }

    var selo = document.createElement("p");
    selo.className = "selo " + (aberto ? "selo-aberto" : "selo-fechado");
    selo.textContent = aberto ? "Aberto agora · fecha às 20h" : "Fechado agora · " + proxima;
    tabela.parentElement.insertBefore(selo, tabela);
  }

  /* Inicialização --------------------------------------------------------- */
  iniciarMenu();
  iniciarMascaraTelefone();
  iniciarContadores();
  iniciarFaixaOrcamento();
  limitarDatas();
  iniciarFeedbackValidacao();
  iniciarEnvio();
  iniciarStatusFuncionamento();
})();
