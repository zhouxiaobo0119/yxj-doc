# SDK介绍

## 简述
嵌入app的h5网站交互sdk

通过调用挂在到 window 对象上 __yxj_app 方法调用封装好的app交互方法（如：获取用户信息、跳转页面、启动扫码等功能），帮助调用者更方便快捷实现与app的交互。

## 文件地址
源码
```js
https://studioyszimg.yxj.org.cn/dp/yxj-app.js
```
压缩版
```js
https://studioyszimg.yxj.org.cn/dp/yxj-app.min.js
```
## 使用方法

### 引入
```html
<body>
  ...
</body>
<!-- 放在body标签后 -->
<script typet="text/javascript" src="https://studioyszimg.yxj.org.cn/dp/yxj-app.min.js"></script>

```


## 调用

```js
// 交互对象
window.__yxj_app.appHandler()
// 事件监听
window.__yxj_app.appListener()
// 获取用户基本信息
window.__yxj_app.getAppBaseInfo()
// 取消事件监听
window.__yxj_app.removeAppListenter()
```
详见[方法](./handler)
