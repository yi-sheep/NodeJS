let fs = require('fs');

let fun = function(resolve,reject) {
    fs.writeFile('a.txt','hello 1',(err)=>{
        if(err){
            reject(err)
        }else{
            console.log(`写入成功`);
            let data = {
                content:'hello ',
                number:1
            }
            resolve(data);
        }
    });
};

let proimse = new Promise(fun);

let fun2 = function(data){
    let number = data.number+1;
    let content = `${data.content}${number}`;
    return new Promise((resolve,reject)=>{
        fs.writeFile('a.txt',content,(err)=>{
            if(err){
                console.log(`出现错误：${err}`);
                reject(err)
            }else{
                console.log(`写入成功:${content}`);
                let data = {
                    content:'hello ',
                    number:number
                }
                resolve(data);
            }
        });
    })
}

proimse
.then(fun2)
.then(fun2)
.then(fun2)
.catch((data)=>{
    console.log(`失败：${data}`);
});