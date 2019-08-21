### 使用 cli 创建项目

使用了三个 cli 创建 react-native 项目：

- create-react-native-app
- expo-cli
- react-native-cli

每个 cli 创建出来的文件目录以及启动命令都是存在区别的。目前还不是很清楚那种更好，待进一步学习。

### 遇到的问题

- 在 jdk 文件目录下创建签名失败的问题
- 不同 cli 创建项目的区别

### 打开 IOS 模拟器

`open -a Simulator`

### app.json

在托管应用程序中，我们没有本地 iOS 或 Android 项目可供使用和修改，这是由 Expo 为我们管理的。使用托管工作流的开发人员不使用 Xcode 或 Android Studio，只需编写 JavaScript 代码并通过 app.json 管理配置。因此，当我们想要更改像我们可以使用的图标和启动屏幕图像的配置时 app.json。
