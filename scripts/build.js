process.env.BABEL_ENV = `production`
process.env.NODE_ENV = `production`
const config = require(`../config/webpack.config.prod`)
const webpack = require(`webpack`)
let compiler = webpack(config)
compiler.run()