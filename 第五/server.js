let net = require('net');

// 创建服务
let server = net.createServer((s)=>{
    s.write('欢迎'); // 向客服端发送数据
    // 响应客服端的end事件
    s.on('end',()=>{
        console.log('结束连接');
    })
    // 响应错误事件，让服务器不会因为一个错误而崩溃
    s.on('error',(err)=>{
        switch (err.name) {
            default:
                console.log(err);
                break;
        }
    })
});

server.listen(8888); // 监听的端口