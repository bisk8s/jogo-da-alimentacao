var pageGameplay = {
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
        <div data-screen="fats" class="prateleira prateleira-lipidios ease"></div>\
        <div data-screen="prots" class="prateleira prateleira-proteinas ease"></div>\
        <div data-screen="carbs" class="prateleira prateleira-carboidratos ease"></div>\
        <div data-screen="vits" class="prateleira prateleira-vitaminas ease"></div>\
        <div class="pawns">\
          <div class="pawn character-1"></div>\
          <div class="pawn character-2"></div>\
          <div class="pawn character-3"></div>\
          <div class="hit-test"></div>\
        </div>\
        <div class="hud-bg"></div>\
        <div class="profile-pics">\
          <div class="profile-pic character-1"></div>\
          <div class="profile-pic character-2"></div>\
          <div class="profile-pic character-3"></div>\
        </div>\
        <div class="bars">\
          <div class="bar carb">\
            <p>Carboidratos: 0/0</p>\
            <ul><li></li><li></li><li></li><li></li><li></li><li></li></ul>\
          </div>\
          <div class="bar prot">\
            <p>Proteínas: 0/0</p>\
            <ul><li></li><li></li><li></li><li></li><li></li><li></li></ul>\
          </div>\
          <div class="bar fat">\
            <p>Gorduras: 0/0</p>\
            <ul><li></li><li></li><li></li><li></li><li></li><li></li></ul>\
          </div>\
          <div class="bar vit">\
            <p>Vitaminas: 0/0</p>\
            <ul><li></li><li></li><li></li><li></li><li></li><li></li></ul>\
          </div>\
        </div>\
        <div data-screen="tips" class="ease icon icon-tips"><p soft-page-content="tipsText"></p></div>\
        <div data-screen="choices" class="ease icon icon-choices"><p soft-page-content="choicesText"></p></div>\
      </div>\
    </div>',
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
