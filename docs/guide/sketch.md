# 业务简述

## 前端
医生站前端主要包括PC官网、PC后台、微信h5、APPh5、微信小程序，技术栈主要为vue相关生态    
主要有：
框架：vue2、vue3    
状态管理工具：[vuex](https://vuex.vuejs.org/zh/guide/)、[pinia](https://pinia.web3doc.top/introduction.html)   
UI框架：[vant](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/)  [element](https://element.eleme.cn/#/zh-CN/component/installation)   [vant3](https://vant-contrib.gitee.io/vant/#/zh-CN/cell)    
打包工具：webpack(vue2) [vite](https://vitejs.cn/guide/)          
其他：[nuxtjs](https://www.nuxtjs.cn/guide/installation) 微信小程序

## 后端 - 接口参数
老接口参数结构一般为：
```js
{
  anonymousId: 7
  body: undefined
  brand: ""
  buriedPointReset: {}
  guid: "2e0891a8-f157-4baa-91f9-b50928701afc"
  model: ""
  platform: "PC"
  session: "1412408700602353"
  sysVersion: ""
  time: 1656987605
  uid: 7
  version: "6.0.0"
}
```
常用参数为：    
uid：用户id，用户唯一标识     
guid：标识id，指定规则生成    
session：登录态，后端生成     
platform：登录平台，同一账号不同平台登录互补干扰，否则被挤掉（登录态失效）    
**该四个参数为登录态唯四标识，缺一错一不可**
## 后端 - 接口加解密

为保证数据安全，接口之间传输的数据都是通过加密处理，需要前后端通过代码解密后才能查看到真实的数据（后台项目除外）

可以看到前端给出去的数据是这样的

![](/imgs/1.png)

数据：    

```js
{
  "data":"+Sn4xb5qeruYUR2Zhyp3D/6M1censV78S/JWe6HjR0RfcHVgnRKoDhQZwQdvAVwUaCthLG9wum+7c5Z7UtH2P8teqEYnex8oj0hs6GZy1L9/DxXqa0mSbNAizODCnOSobO37kFiL5OnnmPYImtvz0ErPSeHDP7vJvKO2nCa2RbDgqOOSjngpyDc+wZ4zbldJurP97W3knvu8rOzjImd279aiXJEzCDrL2yAK5LWYCP6sp56BxV4lGlzipUc+a8snoO4QVzaR2lr1kahUEKhbYw+BCVnP78q4OBm0BdAayLo=",
  "md5":"fd4fab20fbf4f02ae89a764c0aad103a"
}
```

同样，后端返回给前端的数据也经过相同处理的：

![](/imgs/2.png)
数据：
```js
{
  "data":"uITPG5o0R/LaTgLKxV5UG4L3lzs2FQ+GkV7nTTtQLXa1/Tp/2+RqGQsiG7eRyD5XUgRSiLNB/H60TPH++1+BbhBSl30k9PnkpSPqHpbkyHqwSIar1Z90KKUBWXSR/jNg",
  "md5":"926fa8f9d45b19af60f127551b937847"
}
```


**当然，你可以在接口封装函数中打印出请求加密前和响应解密后的数据，实现查看数据变化的需求**
## 微信h5
## 小程序
## PC
## 后台
## 代码仓库对照表