var pageGameplay = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    '\
    <div data-screen="fats" class="prateleira prateleira-lipidios" ></div>\
    <div data-screen="proteins" class="prateleira prateleira-proteinas" ></div>\
    <div data-screen="carbs" class="prateleira prateleira-carboidratos" ></div>\
    <div data-screen="vitamins" class="prateleira prateleira-vitaminas" ></div>\
    ',

  pageTemplate: "no-template",

  pageIncludes: [
    {
      includeId: "top-buttons",
      includeHandler: "",
      includeClass: "",
    },
  ],

  pageShowMethod: "theme.gameplay()",
  pageHideMethod: "",
};
