var pageDescription = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    '\
    <div class="centred">\
      <div class="description-text-bg">\
        <div class="tables">\
          <table class="table-1">\
            <tbody>\
              <tr>\
                <th>Nome:</th>\
                <td>[char-name]</td>\
                <th>/</th>\
                <th>Idade:</th>\
                <td>[char-age] anos</td>\
              </tr>\
          </tbody>\
          </table>\
          <table class="table-2">\
            <tbody>\
              <tr>\
                <th>Situação Atual:</th>\
                <td>[char-status]</td>\
              </tr>\
              <tr>\
                <th colspan="2">Sugestões para a dieta:</th>\
              </tr>\
              <tr char-diet=""></tr>\
            </tbody>\
          </table>\
        </div>\
      </div>\
      \
      \
      <div class="character character-1"></div>\
      <div class="character character-2"></div>\
      <div class="character character-3"></div>\
      \
      <div class="soft-btn btn-description btn"><div class="bg"></div><p soft-page-content="bntDescription"></p></div>\
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

  pageShowMethod: "theme.description()",
  pageHideMethod: "",
};
