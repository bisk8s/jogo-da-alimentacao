var pageTips = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    ' \
      <div class="soft-scaled" initial-width="1920" initial-height="1080">\
        <div class="centred">\
          <div class="tips-text-bg"><p soft-page-content="tipsText"></p></div>\
          <div class="soft-btn btn-tips btn"><div class="bg"></div><p soft-page-content="bntTips"></p></div>\
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

  pageShowMethod: "theme.tips()",
  pageHideMethod: "",
};
