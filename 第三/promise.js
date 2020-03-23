let fs = require('fs');

let data = {
    file:'hello1.txt',
    content:'hello 1'
}

let fun2 = function(data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(data.file,data.content,(err)=>{
            if(err){
                console.log(`出现错误：${err}`);
                reject(err);
            }else{
                console.log(`写入成功:${data.content}`);
                resolve('成功');
            }
        });
    })
}

let p = fun2({file:'hello1.txt',content:'hello 1'})
// .then((res)=>{console.log(res)})
    .then(()=>{return fun2({file:'hello1.txt',content:'hello 2'})})
    .then(()=>{return fun2({file:'hello1.txt',content:'hello 3'})})
    .then(()=>{return fun2({file:'hello1.txt',content:'hello 4'})})
    .catch((data)=>{
        console.log(`失败：${data}`);
    });