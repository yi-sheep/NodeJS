let fs = require('fs');
// 这是开启一个文件读流
let rs = fs.createReadStream('../第三/hello1.txt');
rs.on('data',(content)=>{
    console.log(content);
})