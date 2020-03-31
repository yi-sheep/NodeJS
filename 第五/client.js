let net = require('net');

let client = net.connect(8888); // 连接服务器
// 响应服务器发送的数据
client.on('data',(data)=>{
    console.log(data.toString())
    client.end(); // 告诉服务器我处理完了
})