var pageMessage = {
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
          <div class="text-bg"><div class="text" soft-page-content="nextText"></div></div>\
          <div class="soft-btn btn-next btn"><div class="bg"></div><p soft-page-content="bntNext"></p></div>\
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

  pageShowMethod: "theme.messagePageDefault()",
  pageHideMethod: "",
};
