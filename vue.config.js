module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          'button-border-radius': '4px'
        },
      },
    },
  },
};