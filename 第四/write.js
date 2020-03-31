let fs = require('fs');
let ws = fs.createWriteStream('stream');

// 利用循环来增加写入内容，这样要是写入内容过大，会撑爆内存报错
// let i = 1e8;
// while(i>0){
//     i--
//     ws.write('hello'); //要写入的内容,要是超过了自定义缓存的上限，就会返回false,如果没有超过就返回true
// }

// 利用闭包来处理写入内容过大的情况
// function writeStream() {
//     let i = 1e8;
//     function write1(params) {
//         while (i>0) {
//             if (ws.write('hello,world')) {
//                 // 没有超过node的缓存
//                 i--;
//             }else{
//                 // 超过了node的缓存
//                 break;
//             }
//         }
//     }
//     write1();
//     ws.once('drain',write1); // 当node的缓存清空了(读取到缓存的内容已经全部写入到了文件中)就会触发drain事件，这个时候再调用write1,因为是闭包的关系i的值会从上一次跳出循环时的值开始
// }
// writeStream();

// 使用promise的方式
let fun = function(data){
    console.log(data)
    return new Promise((resolve,reject)=>{
        while(data>0){
            if (ws.write('hello,promise  ')) {
                data--;
            }else{
                // console.log(data)
                resolve(data);
                break;
            }
        }
    })
};
(async function(){
    try {
        let p = await fun(1e15);
        // ws.once('deain',fun(p)); // 只执行一次
        let d;
        ws.on('deain',d = await fun(p))
    } catch (data) {
        
    }
})();