module.exports = {
  dest: 'public',
  // base: '/vue-popper/demo/',
  // base: '/demo/',
  title: 'vue-popper',
  description: 'A popper plugin for Vue',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/kouts/vue-popper' }
    ],
    sidebar: [
      ['/', 'Introduction']
    ]
  },
  head: [
    ['script', { src: 'https://polyfill.io/v3/polyfill.min.js?features=Array.from' }],
    ['script', { src: 'https://polyfill.io/v3/polyfill.min.js?features=Promise' }],
    ['script', { src: 'https://polyfill.io/v3/polyfill.min.js?features=NodeList.prototype.forEach' }],
    ['script', { src: 'https://polyfill.io/v3/polyfill.min.js?features=Object.assign' }]
  ]
};
