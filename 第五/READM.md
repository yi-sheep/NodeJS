# 网络服务

使用net库开启tcp服务端
通过net库中的createServer方法创建服务,这个方法接收一个参数。
net.createServer(fun)
- fun 回调函数，创建完成后调用，接收一个参数Socket(套接字),这个就是当一个客服端连接服务器的时候，通过指定端口连接，然后分配一个新的套接字来进行其他数据传输。
通过Socket的write方法传输数据给客服端
- 返回一个Server对象
s.write(data)
- data 要发送的数据
Socket的on方法可以响应一些事件，比如服务器出现了错误就会崩掉，触发error事件，如果我们响应的这个事件，服务器就不会崩掉了。
s.on(String,fun)
- String 这是字符串，内容就是要响应的事件，比如error就是'error'
- fun 回调函数,触发事件后的逻辑，接收的参数取决于响应的事件，比如error事件，就接收一个error的参数，包含错误信息。
通过Server对象调用listen方法设置监听的端口
server.listen(p)
- p 这是要监听的端口

使用net库开启tcp客服端
通过net库中的connect方法连接服务端,接收两个参数。
net.connect(p,host)
- p 要连接服务端的端口
- host 要连接服务端的地址，如果不传入就默认的本地地址
- 返回一个Socket对象
通过Socket对象可以响应事件，比如服务端发送了数据就会触发data事件，这个时候我们就调用on方法
socket.on(String,fun)
- String 要响应的事件
- fun 处理逻辑
调用end告诉服务器我处理完了。
socket.end()

使用http库开启http服务
类似于net开启服务，调用http库中的createServer方法，这个方法接收一个参数。
http.createServer(fun)
- fun 这是一个回调函数，在服务开启后调用，接收两个参数，第一个是接收的消息，第二个是响应内容
- 返回一个Server对象
通过Server对象调用listen方法设置监听端口
server.listen(p)
- p 监听的端口
