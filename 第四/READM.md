# buffer
文件读取流
文件读取流就像是牵一根自来水管，从水库放水，能解决文件过于庞大时减轻内存的负担
通过fs库调用createReadStream方法，这个方法传递两个参数。
fs.createReadStream(path,object)
- path 就是读取文件的地址
- object 这是一个对象，在对象中设置一些属性，比如 highWaterMark:1024 设置读取缓存的上限大小，单位是字节
- 这个方法的返回值是一个ReadStream(读流)
通过ReadStream的on方法可以响应一些事件，有两参数。
rs.on(String,fun)
- String 这是一个字符串，字符串内容就是要响应的事件,比如响应data事件就是'data'，这个事件是在读取内容达到缓存区的上限时调用。
- fun 回调函数，响应这个事件的处理逻辑,接收参数取决于响应的事件，比如响应的事件是data那么就会有一个参数content读取到的内容。

文件写入流
和读取流类似，只不过是反向的。
通过fs库调用createWriteStream方法，这个方法传递一个参数。
fs.createWriteStream(path)
- path 写入文件的路径
- 返回值是一个WriteStream(写流)
通过WriteStream调用write方法写入文件，这个方法传递一个参数。
ws.write(data)
- data要写入的数据
- 当data的数据大于缓存区上限是会返回false，否则true。大于的部分也会写入文件但是会加大内存的压力，比如你要写入几个G的文件，就会出错了。
解决写入大文件，出错。
利用闭包，promise等，write.js中有写到

文件的复制操作
copy.js