const path = require('path')

module.exports = {
    entry:'./src/main.js',
    output:{
        //动态获取路径
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //css-loader只负责加载css
                //style-loader负责将样式添加到DOM中
                //使用多个loader时，是从右向左读取
                use:['style-loader','css-loader']
            }
        ]
    }
}