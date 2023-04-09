var pageProteins = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    '\
    <div class="centred">\
      <div class="freezer">\
      <div class="freezer-content"/>\
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
      <div class="box-feedback"><p soft-page-content="feedback"/></div>\
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

  pageShowMethod: "theme.proteins()",
  pageHideMethod: "",
};
