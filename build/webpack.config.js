const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        'vue-qk-loadapp': path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name].js',
        library: 'VueQKLoadAPP',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin()
    ]
}