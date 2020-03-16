# 模块化开发
### 介绍
    在nodejs中模块化开发是很强势的
    其中用官方模块、第三方模块、自定义模块
    nodejs遵循Conmmonjs的规则 一个文件对应一个模块
### 自定义模块：

#### 第一步 导出模块
    自定义一个模块：模块就是一个 xxx.js 文件
    在文件里写入功能逻辑
    利用nodejs中的闭包概念 导出模块让别人能够使用

```js
/**
 * object是要导出的内容
 */
exports = object
module.exports = object // 这两个都可以导出
```
#### 第二步 npm
    npm是nodejs用来给开发者发布自己定义的模块
    上传需要遵循Conmmonjs的规则
##### Conmmonjs 规定了nodejs在写模块(包)的时候应该有的目录结构：(-是文件夹，+是文件)
    -bin  可执行文件
    -lib  js的代码文件
    -test 单元测试的代码
    -doc  文档
    +package.json  模块的描述文件
       *name 模块名
        description 模块介绍
       *dependencies 依赖的第三方模块，产品依赖
        devDependencies 开发依赖
        version 版本号
        author 作者
        main 模块的入口文件 如果不写默认就是index.js

### 官方模块：
    又称内置模块不需要使用npm下载就可以直接导入使用
#### 使用方法
```js
    require('module') // ''中写入内置的模块 会返回导入模块对象
```
### 第三方模块：
    通过npm下载其他开发者发布的模块
#### 方法
    1.安装第三方模块
        npm install cowsay
    2.引入模块
        let cowsay = require('cowsay')
    3.使用模块
        console.log(cowsay.say({
            text : "I'm a moooodule",
            e : "oO",
            T : "U "
        }));