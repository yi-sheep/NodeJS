# 同步 异步
1. 回调函数
    
    在异步函数运行完成时执行的用户函数，回调函数中设置一个形式参数(形参)来接受异步函数中可能发生的异常，并处理异常。
    在nodejs里面，一般来说回调函数的第一个参数，就是接受的异常对象。
2. 异步函数不能使用返回值的方式来返回操作结果。
3. 异步函数调用后立即返回。
4. 同步函数等待调用完成后返回。
5. 多个调用异步函数的操作顺序不能保证一致，是随机的。
6. 如果需要保持异步函数的执行顺序就要使用回调函数的方式来进行调用后续的异步函数，但是可能会在执行的层次过多时导数[回调地狱](https://www.cnblogs.com/yu412/p/11717701.html)发生。
7. 使用Promise来解决“回调地狱”

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

# Promise
#### 使用
```js
let promise = new Promise(fun(resolve,reject){
    ...
});
```
- fun：执行器函数(有两个形式参数用于转换状态) 函数内部放一些异步操作
    + resolve：执行器函数的第一个形参，调用转换为完成状态。
    + reject：执行器函数的第二个形参，调用转换为失败状态。
1. Promise有三种状态
    
        初始状态：从创建出Promise对象开始就是这个状态，可以转换为其他两种状态。
        完成状态：通过在执行器函数里的第一个形式参数(形参)调用，转换为完成状态，一但转换后就不能再转换为别的状态了。
        拒绝/失败状态：通过在执行器函数里的第二个形式参数(形参)调用，转换为拒绝/失败状态，一但转换后就不能再转换为其他状态了。
2. then、catch的作用

        使用Promise对象调用，可以在转换为完成和失败两种状态时刻之后的逻辑函数
    ##### then()
    ```js
    // 当转换为完成状态的时候执行
    promise.then(fun(data){
        ...
    });
    ```
    - fun：调用函数
        + data：在执行器函数里调用resolve时传入的内容

    ##### catch()
    ```js
    // 当转换为失败状态的时候执行 
    promise.catch(fun(data){
        ...
    });
    ```
    - fun：调用函数
        + data：在执行器函数里调用reject时传入的内容
    ---
        then和catch都可以返回一个新的Promise对象，then和catch的返回值相对于传递进去的函数的返回值
    ---
    ##### 链式调用
        链式调用：方便阅读、减少代码的冗余
        在解决回调地狱的时候需要不断的调用resolve这样会return很多个Promise对象，链式调用就不用再去创建多个变量来接受这些对象

    ```js
    peomise
    .then(fun(data){}) // 当最初的执行器函数中调用resolve后执行这个then
    .then(fun(data){}) // 当上一个then中return的Proimse对象中的执行器函数中调用resolve后执行这个then
    ...  // 后面的都是一样
    .catch((data)=>{}); // 无论上面的所有执行器函数中哪一个调用了reject都会执行这个catch
    ```