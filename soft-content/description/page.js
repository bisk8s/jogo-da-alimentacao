var pageDescription = {
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
                  <th colspan="2">Situação Atual:</th>\
                <tr>\
                </tr>\
                  <td colspan="2">[char-status]</td>\
                </tr>\
                </tr>\
                  <td colspan="2">&nbsp;</td>\
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
