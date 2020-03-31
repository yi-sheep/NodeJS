let http = require('http');
// 创建http服务
let Http = http.createServer((req, res) => {
    // 路由
    switch (req.url) {
        case '/a':
            res.write('<h1>A</h1>'); // 发送数据
            res.end(); // 结束
            break;
        case '/b':
            res.write('<h1>B</h1>');
            res.end();
            break;
        case '/c':
            res.write('<h1>C</h1>');
            res.end();
            break;
        default:
            res.write('<h1>hello</h1>');
            res.end();
            break;
    }
}).listen(8888); // 监听的端口