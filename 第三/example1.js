// let output = function(){
//     console.log('hello');
//     throw 'exception occurs'; // 抛出异常
// }
// output();
// setTimeout(output,1000); // 异步处理

// 处理同步时出现了异常
// try {
//     output();
// } catch (err) {
//     console.log(err);
// }
// console.log('处理完异常后 程序会继续执行')

// 异步出现异常常规的try  catch就不能处理异常了
// setTimeout(function(){
//     try {
//         output();
//     } catch (err) {
//         console.log(err);
//     }
// },1000);

let output2 = function(err){
    // 有异常出现的时候err就不为null
    if(err){
        console.log(err);
    }else{
        console.log('没有异常输出')
    }
}

setTimeout(function(){
    try {
        // 1
        // throw '异步的异常';
        // 3 如果没有异常出现就执行这一步
        output2();
    } catch (err) {
        // 2
        output2(err);
    }
},1000);