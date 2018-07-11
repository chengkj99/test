# docker 常用命令

查看镜像
```
docker image ls
```

查看容器
```
docker contaienr ls

// 查看关闭的容器
docker container ls -a
```


docker 容器与宿主机的端口映射
```
docker run -p 6060:6060 [args...]
```


保存镜像
```
docker commit b34 ubuntu:web
docker commit containerID 镜像名:镜像TAGs
```

创建容器的镜像
```
docker run -it -p 6061:6061 --name ubuntu-web -v /Users/chengkj/docker/ubuntu-web:/home ubuntu:web

docker run -it -p 80:80(端口号) --name ubuntu-web(容器名称) -v /Users/chengkj/docker/ubuntu-web:/home(地址映射)  ubuntu:latest(镜像:TAG)
```



启用容器
```
// docker start containerID
docker start b34

// docker start -i containerID
docker start -i b34
```

进入容器
```
docker exec -it b34 bash
// docker exec -it b34(ContainerID) bash
```

删除容器

可以删除一个或者多个
```
docker container rm b34 b35
docker container rm ContainerID ContainerID
```

<!-- npm install -g vue-cli -->
<!-- vue init webpack my-project -->
