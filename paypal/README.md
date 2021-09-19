1.npm init -y 初始化项目 2.新建 webpack.config.js 写入相关配置 3.新建文件夹 public，里面新建 index.html 作为模板 4.根目录下新建 main.js 作为入口文件
5.npm i -D webpack@4;npm i -D webpack-cli@3;npm i -D webpack-dev-server@3;
npm i -D html-webpack-plugin; 6.packjson.josn 中写入相关命令；
"build":"webpack";"dev":"webpack-dev-server --hot --port:3000"

报错处理
/build failed (from ./node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js):
Error: Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel/
cnpm i babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime
