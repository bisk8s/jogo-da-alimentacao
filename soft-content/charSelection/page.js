var charSelection = {
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
          <div class="character-bg character-bg-1"></div>\
          <div class="character-bg character-bg-2"></div>\
          <div class="character-bg character-bg-3"></div>\
          \
          <div class="character character-1"></div>\
          <div class="character character-2"></div>\
          <div class="character character-3"></div>\
          \
          <div class="icon icon-choices choices icon-choices-1 ease"></div>\
          <div class="icon icon-choices choices icon-choices-2 ease"></div>\
          <div class="icon icon-choices choices icon-choices-3 ease"></div>\
          \
          <div class="character-name character-name-1"><p soft-page-content="nameChar1"></p></div>\
          <div class="character-name character-name-2"><p soft-page-content="nameChar2"></p></div>\
          <div class="character-name character-name-3"><p soft-page-content="nameChar3"></p></div>\
          \
          <div class="soft-btn btn-select btn-select-1 btn" data-char="0"><div class="bg"></div><div class="check"></div><p soft-page-content="selectText"></p></div>\
          <div class="soft-btn btn-select btn-select-2 btn" data-char="1"><div class="bg"></div><div class="check"></div><p soft-page-content="selectText"></p></div>\
          <div class="soft-btn btn-select btn-select-3 btn" data-char="2"><div class="bg"></div><div class="check"></div><p soft-page-content="selectText"></p></div>\
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

  pageShowMethod: "theme.charSelection()",
  pageHideMethod: "",
};
