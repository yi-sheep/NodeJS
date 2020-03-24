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
};

(async function(){
    let p1 = await fun2({file:'hello1.txt',content:'hello 1'});
    console.log(p1); // p1 p2 p3的值就是promise两个状态的传入值
    let p2 = await fun2({file:'hello2.txt',content:'hello 2'});
    let p3 = await fun2({file:'hello3.txt',content:'hello 3'});
})();
