var pageEnding = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    ' <div class="text-bg"><p soft-page-content="nextText"></p></div>\
      <div class="soft-btn btn-next btn"><div class="bg"></div><p soft-page-content="bntNext"></p></div>\
    ',

  pageTemplate: "no-template",

  pageIncludes: [
    {
      includeId: "top-buttons",
      includeHandler: "",
      includeClass: "",
    },
  ],

  pageShowMethod: "theme.ending()",
  pageHideMethod: "",
};
