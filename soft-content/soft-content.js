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
        pageTitle: "Mercado",
        pageId: "gameplay",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "gameplay/page.js",
        pageVarBase: "gameplay",
        pageActive: true,
        pageContent: {},
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
                        <div title="Voltar ao início" class="soft-btn btn btn-home"><div class="bg"></div></div>\
                        <div title="Créditos" class="soft-btn btn btn-credits"><div class="bg"></div></div>\
                        <div title="Ligar/Desligar som" class="soft-btn btn btn-sound sound-on"><div class="bg"></div></div>\
                        <div title="Ativar/Desativar tela cheia" class="soft-btn btn btn-fullscreen"><div class="bg"></div></div>\
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
        {
          includeLabel: "Snow",
          includeId: "snow",
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
