var pageChoices = {
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
        <div class="freezer">\
          <div class="freezer-content-1"/>\
          <div class="freezer-content-2"/>\
          <div class="freezer-content-3"/>\
        </div>\
        <div class="profile-pics">\
            <div class="profile-pic character-1"></div>\
            <div class="profile-pic character-2"></div>\
            <div class="profile-pic character-3"></div>\
        </div>\
        <div class="bars">\
          <div class="bar carb">\
            <p>Carboidratos: 0/0</p>\
            <ul><li/><li/><li/><li/><li/><li/></ul>\
          </div>\
          <div class="bar prot">\
            <p>Carboidratos: 0/0</p>\
            <ul><li/><li/><li/><li/><li/><li/></ul>\
          </div>\
          <div class="bar fat">\
            <p>Carboidratos: 0/0</p>\
            <ul><li/><li/><li/><li/><li/><li/></ul>\
          </div>\
          <div class="bar vit">\
            <p>Carboidratos: 0/0</p>\
            <ul><li/><li/><li/><li/><li/><li/></ul>\
          </div>\
        </div>\
        <div data-screen="tips" class="icon icon-tips"><p soft-page-content="tipsText"/></div>\
        <div data-screen="choices" class="icon icon-choices"><p/ soft-page-content="choicesText"></div>\
        <div class="soft-btn btn-back btn"><div class="bg" /></div>\
      </div>\
    </div>\
    \
  ',

  pageTemplate: "no-template",

  pageIncludes: [
    {
      includeId: "top-buttons",
      includeHandler: "",
      includeClass: "",
    },
  ],

  pageShowMethod: "theme.choices()",
  pageHideMethod: "",
};
