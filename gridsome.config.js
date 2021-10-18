// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Connect Plus',
  siteUrl: 'https://cpmoneytransfer.com/',
  plugins: [
    // {
    //   use: 'gridsome-plugin-bundle-analyzer',
    //   options: {
    //     onlyProduction: true, // only production bundle will be analyzed by default
    //     analyzerOptions: {}, // see https://github.com/webpack-contrib/webpack-bundle-analyzer
    //   },
    // },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/texts/*.md',
        typeName: 'texts',
        remark: {
          // remark options
        }
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'it',
          'en',
          'es',

        ],
        pathAliases: { // path segment alias for each locales
          'it': 'it',
          'en': 'en',
          'es': 'es',
        },
        fallbackLocale: 'en', // fallback language
        defaultLocale: 'en', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {}
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },

  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images/')
    config.mode('development')
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
