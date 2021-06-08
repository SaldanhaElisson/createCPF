const path = require('path'); //CommonJS

module.exports = {
    // configuração do webPack
    mode:'development', //qual o modo, temos dois 'development',
    entry:'./src/assets/js/main.js', //qual arquivo de entrada 
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
     }, // pasta onde vai ter o bundle.js -> que converte
     module:{
         rules: [{
             // regras
             exclude: /node_modules/, //-> quero que ele não verificar a pasta node
             test: /\.js$/,
             use:{
                 loader:'babel-loader', //-> qual loader quero usar 
                 options: {
                     presets: ['@babel/env']
                 }
             }
             
         },{
             test: /\.css$/, // -> fazendo essa configuração para usar no CSS
             use:['style-loader', 'css-loader']
         }]
     },
     devtool: 'source-map' // -> vai dizer qual parte do arquivo original deu erro, vai mapear o error
}