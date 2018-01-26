# autoAnswer
autoAnswer

和简单搜索、汪仔助手、UC答题助手一起答题。截图和OCR代码参考[https://github.com/Skyexu/TopSup](https://github.com/Skyexu/TopSup)。

- 为什么要做这个？

西瓜视频目前不支持分屏应用，得用两个手机，一个看答案一个答题。这个项目可以让这些在电脑上运行。

- 为什么要采用hack客户端的方式？

直接调用Api获取数据要先分析整个鉴权认证过程（模拟cookies，sessionId，和一些不知道的XXId）。客户端模拟的方式去开发，能够快速实现需求：抓到需要的数据。

- 为什么sever用python编写？

这个纯粹是因为想练习python。


# process

目前确保有正常的Py3环境，直接开启py的本地服务器即可。

PS：注意根据需要，修改server,py中的分辨率，默认三星Note8的2K。

+ ~~1、(已不需要，pytho中反向代理设置头即可) 设置浏览器UA为手机的UA，搜索User Agent Switcher，可用的user-agent-string如：~~
  
  `Mozilla/5.0 (Linux; Android 7.1.1; Google Pixel - 7.1.0 - API 25 - 1080x1920 Build/NMF26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 SogouSearch Android1.0 version3.0 AppVersion/5802`

+ ~~2、(已不需要，main.js中做统计的代码报错，无关使用) host添加以下一行（搜狗会校验origin）~~

  `127.0.0.1 fex.sa.sogou.com`

+ ~~3、(已不需要，python中自带静态托管和反向代理)用nginx中start.bat在80端口启动nginx代理，浏览器打开 fex.sa.sogou.com~~

+ 4、开启Py的Sever做静态托管和反向代理，并接收用户操作结果Sever中调用adb命令点击手机。浏览器打开 localhost:8080

  `py server.py`

+ 5、数据分析开发中...

# update log

20180126: 增加控制器层，抽离逻辑代码。添加adb未连接的提示，添加截图分析选项的功能

20180125: 重构Python代码，为后续功能挖坑（预留能力）

20180122: sogou的api更新，样式更新

20180120: python服务器支持反向代理，去除nginx
