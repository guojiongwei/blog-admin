module.exports = {
    admin: {
        dev: {
            env: 'development',
            publicPath: '/',
            host: 'localhost',
            port: '8090',
            assetsSubDirectory: 'static',
            devtoolType: 'cheap-module-eval-source-map',
            proxyTable: {  //proxy代理
                '/admin_demo_api': {
                    target: 'http://localhost/admin_demo_api/',
                    changeOrigin: true,
                    pathRewrite: {
                      '^/admin_demo_api': '/'
                    }
                }
            }
        },
        build: {
            env: 'production', // 当前环境
            publicPath: '/', // html引用资源路径
            assetsPath: '', // 静态资源目录
            assetsSubDirectory: '', // html资源存放目录
            devtoolType: '', // 代码位置信息
            productionGzip: true, //开启Gzip压缩
            productionGzipExtensions: ['js', 'css'] //Gzip压缩文件
        }
    }
}