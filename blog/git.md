# git 常用命令

### 删除本地 remote

`git remote remove origin`

### 删除远程分支

`git push --delete origin branch_name`
### 添加/关联远程仓库

`git remote add origin git@github.com:chengkj99/chengkj-blog.git`

### 修改 remote name

`git remote rename upstream origin`

### 删除 git 缓存

`git rm -r --cached "file name" `

### 打 tag

tag 是特定 commit 一个指针，也就是每个 tag 对应一个特定的 commit，通过 tag 可以返回到项目的特定状态下，所以可以将 tag 看作是在大量 commit 中设定的书签。<br/>
releases 是基于 tag 编译好的二进制文件。可以记录项目的发布历史。

`git tag -a 1.0 -m “Release version 1.0`

...待补充
