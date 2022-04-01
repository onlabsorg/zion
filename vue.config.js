const pathlib = require('path');

module.exports = {
    
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Zion',
        },
    },
    
    outputDir: pathlib.resolve(__dirname, "docs"),

    transpileDependencies: ['vuetify']
}
