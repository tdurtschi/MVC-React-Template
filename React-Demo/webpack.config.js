module.exports = {
    devtool: ['source-map'],
    entry: {
        'app': './scripts/EntryPoint.jsx'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: 'scripts',
        filename: '[name].js',
    },
    module: {
        loaders: [
    	{
    	    test: /\.(js|jsx)$/,
    	    loader: 'babel-loader',
    	    exclude: /node_modules/,
    	    query: {
    	        presets: ['es2015', 'react']
    	    }
    	}]
    }
};