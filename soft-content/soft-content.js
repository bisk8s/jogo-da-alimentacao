var softContent = [
  {
    languageLabel: "Pt-Br",
    languageClass: "pt-br",

    contentTitle: GAME_TITLE,

    contentPages: [
      {
        pageTitle: "Splash Screen",
        pageId: "splash-screen",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "splash-screen/page.js",
        pageVarBase: "pageSplashScreen",
        pageActive: true,
      },
      {
        pageTitle: "Início",
        pageId: "intro",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "intro/page.js",
        pageVarBase: "pageIntro",
        pageActive: true,
        pageContent: {
          btnIntro: "Começar",
        },
      },
      {
        pageTitle: "Abertura",
        pageId: "opening",
        pageClass: "message-page",
        pageAttribute: "",
        pageFilePath: "messagePage/page.js",
        pageVarBase: "pageMessage",
        pageActive: true,
        pageContent: {
          nextText:
            "\
            <p>\
              Hoje, você vai fazer compras em um supermercado!\
            </p>\
            <p>&nbsp;</p>\
            <p>\
              Sua missão é ajudar três personagens. Cada um deles fez uma consulta a um nutricionista e recebeu uma dieta que indica os nutrientes que precisam priorizar para manter o corpo saudável.\
            </p>\
            <p>\
              O seu desafio é escolher os alimentos corretos para cada personagem considerando a dieta para um dia.\
            </p>\
            <p>\
              Selecione seu personagem para começar.\
            </p>\
            ",
          bntNext: "Escolher",
        },
      },
      {
        pageTitle: "Seleção de Personagem",
        pageId: "charSelection",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "charSelection/page.js",
        pageVarBase: "charSelection",
        pageActive: true,
        pageContent: {
          nameChar1: "Manu",
          nameChar2: "João",
          nameChar3: "Ana",
          selectText: "Selecionar",
        },
      },
      {
        pageTitle: "Controles",
        pageId: "controlls",
        pageClass: "message-page",
        pageAttribute: "",
        pageFilePath: "messagePage/page.js",
        pageVarBase: "pageMessage",
        pageActive: true,
        pageContent: {
          nextText:
            "<p>Clique e arraste o indicador na tela para caminhar pelo corredor do supermercado e encontrar os alimentos que [char-name] deve priorizar na dieta.</p>",
          bntNext: "Começar",
        },
      },
      {
        pageTitle: "Descrição",
        pageId: "description",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "description/page.js",
        pageVarBase: "pageDescription",
        pageActive: true,
        pageContent: {
          nameLabel: "NOME:",
          ageLabel: "IDADE:",
          statusLabel: "SITUAÇÃO ATUAL:",
          missionLabel: "DIETA DE [char-name]:",
          bntDescription: "Jogar",
        },
      },

      {
        pageTitle: "Mercado",
        pageId: "gameplay",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "gameplay/page.js",
        pageVarBase: "pageGameplay",
        pageActive: true,
        pageContent: {
          tipsText: "Dicas",
          choicesText: "Sacola",
        },
      },
      {
        pageTitle: "Suas Escolhas",
        pageId: "choices",
        pageClass: "hasFreezer",
        pageAttribute: "",
        pageFilePath: "choices/page.js",
        pageVarBase: "pageChoices",
        pageActive: true,
        pageContent: {
          tipsText: "Dicas",
          choicesText: "Sacola",
          pageTitle: "Suas Escolhas",
        },
      },
      {
        pageTitle: "Lipídios",
        pageId: "fats",
        pageClass: "hasFreezer",
        pageAttribute: "",
        pageFilePath: "fats/page.js",
        pageVarBase: "pageFats",
        pageActive: true,
        pageContent: {
          tipsText: "Dicas",
          choicesText: "Sacola",
          pageTitle: "Lipídios",
        },
      },
      {
        pageTitle: "Proteinas",
        pageId: "prots",
        pageClass: "hasFreezer",
        pageAttribute: "",
        pageFilePath: "proteins/page.js",
        pageVarBase: "pageProteins",
        pageActive: true,
        pageContent: {
          tipsText: "Dicas",
          choicesText: "Sacola",
          pageTitle: "Proteínas",
        },
      },
      {
        pageTitle: "Vitaminas",
        pageId: "vits",
        pageClass: "hasFreezer",
        pageAttribute: "",
        pageFilePath: "vitamins/page.js",
        pageVarBase: "pageVitamins",
        pageActive: true,
        pageContent: {
          tipsText: "Dicas",
          choicesText: "Sacola",
          pageTitle: "Vitaminas e Sais Minerais",
        },
      },
      {
        pageTitle: "Carboidratos",
        pageId: "carbs",
        pageClass: "hasFreezer",
        pageAttribute: "",
        pageFilePath: "carbs/page.js",
        pageVarBase: "pageCarbs",
        pageActive: true,
        pageContent: {
          tipsText: "Dicas",
          choicesText: "Sacola",
          pageTitle: "Carboidratos",
        },
      },

      {
        pageTitle: "Dicas",
        pageId: "tips",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "tips/page.js",
        pageVarBase: "pageTips",
        pageActive: true,
        pageContent: {
          tipsText:
            "Preste atenção às informações sobre o perfil de cada personagem e a \
            dieta indicada para eles. Isso vai ajudá-lo a selecionar os alimentos \
            corretos e completar as metas de nutrientes para cada personagem. Fique \
            atento também aos feedbacks do jogo, para garantir que você esteja \
            selecionando a quantidade correta de itens em cada prateleira. Boa sorte!",
        },
      },
      {
        pageTitle: "Proxima Fase",
        pageId: "newChar",
        pageClass: "message-page",
        pageAttribute: "",
        pageFilePath: "messagePage/page.js",
        pageVarBase: "pageMessage",
        pageActive: true,
        pageContent: {
          nextText:
            "\
            <p>Legal!</p>\
            <p>&nbsp;</p>\
            <p>Agora selecione um novo personagem.</p>\
            ",
          bntNext: "Continuar",
        },
      },
      {
        pageTitle: "Fim",
        pageId: "ending",
        pageClass: "message-page",
        pageAttribute: "",
        pageFilePath: "messagePage/page.js",
        pageVarBase: "pageMessage",
        pageActive: true,
        pageContent: {
          nextText:
            "\
            <p>Fim de jogo!</p>\
            <p>&nbsp;</p>\
            <p>Você analisou a dieta de cada personagem e encontrou alimentos com os nutrientes que devem ser priorizados nesse momento. Se quiser jogar novamente, clique em reiniciar.</p>\
            ",
          bntNext: "Reiniciar",
        },
      },
    ],

    // Templates
    contentTemplates: [
      {
        templateLabel: "",
        templateId: "",
        templateHtml: "",
      },
    ],

    // Includes
    contentIncludes: [
      {
        includeLabel: "Top buttons",
        includeId: "top-buttons",
        includeHtml:
          '\
            <div class="buttons">\
                <div title="Voltar ao início" class="soft-btn btn btn-home"><div class="bg"></div><div class="icon"></div></div>\
                <div title="Créditos" class="soft-btn btn btn-credits"><div class="bg"></div><div class="icon"></div></div>\
                <div title="Ligar/Desligar som" class="soft-btn btn btn-sound sound-on"><div class="bg"></div><div class="icon"></div></div>\
                <div title="Ativar/Desativar tela cheia" class="soft-btn btn btn-fullscreen"><div class="bg"></div><div class="icon"></div></div>\
            </div>',
      },
    ],

    contentGlobal: {
      template: "",

      includes: [
        {
          includeLabel: "Device Rotate",
          includeId: "device-rotate",
          includeClass: "",
          includeHtml: "",
        },
      ],

      overlays: [
        {
          overlayLabel: "Sair e Capa",
          overlayId: "exit-home",
          overlayClass: "",
          overlayContent: {
            title: "Sair do jogo?",
            text: "<p>Se sair agora, sua jornada será perdida.<br/><strong>O que deseja fazer?</strong></p>",
            btnPrev: "Continuar",
            btnNext: "Sair",
          },
        },
        {
          overlayLabel: "Créditos",
          overlayId: "credits",
          overlayClass: "",
          overlayContent: {
            title: "Créditos",
            text: "<p></p>",
            btnPrev: "Fechar",
          },
        },
      ],

      paginationSeparator: "/",

      messages: {
        pageNotFound: "Erro 404. Página não encontrada.",

        pageInactive: "Acesso negado à página.",

        languageNotFound: "Idioma não encontrado.",
      },
    },
  },
];
