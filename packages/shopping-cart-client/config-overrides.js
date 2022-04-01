const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#98c93c",
      "@success-color": "#98c93c",
      "@error-color": "#a70a49",
      "@input-placeholder-color": "rgba(0, 0, 0, 0.3)",
    },
  })
);
