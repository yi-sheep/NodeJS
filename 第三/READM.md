# 同步 异步
1. 回调函数
    
    在异步函数运行完成时执行的用户函数，回调函数中设置一个形式参数(形参)来接受异步函数中可能发生的异常，并处理异常。
    在nodejs里面，一般来说回调函数的第一个参数，就是接受的异常对象。
2. 异步函数不能使用返回值的方式来返回操作结果。
3. 异步函数调用后立即返回。
4. 同步函数等待调用完成后返回。
5. 多个调用异步函数的操作顺序不能保证一致，是随机的。
6. 如果需要保持异步函数的执行顺序就要使用回调函数的方式来进行调用后续的异步函数，但是可能会在执行的层次过多时导数[回调地狱](https://www.cnblogs.com/yu412/p/11717701.html)发生。
7. 

# Nodejs 文件操作
[文档地址](http://nodejs.cn/api/fs.html)
    
### fs.writeFile()
```js
/**
 * 写入内容 异步函数
 * 如果文件存在则直接写入内容
 * 如果不存在就创建文件再写入内容
 */
fs.writeFile(file, data[, options], callback)
```

 - file:写入文件地址
 - data:写入内容
 - options:文件选项
 - callback:回调函数
    + err 接受的异常对象 函数参数

### fs.writeFileSync()
```js
/** 
 * 写入内容 同步函数
 * 参数和异步的一致
 * 没有回调函数 需要特别处理异常情况
 */
fs.writeFileSync(file, data[, options])
```

### fs.readFile()
```js
/** 
 * 读取内容 异步函数
 */
fs.readFile(path[, options], callback)
```
- path:文件路径
- options:文件选项
- callback:回调函数
    + err 异常对象
    + data 读取的内容

### fs.readFileSync()
```js
/** 
 * 读取内容 同步函数
 */
fs.readFileSync(path[, options])
```

---

    1.接口说明中的参数如果在中括号 [] 中，表示是可选参数

    2.如果在尖括号 <> 中，表示是必选参数

---
