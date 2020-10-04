module.exports = {
  port: 8080,

  antdLessModifyVars: {
    'primary-color': '#1890FF',
    // hd: '2px',
  },

  cloudXyScssModifyVars: {
    'xy-primary-color': '#1890FF',
  },

  proxy: {
    '/server': {
      target: 'http://testgusteau.xinhuaapp.com/',
      changeOrigin: true,
    },
  },

  // px2rem: false,
};
