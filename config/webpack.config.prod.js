'use strict'

// process.env.BABEL_ENV = 'production'
// process.env.NODE_ENV = 'production'
const path = require(`path`)
const webpack = require(`webpack`)
console.log(`build by webpack`)
module.exports = {
    entry:
        {app: [`webpack-hot-middleware/client?reload=true`, `./src/index.js`]},
    output: {
        filename: `server.js`,
        path: path.resolve(__dirname, `../build`)
    },
    target: `node`,
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: [`uws`],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: `babel-loader`,
                    options: {
                        presets: [`es2015`]
                    }
                }
            }
        ]
    }
}
