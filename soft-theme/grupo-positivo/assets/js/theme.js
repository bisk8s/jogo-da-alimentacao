var theme = {
  version: "1.0.0",

  // Variáveis globais
  vars: {
    initApp: true,
    review: false,
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
          "Procurar variar as opções de alimentos.",
          "Consumir frutas e verduras à vontade.",
          "Os carboidratos são importantes, mas, por certo tempo, evitar comer muitas porções.",
          "Beber mais água e evitar sucos industrializados e refrigerantes.",
        ],
        finished: false,
        choices: null,
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
          "Procurar manter uma dieta balanceada, com todos os tipos de nutrientes",
          "Priorizar alimentos energéticos para ajudar nos treinos.",
          "Consumir também proteínas.",
          "Frutas e verduras podem ser consumidas à vontade.",
        ],
        finished: false,
        choices: null,
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
          "Manter uma dieta balanceada.",
          "Aumentar o consumo de proteínas.",
          "Frutas e verduras podem ser consumidas à vontade.",
          "Reduzir o consumo de carboidratos e evitar doces.",
        ],
        finished: false,
        choices: null,
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
    if (!theme.audios.bg.playing()) {
      theme.audios.bg.play();
    }

    // $("#soft main #soft-pages #top-buttons").css("display", "none");

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

    theme.vars.choices = {
      fats: [],
      vits: [],
      prots: [],
      carbs: [],
    };

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
              if (index === btns.length - 1) {
                const checks = [
                  ...$(
                    "#soft main #soft-pages #charSelection .btn-select .check"
                  ),
                ];
                const bags = [
                  ...$("#soft main #soft-pages #charSelection .choices"),
                ];
                checks.forEach(function (check, index) {
                  const finished = theme.vars.charData[index].finished;
                  const bag = bags[index];
                  gsap.to([check, bag], {
                    scale: finished ? 1 : 0,
                    duration: 1,
                    ease: "expo.out",
                    onComplete: function () {
                      theme.endTransition();
                    },
                  });
                });
              }
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
      )
      .off("click", "#soft main #soft-pages #charSelection .choices")
      .on(
        "click",
        "#soft main #soft-pages #charSelection .choices",
        function () {
          const index = $(".choices").index(this);

          theme.vars.choices = JSON.parse(
            JSON.stringify(theme.vars.charData[index].choices)
          );

          theme.vars.selectedChar = index;
          theme.vars.review = true;
          theme.goToPage("choices");
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
            return "<tr><td width='30px'>-</td><td>" + content + "</td></tr>";
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

    var selected = false;

    var $pawns = $(".pawns");
    var $prateleira = $(".prateleira");

    // Define the custom event to be triggered
    var customEvent = jQuery.Event("pawnsOverlappingPrateleira");

    // Function to check for overlap
    function checkOverlap() {
      var element = $prateleira.overlaps($(".pawns .hit-test")).first();
      $(element).trigger(customEvent);
    }

    // Listen for the custom event
    $prateleira.on("pawnsOverlappingPrateleira", function () {
      $prateleira.off("pawnsOverlappingPrateleira");
      theme.goToPage($(this).attr("data-screen"));
    });

    var target = {
      x: 960,
      y: 702,
    };

    const boundingBox = {
      x1: 301,
      x2: 1401,
      y1: 500,
      y2: 741,
    };

    function movePawn() {
      // Obtém o valor do atributo "current-scale" do elemento de classe ".soft-scaled" usando a biblioteca jQuery
      const scale = $(".soft-scaled").attr("current-scale");

      // Limita as coordenadas do objeto "target" para garantir que ele permaneça dentro dos limites da "bounding box" definida pela variável "boundingBox"
      target.x = Math.max(target.x, boundingBox.x1); // define o valor de "x" como o maior valor entre "target.x" e "boundingBox.x1"
      target.x = Math.min(target.x, boundingBox.x2); // define o valor de "x" como o menor valor entre "target.x" e "boundingBox.x2"
      target.y = Math.max(target.y, boundingBox.y1); // define o valor de "y" como o maior valor entre "target.y" e "boundingBox.y1"
      target.y = Math.min(target.y, boundingBox.y2); // define o valor de "y" como o menor valor entre "target.y" e "boundingBox.y2"

      // Usa a biblioteca GSAP para animar os elementos selecionados pela variável "$pawns" até as coordenadas finais definidas em "target"
      gsap.to($pawns, {
        duration: 0.05, // duração da animação em segundos
        ease: "power1.inOut", // tipo de easing utilizado na animação
        ...target, // passa as coordenadas finais do "target" como argumentos para a animação
        onComplete: function () {
          // função a ser executada quando a animação é concluída
          checkOverlap(); // chama a função "checkOverlap()"
        },
      });
    }
    movePawn();

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
      .off("mousedown", ".prateleira")
      .on("mousedown", ".prateleira", function (event) {
        event.preventDefault();
        selected = true;
        theme.audios.click.play();
        $(document).off("mousedown", ".centred");
        $(document).off("pawnsOverlappingPrateleira", ".prateleira");
        theme.goToPage($(this).attr("data-screen"));
      })
      .off("click", ".icon")
      .on("click", ".icon", function () {
        theme.audios.click.play();
        theme.goToPage($(this).attr("data-screen"));
      })
      .off("mousedown", ".centred")
      .on("mousedown", ".centred", function (e) {
        if (selected) return;
        const event = e.originalEvent;
        const $centred = $(".centred").first()[0];
        const rect = $centred.getBoundingClientRect(); // Obter as dimensões da div
        const scaleX = $centred.clientWidth / rect.width; // Calcular o fator de escala horizontal
        const scaleY = $centred.clientHeight / rect.height; // Calcular o fator de escala vertical
        const x = (event.clientX - rect.left) * scaleX; // Calcular a posição horizontal escalada
        const y = (event.clientY - rect.top) * scaleY; // Calcular a posição vertical escalada
        target = { x, y };
        movePawn();
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
      charData.choices = JSON.parse(JSON.stringify(theme.vars.choices)); // deepclone de rato

      if (!theme.vars.review) {
        if (completeCount === totalChars) {
          this.goToPage("ending");
        } else {
          this.goToPage("newChar");
        }
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

    if (!theme.vars.review) {
      gsap.to($(".icon"), {
        delay: 1.4,
        duration: 1,
        autoAlpha: 1,
        ease: "expo.out",
      });
    }

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
        // const charIndex = theme.vars.selectedChar;
        // const charData = theme.vars.charData[charIndex];
        // const correctAnswers = charData.correctAnswer;
        // const key = $(".soft-page").attr("id");
        // const answer = correctAnswers[key];
        // const selected = theme.vars.choices[key].length;

        // if (selected === answer) {
        //   history.back();
        // } else {
        //   theme.showAlert(
        //     "OPS! Ainda falta uma porção desse tipo de alimento."
        //   );
        // }
        theme.vars.review = false;
        history.back();
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
              theme.audios.correctAnswer.play();
              theme.scoreControll();
              me.off("click");
            },
          });
        } else {
          theme.audios.incorrectAnswer.play();
          gsap.to($(this), {
            duration: 0.05,
            x: -10,
            yoyo: true,
            repeat: 5,
            ease: "power1.inOut",
          });
          const message =
            charData.name +
            " não precisa de mais uma porção desse tipo de alimento. Continue o jogo.";
          theme.showAlert(message);
        }
      });
  },

  showAlert: function (message) {
    theme.audios.overlayOpen.play();

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

    fillAndShuffle(originalArray);

    $(document).off("click", ".food");

    $(document)
      .off("click", "#soft main #soft-pages .btn-back")
      .on("click", "#soft main #soft-pages .btn-back", function () {
        history.back();
      });
  },
  fats: function () {
    theme.freezerScreens();

    fillAndShuffle(theme.vars.food.fats);
  },
  proteins: function () {
    theme.freezerScreens();

    fillAndShuffle(theme.vars.food.prots);
  },
  vitamins: function () {
    theme.freezerScreens();

    fillAndShuffle(theme.vars.food.vits);
  },
  carbs: function () {
    theme.freezerScreens();

    fillAndShuffle(theme.vars.food.carbs);
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

function fillAndShuffle(originalArray) {
  const arrayLength = originalArray.length;

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
}
