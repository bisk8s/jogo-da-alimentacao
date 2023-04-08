var pageGameplay = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    '\
    <div data-screen="fats" class="prateleira prateleira-lipidios"></div>\
    <div data-screen="proteins" class="prateleira prateleira-proteinas"></div>\
    <div data-screen="carbs" class="prateleira prateleira-carboidratos"></div>\
    <div data-screen="vitamins" class="prateleira prateleira-vitaminas"></div>\
    <div class="pawns">\
        <div class="pawn character-1"></div>\
        <div class="pawn character-2"></div>\
        <div class="pawn character-3"></div>\
    </div>\
    <div class="hud-bg"></div>\
    <div class="profile-pics">\
        <div class="profile-pic character-1"></div>\
        <div class="profile-pic character-2"></div>\
        <div class="profile-pic character-3"></div>\
    </div>\
    <div class="items carb">\
      <p>Carboidratos: 0/0</p>\
      <ul><li/><li/><li/><li/><li/><li/></ul>\
    </div>\
    <div class="items prot">\
      <p>Carboidratos: 0/0</p>\
      <ul><li/><li/><li/><li/><li/><li/></ul>\
    </div>\
    <div class="items fat">\
      <p>Carboidratos: 0/0</p>\
      <ul><li/><li/><li/><li/><li/><li/></ul>\
    </div>\
    <div class="items vit">\
      <p>Carboidratos: 0/0</p>\
      <ul><li/><li/><li/><li/><li/><li/></ul>\
    </div>\
    <div data-screen="tips" class="icon icon-tips"></div>\
    <div data-screen="choices" class="icon icon-choices"></div>\
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
