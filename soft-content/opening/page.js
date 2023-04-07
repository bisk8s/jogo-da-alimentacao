var pageOpening = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    ' <div class="opening-text-bg"><p soft-page-content="openingText"></p></div>\
      <div class="soft-btn btn-opening btn"><div class="bg"></div><p soft-page-content="bntOpening"></p></div>\
    ',

  pageTemplate: "no-template",

  pageIncludes: [
    {
      includeId: "top-buttons",
      includeHandler: "",
      includeClass: "",
    },
  ],

  pageShowMethod: "theme.opening()",
  pageHideMethod: "",
};
