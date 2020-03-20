var path = require('path')

module.exports = {
    mode: "development",
    entry: {
        main: "./test.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "test.js"
    },
    module: {
        rules: [ //webpack 4.X写法
            {
                test: /.js$/,
                use: ['babel-loader']
            }
        ]
    }
}
