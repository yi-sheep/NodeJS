let fs = require('fs'); // 导入fs模块
// 调用模块中的写入文件的函数
// 异步
fs.writeFile('./hellofs.txt', 'hello fs', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('创建并写入成功')
    }
});
// 同步
// 异常处理
try {
    fs.writeFileSync('./hellofs2.txt', 'hello fs');
} catch (err) {
    if(err){
        console.log(err);
    }else{
        console.log('成功')
    }
}

// 调用模块中读取文件的函数
// 异步
fs.readFile('hellofs.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`读取成功 内容为：${data}`)
    }
});

// 同步
// 处理异常
try {
    let content = fs.readFileSync('hellojs2.txt');
} catch (err) {
    if (err) {
        console.log(`异常：${err}`);
    } else {
        console.log(`同步读取的内容 ${content}`);
    }

}