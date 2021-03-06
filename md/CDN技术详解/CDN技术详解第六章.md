

## 流媒体工作原理
多媒体： 下载才能播放；
```
视频播放原理：
access文件获取 -> demux解复用 -> decode解码 -> output输出
```

流媒体：可以简单理解为把多媒体文件的存储和播放放在了网络的两侧；

## 流媒体传送协议

实时流传输协议RTSP：远程播放控制，可以采用UDP、TCP传输

实时传输协议RTP：用来提供时间信息和实现流同步，通常运行在UDP之上

实时传输控制协议RTCP：协助RTP完成传输质量控制

实时消息传送协议RTMP、HTTP流化协议：将流同步、播放控制、质量控制集成起来的企业自有流媒体协议

这些协议都位于IP上层的TCP／UDP协议的上一层。


<!-- 怎么使用协议的，看不出来啊 -->
```
媒体播放器  <-HTTP GET-> Web服务器
媒体播放器  <-SETUP、 PLAY、 媒体流、 PAUSE、TEARDOWN -> 媒体服务器
```

RTSP／RTP和HTTP Streaming是目前应用最广泛的流化协议。  
电信运营商主要以RTSP／RTP为主，互联网视频网站主要以HTTP Streaming为主。

Progressive Download： 直接下载并缓存无法保障版权。即使用户停止播放，依然会继续下载，直到下载完毕或者关闭视频；仅支持点播；固定码率播放；    
HTTP Streaming：分片下载可加密保护版权，码率切换； 支持点播和直播；基于TCP协议，安全可靠，HTTP支撑易推广；  


#### HTTP　Streaming
1. 电信运营商主要以RTSP／RTP为主，互联网视频网站主要以HTTP Streaming为主。
1. 其前身是Progressive Download：基于HTTP协议，边下载，边播放。暂停播放->服务器依然极细下载->导致带宽浪费->出现HTTP Streaming
1. HTTP　Streaming先将直播数据（直播的视频流，点播的视频文件）在服务器上进行编码 -> 分片（将编码的数据进行更细粒度分片）-> 传输（把每个分片通过HTTP协议传输到客户端）（Progressive Download一个HTTP协议下载所有；HTTP Streaming 是一个HTTP下载一个分片。这样就可以实现码率切换。）

1. 与Progressive Download对比：

Progressive Download：点播 | 直接缓存到本地无法保证版权 | 按文件请求，不支持码率切换
HTTP　Streaming：点播+直播  | 文件加密，可保证版权      | 按分片请求，支持码率切换

RTSP／RTP： 基于TCP协议，可靠性高，可以基于TCP的流控机制适应带宽变化
HTTP　Streaming： 可以直接利用80端口来传输，穿越只允许Web访问的80端口的防火墙有优势 | 基于HTTP，便于推广

##### HTTP　Streaming 主流阵营：
1.Apple HTTP Live Streaming：服务器组件、分发组件、客户端组件   
服务器组件 从音视频设备捕捉音视频流 ->（媒体编码器、流分割器／文件分割器：对媒体流进行编码、封装、切片（分片后会产生一个索引文件并对外提供url））--交付给--> 分发组件（Web服务器：接收客户端发送的请求，负责将分片通过HTTP的方式发送给客户端）
客户端组件（先下载索引文件，按照索引文件顺序进行下载并播放，直到遇到#EXT-X-ENDLIST标签）  

2.3GPP Adaptive HTTP Streaming：内容准备组件、服务器组件、客户端组件
内容准备组件(先将媒体分片切片封装，生成媒体分片和媒体分片的描述信息) --向服务器推送--> 服务器组件(根据媒体分片以及描述信息，生成MPD(媒体呈现描述，分辨率、码率、元数据等信息)文件，响应请求)
 --> [CDN Cache]-客户端组件:负责请求接收MPD，以及内容分片等（先根据得到的MPD信息生成各媒体分片的URL信息，并利用URL向服务器组件请求分片文件）


3.Microsoft IIS Smooth Streaming： 服务器、客户端

IIS Smooth Streaming：是在IIS Media Services基础之上发展来的一个产品；  
IIS Media Server 提供了对Smooth Streaming 和 Live Smooth Streaming的支持；  
IIS Media Server的扩展可以使Silverlight客户端通过HTTP来适应流媒体的带宽；（会在服务器上存在多个视频文件副本，根据客户端请求再决定发送哪个。）  
客户端请求Mainifest文件（对媒体内容的描述）-> 服务器返回Mainifest信息 -> 客户端根据Mainifest中的URL构造规则生成媒体分片url信息 -> 客户端发送媒体分片请求信息 -> 服务器返回相应的媒体分片   
简单说：先请求Mainifest,然后生成媒体分片的url -> 请求媒体分片

这个过程如果码率发生变化，url中参数设置。

4.Adobe HTTP Dynamic Streaming   

Adobe Flash Player 1.0 和Adobe AIR 2 引入了动态流的HTTP流媒体点播和在线视频直播服务。
实时消息协议（RTMP）最低的延迟时间、最快的启动、动态缓冲和流加密。

动态流的HTTP可以充分利用现有的基础设施：内容交付网络、互联网服务提供商、办公缓存、家庭网络

HTTP Dynamic Streaming：点播和直播在内容准备工作流程上稍有不同。点播内容是通过一个简单的预编码生成MP4片段以及Mainifest清单文件。
直播内容相对复杂，在播放过程中生成MP4。



5.MPEG-2 TS(MPEG-2格式的媒体流，大多数电视台，电影公司等广电企业在使用)  


## 流媒体业务

##### 流媒体加速和Web加速之间的业务差异

1. 内容类型：流媒体CDN（大文件、实时流、Qos要求高），WebCDN（小文件、固定大小、Qos要求低）
2. 用户行为：流媒体CDN（拖拽、暂停等播放控制），WebCDN（下载后浏览）
3. 内容管理要求：流媒体CDN（内容冷热差异明显，生命周期长），WebCDN（冷热差异不明显，生命周期短）
4. 回源要求：流媒体CDN（回源比例小），WebCDN（回源比例大）

##### 流媒体CDN架构描述

1. 管理支撑子系统： 网络管理、运营管理、统计分析、业务接口
2. 负载均衡子系统：调度系统
3. 内容管理子系统：为用户提供流媒体服务的各种设备组成的服务系统
4. 流媒体服务子系统：对真个CDN网络的内容分布情况进行管理

##### 流媒体CDN和WebCDN的设计差异

1. Cache：流媒体CDN（支持多种流化协议，硬件配置大存储、高I／O），WebCDN（支持多协议HTTP、FTP等，硬件配置多存储，高性能CPU）
2. 负载均衡：流媒体CDN（DNS+HTTP重定向方式），WebCDN（DNS方式）
3. 内容分发方式：流媒体CDN（热片PUSH，冷片PULL），WebCDN（全PULL方式）
4. 组网：流媒体CDN（多级组网，可能要求组播，单播混合组网），WebCDN（两级组网）

## 流媒体CDN的设计与实现

##### Cache的设计实现

1. 两个功能：缓存和响应用户访问请求。
2. 普通服务器面向计算：计算性能，数据可靠性保障等；流媒体设备面向资源：重点是对存储设备、内存、存储I／O、CPU等多种资源的有效协调。
3. 三个方面实现：a.协议实现；b.缓存算法；c.存储设计；
##### 负载均衡的设计实现
会更多考虑内容命中这个参数
##### 内容分发机智设计实现
PULL：用户请求驱动；  
PUSH分发（什么时候分发什么内容）：根据用户访问的统计信息智能策略分发；或者管理人员决定；  
PUSH和PULL在技术实现上差别不大，只是触发方式不同而已；  
##### 组网模式
Web CDN通常两种架构：中心 - 边缘  
流媒体CDN通常三层架构：中心 - 区域 - 边缘 （加一层是因为回源成本较高）

##### 内容文件预处理技术
1. 视频转码：码率转换、空间分辨率转换、时间分辨率转换、编码格式转换
2. 文件切片：将大的完整的文件切成大小一致的若干个小文件，目的是存储和支持适应码率切换

##### 防盗链机制和实现
盗链指在本网站页面上向用户提供其他网站的内容；盗链对视频内容影响很大，对被利用了资源的网站不公平，因为一方面视频内容版权昂贵，而且提供流媒体服务对服务器资源消耗比普通网页大得多。   
常见的防盗链的方式8种：  
1. 利用HTTP Referer字段
2. 利用登陆验证信息
3. 使用cookie携带动态验证信息
4. 使用POST下载
5. 使用图形验证码：可以保证资源的使用者是人
6. 使用动态密钥
7. 在内容中插入数据 
8. 打包下载：只适用于下载业务，不适用于流媒体业务

以上方法：有些是适合CDN实现的比如利用HTTP Refer的方式；有些是不适合CDN实现的，比如利用登陆验证、动态图形码方法等，具体选择哪种，通常由网站决定，CDN方面配合实现，因此对客户防盗链机制的适应性开发和调试是CDN承接每个使用者之前必须进行的工作。
