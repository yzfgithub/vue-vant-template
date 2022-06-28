
// const { VantResolver } = require('unplugin-vue-components/resolvers');
// const ComponentsPlugin = require('unplugin-vue-components/webpack');

// module.exports = {
//   configureWebpack: {
//     plugins: [
//       ComponentsPlugin({
//         resolvers: [VantResolver()],
//       }),
//     ],
//   },
// };

module.exports = {
    devServer: {
        proxy: {
            '/apiservice': {
                target: 'http://xxxxxx',
                ws: true,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/apiservice': ''
                }
            }
        }
    }
}