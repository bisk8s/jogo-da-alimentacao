var pageOpening = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    '\
      <div class="soft-scaled" initial-width="1920" initial-height="1080">\
        <div class="centred">\
          <div class="opening-text-bg"><p soft-page-content="openingText"></p></div>\
          <div class="soft-btn btn-opening btn"><div class="bg"></div><p soft-page-content="bntOpening"></p></div>\
        </div>\
      </div>\
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
