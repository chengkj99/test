# Learning Process

## Run Steps

1. download flutter SDK

2. unzip package

3. edit .bash_profile and export PATH of 'flutter/bin'

4. create and run a simple Flutter

```
flutter create my_app

cd my_app

flutter run
```

Now, I find warning in my computer terminal. Then, I run `flutter docotor`, it told me how to do next.

5. Next step, according to tips (after run `flutter docotor`).

```
brew update
brew install --HEAD usbmuxd
brew link usbmuxd
brew install --HEAD libimobiledevice
brew install ideviceinstaller ios-deploy cocoapods
pod setup

```

6. create an devices.

Finally, I need to create a device, I have to way to do it. First way to use my Phone. The next way use android studio to create a device.

if use my Phone. remember **open phone's developer options** and **enable USB debugging**.

if use android studio, only find AVD manger, then select device、download、runing. just so so.

7. runing

Enter folder by `cd` command, exec `flutter run` command.

```
cd my_app

flutter run
```

## Demo Steps

According to this page [Write your first Flutter app, part 1](https://flutter.dev/docs/get-started/codelab), start to learn how to write a feature use dart in flutter. try practice and enjoy it.

## Documents

https://flutter.dev/docs/get-started/install/macos
