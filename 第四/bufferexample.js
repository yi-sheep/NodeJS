let fs = require('fs');
// 普通的读取文件,这是把文件整个放到内存
fs.readFile('../第三/hello1.txt',(err,data)=>{
    console.log(data);
})
// 这是开启一个文件读流，这个是一点一点的放到内存
let rs = fs.createReadStream('../第三/hello1.txt',{
    highWaterMark:1024 // 单位字节，当读取到了这么多个字节后就触发一个data事件
});
// 开启事件，第一个参数表示看起哪一个事件，后面是回调函数
rs.on('data',(content)=>{
    console.log(content);
})