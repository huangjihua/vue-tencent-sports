# vue-tencent-sports
## 参考网络资料，主要以练习和巩固vue相关知识点为主的学习教程
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

>新建vue项目：
  vue init webpack vue-tencent-sports 
  
>安装依赖包：
  npm install
 
>修改默认端口号：
  在config/index.js中修改即可（个人想修改而已）
 
> 分模块打包
  require.ensure(dependencies: String[], callback: function([require]), [chunkName: String])
  * dependencies: 依赖的模块数组
  * callback: 回调函数，该函数调用时会传一个require参数
  * chunkName: 模块名，用于构建时生成文件时命名使用
    
> 安装依赖
   * npm install vuex --save
   * npm install stylus --save-dev
   * npm install stylus-loader --save-dev
   同时需要配置如下在webpack.base.config.js中加入：
   ``` 
   {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
   }
   ```
   说明：stylus是一个CSS预处理框架，默认使用 .styl 的作为文件扩展名，支持多样性的CSS语法。
   
##相关知识
 >原生事件：@click.native="..."
 ``` 
    根据Vue2.0官方文档关于父子组件通讯的原则，父组件通过prop传递数据给子组件，子组件触发事件给父组件。
    但父组件想在子组件上监听自己的click的话，需要加上native修饰符。
    所以如果在想要在router-link上添加事件的话需要@click.native这样写
  ```
   


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
