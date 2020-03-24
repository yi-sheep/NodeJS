let fs = require('fs');

let util = require('util');
let writefileP = util.promisify(fs.readFile)
writefileP('hello1.txt').then((data)=>{
    console.log(data)
})

let fp = fs.promises;
fp.writeFile('hello1.txt','hello1').then((data)=>{
    console.log(data)
})
