const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module["exports"] = {
    mode: "development",
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Resturant Page",
        }),
    ],
    devServer: {
        static: "/dist",
    },
    optimization: {
        runtimeChunk: "single",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    }
};