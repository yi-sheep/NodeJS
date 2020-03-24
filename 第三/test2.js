let fs = require('fs');

let fun = function(data){
    return new Promise((resolve,reject)=>{
        fs.readFile(data,(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    })
};

let p = fun('hello1.txt')
    .then(()=>{return fun('hello2.txt')})
    .then(()=>{return fun('hello3.txt')})
    .catch((data)=>{
        console.log(data)
    });

(async function(){
    try {
        let p1 = await fun('hello1.txt');
        console.log(`读取成功:${p1}`)
        let p2 = await fun('hello2.txt');
        console.log(`读取成功:${p2}`)
        let p3 = await fun('hello3.txt');
        console.log(`读取成功:${p3}`)
    } catch (error) {
        console.log(error);
    }
})();