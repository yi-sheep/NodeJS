(function(){
    console.log('hello');
})(); // 这表示
// async 和 await

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
                resolve(data);
            }
        });
    })
}

async function a(){
    await fun2({file:'hello1.txt',content:'hello 1'});
    await fun2({file:'hello1.txt',content:'hello 2'});
    await fun2({file:'hello1.txt',content:'hello 3'});
}

a();