// let test = require('test') // 不写路径 就无法导入模块 需要在对应的文件夹下创建node_modules文件夹把要导入的模块放到这个文件夹下
// console.log(test)

// npm 使用

// 1.安装第三方模块
// npm install cowsay

// 2.引入模块
// let cowsay = require('cowsay')

// 3.使用模块
// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));

// 使用内置模块
// let fs = require('fs');


let test1 = require('test')
// console.log(require.cache)

// Conmmonjs 规定了nodejs在写模块(包)的时候应该有的目录结构：
// bin/ 可执行文件
// lib/ js的代码文件
// test/ 单元测试的代码
// doc/ 文档
// package.json  模块的描述文件
    // -- * name 模块名
    // -- description 模块介绍
    // -- * dependencies 依赖的第三方模块，产品依赖
    // -- devDependencies 开发依赖
    // -- version 版本号
    // -- author 作者
    // -- main 模块的入口文件 如果不写默认就是index.js
    // npm install 模块名 -- s