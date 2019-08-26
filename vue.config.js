module.exports = {
    publicPath: "expensive-time",
    lintOnSave: false,
    chainWebpack: config => {
      config.plugin("pwa").tap(args => {
        return [pwaArgs];
      });
    }
}
var manifestJSON = require("./public/manifest.json");

const pwaArgs = {
  themeColor: manifestJSON.theme_color,
  name: manifestJSON.short_name,
  msTileColor: manifestJSON.background_color
};

