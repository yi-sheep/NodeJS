let fs = require('fs');
// 同一个异步函数执行的顺序是随机的
fs.writeFile('hellofs3.txt','hello fs 1',(err)=>{return});
fs.writeFile('hellofs3.txt','hello fs 2',(err)=>{return});
fs.writeFile('hellofs3.txt','hello fs 3',(err)=>{return});
fs.writeFile('hellofs3.txt','hello fs 4',(err)=>{return});

// writeFile 的执行步骤是先把要写入的内容先放入缓存
// readFile 的执行步骤是直接去缓存里拿取内容 
// 这两种在与缓存进行操作的过程可以看做还是处于同步的 而写入和读取的操作是从缓存拿内容进行和硬盘的io异步操作
fs.readFile('hellofs.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// 让写入变得不随机 (有点麻烦)回调函数越来越多就会出现一个叫做回调地狱
fs.writeFile('hellofs.txt','hello fs 1',(err)=>{
    if(err){

    }else{
        fs.writeFile('hellofs.txt','hello fs 2',(err)=>{
            if(err){

            }else{
                fs.writeFile('hellofs.txt','hello fs 3',(err)=>{
                    if(err){

                    }else{
                        fs.writeFile('hellofs.txt','hello fs 4',(err)=>{
                            if(err){

                            }else{
                                console.log('成功4');
                            }
                        });
                    }
                });
            }
        });
    }
});

// Promise
let obj = new Promise((resolve,reject)=>{
    // 执行器函数
    // resolve reject 都是函数类型
    // 内部放一些异步操作
    // <pending> 初始状态 可以变成完成和失败状态 一但发生变化就不会变了
    // 完成状态 
    // resolve(); // 变成完成状态
    // 拒绝/失败状态
    // reject(); // 变成失败状态
    setTimeout(()=>{
        console.log(1);
        resolve('异步完成');
    },1000);
});

// then和catch都可以返回一个新的Promise对象，then和catch的返回值相对于传递进去的函数的返回值
obj
// 当是完成状态的时候执行 data为调用resolve时传入的内容
.then((data)=>{
    console.log(`完成状态:${data}`);
})
// 当是失败状态的时候执行 
.catch((data)=>{
    console.log(`失败状态:${data}`);
});


// 解决回调地狱
let obj = new Promise((resolve,reject)=>{
    fs.writeFile('hellofs.txt','hello fs 1',(err)=>{
        if(!err){
            console.log('3完成');
            resolve('完成1');
        }else{
            reject(`失败${err}`);
        }
    });
});

obj
.then((data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile('hellofs3.txt','hello fs 2',(err)=>{
            if(!err){
                console.log('2完成');
                resolve('完成2');
            }else{
                reject(`失败${err}`);
            }
        });
    });
})
.then((data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile('hellofs3.txt','hello fs 3',(err)=>{
            if(!err){
                console.log('3完成');
                resolve('完成3');
            }else{
                reject(`失败${err}`);
            }
        });
    });
})
.catch((data)=>{
    console.log(`失败${data}`);
});