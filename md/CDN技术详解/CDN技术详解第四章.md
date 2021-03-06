# 集群服务和负载均衡技术

当一台Cache设备无法满足服务的响应要求时，就需要考虑通过一组服务器形成Cache集群进行服务。
## 服务器集群技术
服务器集群优势：提高性能、降低成本、提高可扩展性、增强可用性  
集群分类：计算集群、负载均衡集群（任务处理负载，I/O流量负载）、高可用集群。  
CDN的节点系统是一种典型的负载均衡系统。  

集群的系统结构：网络层、节点服务器操作系统层、应用层、集群管理系统层。
<!-- 集群管理系统层？ -->

## Cache 集群协同交互法
协同的目标：在各个服务器节点间建立良好的通信通道，及时沟通服务器的缓存情况，为用户提供良好的用户体验。  
通信协议：松散耦合（ICP、HTCP、Digest、Cache Pre-filling）、紧密耦合（CARP）两类。   
ICP：基于UDP协议实现，应答不包含HTTP头信息，通过向邻居发出请求并获得应答来反应Web对象在集群中的缓存情况。  
HTCP：它能够管理一组HTTP Cache服务器并监控相关的缓存活动，应答包含HTTP头信息，数据和认证。   
Cache Diest： 它的出现主要为了解决ICP 和 HTCP 协议在使用时的网络延迟和拥塞问题，不采用请求响应模式，而是在服务器之间建立对等关系，是一种用空间交换时间的思路。  
Cache Pre-filling： 是一种推送Cache内容的机制，优点是可以向多个接收器传输大容量的数据，缺乏统一的标准。  
CARP：一个分布式的缓存协议。  
<!-- 目前使用CARP -->

## 负载均衡技术实现
按照负载均衡策略分发；   
两种：任务负担、协同计算；  
以前负载均衡主要在OSI七层模型的第四层展开；  
现在，基于第七层的负载均衡技术逐渐称为主流；

##### 关键技术  

1. 负载均衡调度算法 （负载均衡分发 ）
轮询、加权轮询、随机、加权随机、基于源IP的Hash、基于源IP端口的Hash、基于目的IP的Hash、基于UDP报文净荷的Hash、最小链接、加权最小链接、最小响应时间  
<!-- 一致性哈希 -->

2. 会话持续性保证技术
- 基于源IP地址的持续性保持
- 基于Cookie数据的持续性保持
- 基于SIP报文Call-ID的持续性保持 <!-- 针对特定业务的协议 -->
- 基于HTTP报文头的持续性保持

3. 服务器健康监测技术
ICMP、 TCP、 HTTP、 FTP、 DNS、 RAUIUS、 SSL


##### 负载均衡部署方式

常用方式：  
1. 直连部署
2. 旁挂部署

双机热备部署方式：
1. 主备模式
2. 负载分担模式

##### 服务器负载均衡

1. 四层负载均衡
NAT方式、DR方式
2. 七层负载均衡

##### 链路负载均衡
1. OutBound链路负载均衡
2. Inbound链路负载均衡





####
## 开源负载均衡软件


我们的架构：LVS（负载均衡）| Nginx | OpenResty | ATS


<!-- 状态码302会不会浏览器默认进行跳转 -->
<!-- 302调度和DNS调度区别 -->


<!-- 本章主要介绍的是本地负载均衡 -->
