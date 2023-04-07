var theme = {
  version: "1.0.0",

  // Variáveis globais
  vars: {
    initApp: true,
    selectedChar: 0,
    charData: [
      {
        name: "Manu",
        age: 16,
        status:
          "Não pratica atividades físicas, quase não bebe água e está com sobrepeso.",
        diet: [
          "Procure variar suas opções de alimento.",
          "Frutas e verduras podem ser consumidas à vontade. ",
          "Os carboidratos são importantes, mas, por certo tempo, evite comer muitas porções.",
          "Beba mais água e evite sucos  industrializados e refrigerantes.",
        ],
      },
      {
        name: "João",
        age: 45,
        status:
          "É atleta e participa de maratonas quase todos os finais de semana. Como treina com frequência, precisa de muita energia.",
        diet: [
          "Procure manter uma dieta balanceada, com todos os tipos de nutrientes.",
          "Priorize alimentos energéticos para o ajudarem em seus treinos.",
          "Consuma também proteínas.",
          "Frutas e verduras podem ser consumidas à vontade. ",
        ],
      },
      {
        name: "Ana",
        age: 8,
        status:
          "Depois de alguns exames, descobriu que está ingerindo muito açúcar e com falta de proteínas.",
        diet: [
          "Mantenha uma dieta balanceada.",
          "Aumente o consumo de proteínas.",
          "Frutas e verduras podem ser consumidas à vontade.",
          "Reduza o consumo de carboidratos e evite doces.",
        ],
      },
    ],
  },

  audios: {
    bg: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/bg-sound.mp3"],
      loop: true,
      volume: 0.4,
      onend: function () {},
    }),
    click: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/click.mp3"],
      loop: false,
      volume: 0.2,
      onend: function () {},
    }),
    overlayOpen: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/overlay-open.mp3"],
      loop: false,
      volume: 1,
      onend: function () {},
    }),
    lauraJump: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/laura-jump.mp3"],
      loop: false,
      volume: 0.4,
      onend: function () {},
    }),
    correctAnswer: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/correct-answer.mp3"],
      loop: false,
      volume: 0.6,
      onend: function () {},
    }),
    incorrectAnswer: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/incorrect-answer.mp3"],
      loop: false,
      volume: 0.6,
      onend: function () {},
    }),
    endGameSuccess: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/end-game-success.mp3"],
      loop: false,
      volume: 1,
      onend: function () {},
    }),
    endGameFailed: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/end-game-failed.mp3"],
      loop: false,
      volume: 1,
      onend: function () {},
    }),
  },

  // Método inicial
  init: function () {},

  // Método para exibir o preloader
  // ** NÃO ALTERAR **
  showLoader: function () {
    $("body#soft > main").append(
      '<div id="soft-loader"><div></div></div></main>'
    );
    gsap.to($("body#soft > main > #soft-loader"), {
      duration: 0.5,
      delay: 0,
      autoAlpha: 1,
      ease: "power4.out",
      onComplete: function () {},
    });
  },

  // Método útil para ações comuns em todas ou na maioria das telas
  default: function () {
    $("#soft main #soft-pages .soft-current-page *").each(function () {
      if ($(this).attr("soft-global-content") != undefined) {
        if ($(this).attr("soft-global-content") == "title") {
          $(this).html(softContent[soft.languageIndex].contentTitle);
          $(this).val(softContent[soft.languageIndex].contentTitle);
        }
      }
      if ($(this).attr("soft-page-content") != undefined) {
        $(this).html(soft.pageContent[$(this).attr("soft-page-content")]);
        $(this).val(soft.pageContent[$(this).attr("soft-page-content")]);
      }
    });

    // Caso a hash mude pra qualquer outra página
    $(window).on("hashchange", function () {
      if (theme.vars.pageOverlayShow == true) theme.pageOverlay("hide");
      if (theme.vars.globalOverlayShow == true) theme.globalOverlay("hide");
    });

    gsap.to($("#soft main #soft-pages .soft-current-page"), {
      delay: 1,
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });
  },

  // Método útil para ações após o final das transições de telas e elementos
  endTransition: function () {
    soft.blockAll(false);

    $("body#soft > main > #soft-loader").remove();

    $("#soft main .btn").addClass("ease");

    // Click dos botões
    $(document)
      .off("click", "#soft main .btn")
      .on("click", "#soft main .btn", function () {
        if (theme.vars.initApp == false) theme.audios.click.play();
      });
  },

  // Método para avançar telas
  nextPage: function () {
    soft.blockAll(true);

    gsap.to($("#soft main #soft-pages .soft-page"), {
      delay: 0,
      duration: 0.5,
      autoAlpha: 0,
      scale: 2,
      ease: "expo.out",
      onComplete: function () {
        soft.nextPage();
      },
    });
  },

  // Método para voltar telas
  prevPage: function () {
    soft.blockAll(true);

    gsap.to($("#soft main #soft-pages .soft-page"), {
      delay: 0,
      duration: 0.5,
      autoAlpha: 0,
      scale: 2,
      ease: "expo.out",
      onComplete: function () {
        soft.prevPage();
      },
    });
  },

  // Método para ir à uma tela específica
  goToPage: function (id) {
    soft.blockAll(true);

    gsap.to($("#soft main #soft-pages .soft-page"), {
      delay: 0,
      duration: 0.5,
      autoAlpha: 0,
      scale: 2,
      ease: "expo.out",
      onComplete: function () {
        soft.goToPage(id);
      },
    });
  },

  // Método da tela SplashScreen
  splashScreen: function () {
    theme.default();

    gsap.to($("#soft main #soft-pages #splash-screen .logo-aprende-brasil"), {
      delay: 1,
      duration: 0.8,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });
    gsap.to($("#soft main #soft-pages #splash-screen .logo-aprende-brasil"), {
      delay: 2,
      duration: 0.8,
      autoAlpha: 0,
      scale: 2,
      ease: "expo.out",
      onComplete: function () {
        soft.nextPage();
      },
    });
  },

  // Método da tela Início
  intro: function () {
    theme.default();
    theme.resetVars();

    if (theme.vars.initApp == true)
      $("#soft main #soft-pages #intro #top-buttons").css("display", "none");

    gsap.to($("#soft main #soft-pages #intro .logo"), {
      delay: 1.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });
    gsap.to($("#soft main #soft-pages #intro .btn-intro"), {
      delay: 2.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {
        theme.endTransition();
      },
    });

    $(document)
      .off("click", "#soft main #soft-pages #intro .btn-intro")
      .on("click", "#soft main #soft-pages #intro .btn-intro", function () {
        theme.goToPage("charSelection");
        if (theme.vars.initApp == true) {
          theme.vars.initApp = false;
          theme.audios.bg.play();
        }
      });
  },

  charSelection: function () {
    theme.default();

    if (theme.vars.initApp == true)
      $("#soft main #soft-pages #charSelection #top-buttons").css(
        "display",
        "none"
      );

    gsap.to($("#soft main #soft-pages #charSelection .character-bg"), {
      delay: 0.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });

    gsap.to($("#soft main #soft-pages #charSelection .character-name"), {
      delay: 1.6,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });

    gsap.to($("#soft main #soft-pages #charSelection .character"), {
      delay: 1.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {
        var btns = [...$("#soft main #soft-pages #charSelection .btn-select")];
        btns.forEach(function (btn, index) {
          gsap.to(btn, {
            delay: 0.2 * index,
            duration: 1,
            autoAlpha: 1,
            scale: 1,
            ease: "expo.out",
            onComplete: function () {
              theme.endTransition();
            },
          });
        });
      },
    });

    $(document)
      .off("click", "#soft main #soft-pages #charSelection .btn-select")
      .on(
        "click",
        "#soft main #soft-pages #charSelection .btn-select",
        function () {
          theme.vars.selectedChar = $(this).attr("data-char");
          theme.goToPage("opening");
        }
      );
  },

  opening: function () {
    theme.default();

    if (theme.vars.initApp == true)
      $("#soft main #soft-pages #opening #top-buttons").css("display", "none");

    gsap.to($("#soft main #soft-pages #opening .opening-text-bg"), {
      delay: 1.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });

    $("p").each(function () {
      var text = $(this).html();
      text = text.replace(
        "[char-name]",
        theme.vars.charData[theme.vars.selectedChar].name
      );
      $(this).html(text);
    });

    gsap.to($("#soft main #soft-pages #opening .btn-opening"), {
      delay: 2.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {
        theme.endTransition();
      },
    });

    $(document)
      .off("click", "#soft main #soft-pages #opening .btn-opening")
      .on("click", "#soft main #soft-pages #opening .btn-opening", function () {
        theme.goToPage("description");
      });
  },
  description: function () {
    theme.default();

    if (theme.vars.initApp == true)
      $("#soft main #soft-pages #description #top-buttons").css(
        "display",
        "none"
      );

    $(".tables").each(function () {
      var text = $(this).html();
      text = text.replace(
        "[char-name]",
        theme.vars.charData[theme.vars.selectedChar].name
      );
      text = text.replace(
        "[char-age]",
        theme.vars.charData[theme.vars.selectedChar].age
      );
      text = text.replace(
        "[char-status]",
        theme.vars.charData[theme.vars.selectedChar].status
      );

      text = text.replace(
        '<tr char-diet=""></tr>',
        theme.vars.charData[theme.vars.selectedChar].diet
          .map(function (content) {
            return '<tr><td colspan="2">- ' + content + "</td></tr>";
          })
          .join("")
      );

      $(this).html(text);
    });

    gsap.to($("#soft main #soft-pages #description .description-text-bg"), {
      delay: 1.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });

    var char = parseInt(theme.vars.selectedChar) + 1;
    var selector = "#soft main #soft-pages #description .character-" + char;
    gsap.to($(selector), {
      delay: 1.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });

    gsap.to($("#soft main #soft-pages #description .btn-description"), {
      delay: 2.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {
        theme.endTransition();
      },
    });

    $(document)
      .off("click", "#soft main #soft-pages #description .btn-description")
      .on(
        "click",
        "#soft main #soft-pages #description .btn-description",
        function () {
          theme.goToPage("gameplay");
        }
      );
  },
  gameplay: function () {
    theme.default();
  },
  choices: function () {
    theme.default();
  },
  fats: function () {
    theme.default();
  },
  proteins: function () {
    theme.default();
  },
  vitamins: function () {
    theme.default();
  },
  carbs: function () {
    theme.default();
  },
  tips: function () {
    theme.default();
  },
  nextChar: function () {
    theme.default();
  },
  ending: function () {
    theme.default();
  },

  resetVars: function () {},
};

$(document).on("ready", function () {
  theme.init();
});

// Botão Home/Sair
$(document)
  .off("click", "#soft .btn-home")
  .on("click", "#soft .btn-home", function () {
    theme.globalOverlay("show", 0);
  });

// Botão Créditos
$(document)
  .off("click", "#soft .btn-credits")
  .on("click", "#soft .btn-credits", function () {
    theme.globalOverlay("show", 1);
  });

// Botão Som
$(document)
  .off("click", "#soft .btn-sound")
  .on("click", "#soft .btn-sound", function () {
    if (Howler._muted == false) {
      $(this).removeClass("sound-on").addClass("sound-off");
      Howler.mute(true);
    } else {
      $(this).removeClass("sound-off").addClass("sound-on");
      Howler.mute(false);
    }
  });

// Botão Fullscreen
$(document)
  .off("click", "#soft .btn-fullscreen")
  .on("click", "#soft .btn-fullscreen", function () {
    if ($("body").hasClass("fullscreen")) soft.fullScreen("off");
    else soft.fullScreen("on");
  });
