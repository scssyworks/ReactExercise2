const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const Uglify = require("uglifyjs-webpack-plugin");
const CSSUglify = require("optimize-css-assets-webpack-plugin");

module.exports = {
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /(\.scss|\.sass)$/,
                exclude: /node_modules/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new Uglify({
                include: /\.min\.js$/,
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            }),
            new CSSUglify({
                assetNameRegExp: /\.min\.css$/
            })
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        new CleanPlugin([
            'dist/js',
            'dist/css'
        ]),
        new MiniCSSExtractPlugin({
            filename: "css/[name].css"
        })
    ]
}