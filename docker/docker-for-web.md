用 docker 一个 linux 的 Web 开发环境

安装docker

下载 ubuntu 镜像

```
docker pull ubuntu
```

使用 ubuntu 镜像创建容器，注意要与宿主机映射端口号和映射文件地址

```
// docker run -it -p 80:80(端口号) --name ubuntu-web(容器名称) -v /Users/chengkj/docker/ubuntu-web:/home(地址映射)  ubuntu:latest(镜像:TAG)
docker run -it -p 6061:6061 --name ubuntu-web -v /Users/chengkj/docker/ubuntu-web:/home ubuntu:web
```

安装 node

安装 npm

安装 nvm

安装 vue-cli

启用 vue 项目
