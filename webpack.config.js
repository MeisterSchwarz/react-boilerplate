const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // entry point of app
    entry: './client/renderer.js',
    mode: "development",

    // bundle output 
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    // template containing div#root
    plugins: [
        new HTMLWebpackPlugin({ template: './client/index.html'})
    ],
    // resolves "cannot Get/RESSOURCE" error
    devServer: {
        historyApiFallback: true,
    },

    module: {
        // loaders for js and css files
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    }

}