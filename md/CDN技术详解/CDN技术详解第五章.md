# 全局负载均衡工作原理及实现

## 全局负载均衡在CDN系统中的作用
为解决不可抗因素导致的本地集群（上一章讲的本地负载均衡）的系统瘫痪。需要全局负载均衡（GSLB）系统解决多个节点相互协同问题。  

多种调度机制中，最通用的是DNS解析的方式的GSLB。

在GSLB系统中，需要掌握所有节点中的设备信息，GSLB掌握信息的精细度，取决于GSLB要执行的调度精度。  


## 基于DNS解析的GSLB的实现

> 利用了DNS系统的域名解析、就近性判断、轮询算法等，可以很大程度上借助独立于CDN系统之外的公共的DNS系统来完成负载均衡，降低了对CDN系统本身的压力。  

##### DNS产生背景

对于主机标识，机器喜欢IP地址，人喜欢主机名，需要映射关系进行兼顾；  
映射记录最初放在HOSTS.TXT文件中。从一台SRI-NIC的主机分发到整个网络（斯坦福研究院网络信息中心维护，ARPAnet）；  
对着主机的增加到十万台，频繁更新造成网络流量和处理器负载增加；  
为解决问题，1984年， 南加州大学信息科学所发布了RFC882，RFC883，这是最初的DNS规范。

##### DNS基本工作原理

DNS其实是一个应用层协议，通常被其他的应用层协议使用；  
当我们向浏览器输入一个 http://www.baidu.com,这样的url ，DNS便开始工作了；

```
工作流程：

浏览器输入url ->   
从url中取出主机名baidu.com，并向其传给本地DNS应用的客户端 ->   
DNS客户端向本地服务器发送一个包含主机名的请求 ->   
DNS客户端会收到来自本地DNS服务器的应答报文，其中含有对应于该主机的IP地址 ->   
浏览器向该IP地址发起一个TCP链接，请求相应的内容   

```
<!-- 最长长度256 -->

##### DNS工作过程

整个互联网的域名空间就像一棵倒置的树，由根服务器（.）-> 顶级域 -> 子域 -> ... 层级构成   
在每个域中，会有一台或多台服务器保存域名空间的所有信息，这种服务器称为权威服务器（也称授权域名服务器）  
根DNS服务器、顶级域名服务器、权威DNS服务器共同组成了DNS服务器层，共同维护层次化的DNS数据库。  
<!-- 当一个子域被授权出去，原本所属的域就不再包含他的数据，而只留下一个指针，指向子域的授权服务器。 物理划分？ -->  
本地DNS服务器，是用户所在局域网或ISP网络中的域名服务器；获得请求后，会通过递归查询或迭代查询的方式向DNS系统中的其他远程服务器发起查询请求；         
我们怎么值得本地DNS服务器在哪里？ 本地DNS服务器地址是客户端网络配置的一部分，或者通过DHCP方式分配给客户端。   

解析过程：略

DNS会给使用它的互联网应用带来额外的时延，为此需要引入缓存机制；  
浏览完，DNS服务器主机都会对相应信息参照TTL时间进行缓存。

##### DNS记录类型以及报文格式

最常见的资源记录是Internet类记录，资源记录是一个包含下列字段的4元组：Name、Value、Type、TTL。   
TTL是记录的生存时间；Name和Value的值取决于Type。  <!-- 为啥取决于Type -->

Internet类资源记录主要分为一下几种类型：  
1. A记录，Address: 描述域名到IP的映射关系；（同一个域名可以有多条A记录） <!--为啥1对多？-->
1. NS记录， Name Server: 用于制定该域名由哪个服务器进行解析。（每一个区域可以有多个域名服务器。）
1. SOV记录，Start Of Authority: 用于指定该区域的权威域名服务器。(每个区域只允许有一个SOA记录)   
1. CNAME记录: 用于描述别名和域名的关系；(`www.mydomain.com -CNAME-> host.mydomain.com , mail.mydomain.com -CNAME-> host.mydomain.com`)
1. PTR记录, Pointor Record: 用于描述IP地址到域名的映射记录。（只存在于in-addr.arpa这个特殊的域中。PTR记录描述了IP地址与域名逆向映射的关系。）



##### DNS消息如何传送？
<!-- p145 没明白 -->
**在客户端直接键入`nslookup`命令即可调用nslookup程序，进行DNS查询。**    


## 基于应用层协议重定向的GSLB实现

基于DNS解析的GSLB方案实际上就是把负载均衡设备部署在DNS系统中。  
基于DNS的GSLB正是在返回DNS解析结果的过程中进行智能决策，给用户返回一个最佳的IP地址；

比如： 用户使用了七牛的CDN： 用户地址是 www.userdomain.com ,  七牛为该用户提供的CDN服务地址是 userdomain.qiniu.com
```
www.userdomain.com -CNAME-> userdomain.qiniu.com ,由此进入了七牛的CDN系统

此时，七牛的CDN系统，根据用户的位置，和CDN的节点，进行调度（必要时快速回源），返回一个最佳的IP地址

用户通过这个最佳地址能够快速的获取网站资源

```
  <!-- 权威服务器为什么会可能解析初一个或多个IP地址呢？配置多个A记录，正常，可以作为备 -->
基于DNS解析来实现的GSLB的几种方法：  
1. 通过CNAME方式实现负载均衡  
1. 负载均衡器作为权威DNS服务器   
1. 负载均衡器作为代理DNS服务器
<!-- 不太理解 -->

##### 负载均衡的策略判断条件信息

在有些DNS服务器具有智能DNS功能，在向本地DNS应答之前，先根据一些静态或动态策略进行智能计算。

1. 服务器健康情况：从OSI二层一直到七层等进行检查；
2. 地理区域距离：本地DNS服务器的IP地址与服务器IP地址之间的路由距离；（由于DNS系统局限性，GSLB看不到用户终端的IP地址，只能看到本地DNS服务器的IP地址。）
3. 会话保持
3. 响应时间
5. IP地址权重
6. 会话能力阈值
7. 往返时间
8. 其他信息，包括服务器当前可用会话数，最少选择次数，轮询等

<!-- DNS记录信息中没有条件信息，如果缓存组异常，会操作NDSPOD，切换正常的缓存组提供服务 -->
<!-- 通过我们的管理系统，调 DNSPOD接口，下发到 DNS系统环境 中生效，秒级生效 -->

##### 开源DNS服务软件

BIND

## 基于 IP 路由的GSLB
