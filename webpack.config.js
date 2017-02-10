var config = {
   entry: './app/App.js',
    
   output: {
      path:'/public',
      filename: 'bundle.js'
   },
    
   devServer: {
      inline: true,
      port: 8080
   },
    
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
                
            query: {
               presets: ['es2015', 'react', 'stage-0', 'stage-1']
            }
         }
      ]
   }
}

module.exports = config;