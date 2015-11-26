module.exports = {
    entry: "./src/main.jsx",

    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?cacheDirectory=true,presets[]=react,presets[]=es2015'
            }
        ]
    }
}