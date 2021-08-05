// // next.config.js
// // const withCss = require("@zeit/next-css");
// const withPurgeCss = require("next-purgecss");
// const config = withPurgeCss({
//   purgeCssPaths: [
//     'pages/**/*',
//     'components/**/*'
//   ],
//   purgeCss: {
//     whitelist: () => ['player'],
//     whitelistPatterns: () => [/Toastify/, /.*nprogress.*/],
//     rejected: true
//   },
//   purgeCssEnabled: ({ dev, isServer }) => true, // Enable PurgeCSS for all env
// });
// module.exports = config;  // If NextJS >= 9.3
// module.exports = withCss(config); // If NextJS < 9.3

const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
    plugins:
      process.env.NODE_ENV !== 'production'
        ? [
            'postcss-flexbugs-fixes',
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                  'custom-properties': false,
                },
              },
              purgecss({
                content :[
                  './pages/**/*.{js,jsx,ts,tsx}',
                  './components/**/*.{js,jsx,ts,tsx}'
                ]
            })
            ],
            
          ]
        : [
            // No transformations in development
            'postcss-flexbugs-fixes',
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                  'custom-properties': false,
                },
              },
              purgecss({
                  content :[
                    './pages/**/*.{js,jsx,ts,tsx}',
                    './components/**/*.{js,jsx,ts,tsx}'
                  ]
              })
            ],
          ],
  }