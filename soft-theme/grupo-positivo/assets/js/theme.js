var theme = {
  version: "1.0.0",

  // Variáveis globais
  vars: {
    initApp: true,
    selectedChar: 0,
    food: {
      fats: [
        "Azeite",
        "Manteiga",
        "Cookies",
        "Castanhas",
        "Bolinho",
        "Chocolate",
      ],
      vits: [
        "Mamao",
        "Maca",
        "Abobrinha",
        "Couve",
        "Tomates",
        "Banana",
        "Laranjas",
        "Brocolis",
        "Cenoura",
        "Melancia",
      ],
      prots: [
        "Ovos",
        "Ervilhas",
        "Feijao",
        "Iogurte",
        "Queijo",
        "Carne",
        "Frango",
        "Peixe",
        "Leite",
      ],
      carbs: [
        "Cereal",
        "Mandioca",
        "Arroz",
        "Massa",
        "Pao",
        "Aveia",
        "Milho",
        "Carbos",
      ],
    },
    choices: {
      fats: [],
      vits: [],
      prots: [],
      carbs: [],
    },
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
        finished: false,
        correctAnswer: {
          vits: 6,
          fats: 1,
          carbs: 4,
          prots: 3,
        },
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
        finished: false,
        correctAnswer: {
          vits: 6,
          fats: 2,
          carbs: 7,
          prots: 4,
        },
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
        finished: false,
        correctAnswer: {
          vits: 6,
          fats: 0,
          carbs: 5,
          prots: 6,
        },
      },
    ],
  },

  audios: {
    // bg: new Howl({
    //   src: ["soft-theme/grupo-positivo/assets/medias/bg-sound.mp3"],
    //   loop: true,
    //   volume: 0.4,
    //   onend: function () {},
    // }),
    // click: new Howl({
    //   src: ["soft-theme/grupo-positivo/assets/medias/click.mp3"],
    //   loop: false,
    //   volume: 0.2,
    //   onend: function () {},
    // }),
    // overlayOpen: new Howl({
    //   src: ["soft-theme/grupo-positivo/assets/medias/overlay-open.mp3"],
    //   loop: false,
    //   volume: 1,
    //   onend: function () {},
    // }),
    // lauraJump: new Howl({
    //   src: ["soft-theme/grupo-positivo/assets/medias/laura-jump.mp3"],
    //   loop: false,
    //   volume: 0.4,
    //   onend: function () {},
    // }),
    // correctAnswer: new Howl({
    //   src: ["soft-theme/grupo-positivo/assets/medias/correct-answer.mp3"],
    //   loop: false,
    //   volume: 0.6,
    //   onend: function () {},
    // }),
    // incorrectAnswer: new Howl({
    //   src: ["soft-theme/grupo-positivo/assets/medias/incorrect-answer.mp3"],
    //   loop: false,
    //   volume: 0.6,
    //   onend: function () {},
    // }),
    // endGameSuccess: new Howl({
    //   src: ["soft-theme/grupo-positivo/assets/medias/end-game-success.mp3"],
    //   loop: false,
    //   volume: 1,
    //   onend: function () {},
    // }),
    // endGameFailed: new Howl({
    //   src: ["soft-theme/grupo-positivo/assets/medias/end-game-failed.mp3"],
    //   loop: false,
    //   volume: 1,
    //   onend: function () {},
    // }),
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
    $("#soft main #soft-pages #top-buttons").css("display", "none");

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
        // if (theme.vars.initApp == false) theme.audios.click.play();
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
          // theme.audios.bg.play();
        }
      });
  },

  charSelection: function () {
    theme.default();

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
    theme.scoreControll();

    var $pawns = $(".pawns");
    var $prateleira = $(".prateleira");

    // Define the custom event to be triggered
    var customEvent = jQuery.Event("pawnsOverlappingPrateleira");

    // Function to check for overlap
    function checkOverlap() {
      var element = $prateleira.overlaps($pawns.find(".hit-test")).first();
      $(element).trigger(customEvent);
    }

    // Listen for the custom event
    $prateleira.on("pawnsOverlappingPrateleira", function () {
      theme.goToPage($(this).attr("data-screen"));
    });

    var viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    var viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    var target = {
      x: viewportWidth * 0.5,
      y: viewportHeight * 0.75,
    };

    function movePawn() {
      target.x = Math.max(target.x, 100);
      target.x = Math.min(target.x, 1701);

      target.y = Math.max(target.y, 517);
      target.y = Math.min(target.y, 941);

      gsap.to($pawns, {
        duration: 0.05,
        ease: "power1.inOut",
        ...target,
        onComplete: function () {
          checkOverlap();
        },
      });
    }
    movePawn();

    $(document).on("mousedown", function (e) {
      target.x = e.pageX;
      target.y = e.pageY;
      movePawn();
    });

    $(document).keydown(function (e) {
      const moviment = 50;
      switch (e.keyCode) {
        case 37:
          // Left arrow key pressed
          target.x -= moviment;
          break;
        case 38:
          // Up arrow key pressed
          target.y -= moviment;
          break;
        case 39:
          // Right arrow key pressed
          target.x += moviment;
          break;
        case 40:
          // Down arrow key pressed
          target.y += moviment;
          break;
      }
      movePawn();
    });

    $(document)
      .off("click", "#gameplay .prateleira")
      .on("click", "#gameplay .prateleira", function () {
        theme.goToPage($(this).attr("data-screen"));
      });

    $(document)
      .off("click", "#gameplay .icon")
      .on("click", "#gameplay .icon", function () {
        theme.goToPage($(this).attr("data-screen"));
      });

    var char = parseInt(theme.vars.selectedChar) + 1;
    var selector = "#soft main #soft-pages #gameplay .character-" + char;
    gsap.to($(selector), {
      delay: 1.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });
  },

  tips: function () {
    theme.default();

    gsap.to($("#soft main #soft-pages #tips .tips-text-bg"), {
      delay: 1.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });

    gsap.to($("#soft main #soft-pages #tips .btn-tips"), {
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
      .off("click", "#soft main #soft-pages #tips .btn-tips")
      .on("click", "#soft main #soft-pages #tips .btn-tips", function () {
        history.back();
      });
  },

  scoreControll: function () {
    var complete = true;
    const charIndex = theme.vars.selectedChar;
    const charData = theme.vars.charData[charIndex];
    const correctAnswers = charData.correctAnswer;
    ["carb", "prot", "fat", "vit"].forEach(function (type) {
      const key = type + "s";
      const answer = correctAnswers[key];
      const selected = theme.vars.choices[key].length;

      var content = [...new Array(answer)]
        .map(function (_, i) {
          return "<li class='" + (i < selected ? "selected" : "") + "'/>";
        })
        .join("");

      $(".bar." + type + " ul").html(content);
      var label = {
        carb: "Carboidratos",
        prot: "Proteínas",
        fat: "Lipídios",
        vit: "Vitaminas",
      };

      $(".bar." + type + " p").html(
        label[type] + ": " + selected + "/" + answer
      );

      complete = complete && selected === answer;
    });

    if (complete) {
      charData.finished = true;

      const completeCount = theme.vars.charData.filter(function (char) {
        return char.finished;
      }).length;

      const totalChars = theme.vars.charData.length;

      if (completeCount === totalChars) {
        this.goToPage("ending");
      } else {
        this.goToPage("newChar");
      }
    }
  },

  freezerScreens: function () {
    theme.default();
    theme.scoreControll();

    var char = parseInt(theme.vars.selectedChar) + 1;
    var selector = ".character-" + char;
    gsap.to($(selector), {
      delay: 1.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });

    gsap.to($(".icon"), {
      delay: 1.4,
      duration: 1,
      autoAlpha: 1,
      ease: "expo.out",
    });
    $(document)
      .off("click", ".icon")
      .on("click", ".icon", function () {
        theme.goToPage($(this).attr("data-screen"));
      });

    gsap.to($("#soft main #soft-pages .btn-back"), {
      delay: 2,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {
        theme.endTransition();
      },
    });

    $(document)
      .off("click", "#soft main #soft-pages .btn-back")
      .on("click", "#soft main #soft-pages .btn-back", function () {
        const charIndex = theme.vars.selectedChar;
        const charData = theme.vars.charData[charIndex];
        const correctAnswers = charData.correctAnswer;
        const key = $(".soft-page").attr("id");
        const answer = correctAnswers[key];
        const selected = theme.vars.choices[key].length;

        if (selected === answer) {
          history.back();
        } else {
          theme.showAlert(
            "OPS! Ainda falta uma porção desse tipo de alimento."
          );
        }
      });

    $(document)
      .off("click", ".food")
      .on("click", ".food", function () {
        const charIndex = theme.vars.selectedChar;
        const charData = theme.vars.charData[charIndex];
        const correctAnswers = charData.correctAnswer;
        const key = $(".soft-page").attr("id");
        const answer = correctAnswers[key];
        const selected = theme.vars.choices[key].length;

        if (selected < answer) {
          const me = $(this);

          const page = $(".soft-page").attr("id");
          const food = me
            .attr("class")
            .split(" ")
            .filter(function (s) {
              return s != "food";
            });
          theme.vars.food[page] = theme.vars.food[page].filter(function (s) {
            return s != food;
          });
          theme.vars.choices[page].push(food);

          gsap.to(me, {
            opacity: 0,
            onComplete: function () {
              theme.scoreControll();
              me.off("click");
            },
          });
        } else {
          gsap.to($(this), {
            duration: 0.05,
            x: -10,
            yoyo: true,
            repeat: 5,
            ease: "power1.inOut",
          });
          const message =
            charData.name +
            " não precisa de mais uma porção desse tipo de alimento.<br/>Continue o jogo.";
          theme.showAlert(message);
        }
      });
  },

  showAlert: function (message) {
    $(".box-feedback p").html(message);
    gsap.to($(".box-feedback"), {
      duration: 1,
      scale: 1,
      opacity: 1,
      ease: "power1.inOut",
      onComplete: function () {
        gsap.to($(".box-feedback"), {
          delay: 1,
          duration: 1,
          scale: 0,
          opacity: 0,
          ease: "power1.inOut",
        });
      },
    });
  },

  choices: function () {
    theme.freezerScreens();

    const originalArray = [
      ...theme.vars.choices.carbs,
      ...theme.vars.choices.fats,
      ...theme.vars.choices.prots,
      ...theme.vars.choices.vits,
    ];

    const arrayLength = originalArray.length;
    const newArrayLength = Math.floor(arrayLength / 3);

    const newArray1 = [];
    const newArray2 = [];
    const newArray3 = [];

    for (let i = 0; i < arrayLength; i++) {
      const item = originalArray[i];
      const newIndex = i % 3;

      if (newIndex === 0) {
        newArray1.push(item);
      } else if (newIndex === 1) {
        newArray2.push(item);
      } else {
        newArray3.push(item);
      }
    }

    newArray1.forEach(function (item) {
      $(".freezer-content-1").append('<div class="food ' + item + '">');
    });
    newArray2.forEach(function (item) {
      $(".freezer-content-2").append('<div class="food ' + item + '">');
    });
    newArray3.forEach(function (item) {
      $(".freezer-content-3").append('<div class="food ' + item + '">');
    });

    $(document).off("click", ".food");
  },
  fats: function () {
    theme.freezerScreens();

    fillAndShuffle(theme.vars.food.fats).forEach(function (item) {
      $(".freezer-content").append('<div class="food ' + item + '">');
    });
  },
  proteins: function () {
    theme.freezerScreens();

    fillAndShuffle(theme.vars.food.prots).forEach(function (item) {
      $(".freezer-content").append('<div class="food ' + item + '">');
    });
  },
  vitamins: function () {
    theme.freezerScreens();

    fillAndShuffle(theme.vars.food.vits).forEach(function (item) {
      $(".freezer-content").append('<div class="food ' + item + '">');
    });
  },
  carbs: function () {
    theme.freezerScreens();

    fillAndShuffle(theme.vars.food.carbs).forEach(function (item) {
      $(".freezer-content").append('<div class="food ' + item + '">');
    });
  },

  newChar: function () {
    theme.default();

    gsap.to($("#soft main #soft-pages .text-bg"), {
      delay: 1.4,
      duration: 1,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });

    gsap.to($("#soft main #soft-pages .btn-next"), {
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
      .off("click", "#soft main #soft-pages .btn-next")
      .on("click", "#soft main #soft-pages .btn-next", function () {
        theme.goToPage("charSelection");
        theme.resetVars();
      });
  },
  ending: function () {
    theme.newChar();
  },

  resetVars: function () {
    theme.vars = {
      ...theme.vars,
      ...{
        selectedChar: 0,
        food: {
          fats: [
            "Azeite",
            "Manteiga",
            "Cookies",
            "Castanhas",
            "Bolinho",
            "Chocolate",
          ],
          vits: [
            "Mamao",
            "Maca",
            "Abobrinha",
            "Couve",
            "Tomates",
            "Banana",
            "Laranjas",
            "Brocolis",
            "Cenoura",
            "Melancia",
          ],
          prots: [
            "Ovos",
            "Ervilhas",
            "Feijao",
            "Iogurte",
            "Queijo",
            "Carne",
            "Frango",
            "Peixe",
            "Leite",
          ],
          carbs: [
            "Cereal",
            "Mandioca",
            "Arroz",
            "Massa",
            "Pao",
            "Aveia",
            "Milho",
            "Carbos",
          ],
        },
        choices: {
          fats: [],
          vits: [],
          prots: [],
          carbs: [],
        },
      },
    };
  },
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

function fillAndShuffle(arr) {
  const newarray = [...arr]; // cria uma cópia do array original
  while (newarray.length < 7) {
    // enquanto o novo array tiver menos de 9 itens
    newarray.push("blank"); // adiciona uma string vazia ao final do novo array
  }
  for (let i = newarray.length - 1; i > 0; i--) {
    // começa do último item e vai até o segundo
    const j = Math.floor(Math.random() * (i + 1)); // escolhe um índice aleatório entre 0 e i
    [newarray[i], newarray[j]] = [newarray[j], newarray[i]]; // troca os valores dos índices i e j
  }
  return newarray.slice(0, 7); // retorna o novo array com 9 itens embaralhados
}
