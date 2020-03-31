let fs = require('fs');
let rs = fs.createReadStream('index'); // 读取文件中的内容
let ws = fs.createWriteStream('index1'); // 写入文件
rs.pipe(ws); // 使用pipe管道来控制读取和写入之间的速度差距

// 完成压缩
let zs = require('zlib').createGzip();
let ws2 = fs.createWriteStream('index1.zip'); // 写入文件
rs.pipe(zs).pipe(ws2); // 先进行压缩然后再将压缩后的内容写入文件