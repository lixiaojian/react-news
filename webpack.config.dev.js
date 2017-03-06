// const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    context: path.join(__dirname),
    devtool:'cheap-module-eval-source-map',
    entry:{
        index:[
            './src/js/root.js',
            hotMiddlewareScript
        ]
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                include:[
                    path.resolve(__dirname,'src')
                ],
                loaders:['react-hot','babel-loader']
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.(png|jpg)$/,loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'}
        ]
    },
    output:{
        filename:'bundle.js',
        publicPath:'/build/',
        path: __dirname + '/build/'
    },
    resolve:{
        extensions:['','.js','.jsx','.css']
    },
    plugins:[
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),
            __DEV__:true
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};