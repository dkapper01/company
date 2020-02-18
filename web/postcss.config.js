// module.exports = ({file, options, env}) => ({
//   plugins: {
//     'postcss-import': {},
//     cssnano: env === 'production' ? {} : false,
//     'postcss-preset-env': {
//       stage: 0,
//       features: {
//         'color-mod-function': {unresolved: 'warn'},
//         'nesting-rules': true
//       }
//     }
//   }
// })

// module.exports = {
//   plugins: [
//     'tailwindcss',
//     process.env.NODE_ENV === 'production'
//       ? [
//         '@fullhuman/postcss-purgecss',
//         {
//           content: [
//             './pages/**/*.{js,jsx,ts,tsx}',
//             './components/**/*.{js,jsx,ts,tsx}'
//           ],
//           defaultExtractor: content => content.match(/[w-/:]+(?<!:)/g) || []
//         }
//       ]
//       : undefined,
//     'autoprefixer'
//   ]
// }
// module.exports = {
//   plugins: ['postcss-import', 'tailwindcss', 'autoprefixer']
// }

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
        '@fullhuman/postcss-purgecss': {
          content: [
            './components/**/*.js',
            './pages/**/*.js'
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }
      }
      : {})
  }
}
