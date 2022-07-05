<!--
 * @Author: zhouxiaobo zhouxiaobo@yxj.org.cn
 * @Date: 2022-07-04 14:20:30
 * @LastEditors: zhouxiaobo zhouxiaobo@yxj.org.cn
 * @LastEditTime: 2022-07-05 14:30:38
 * @FilePath: \yxj-doc\docs\tp\business.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 业务代码

## 配置参数
![](/imgs/3.png)
```js
// .env.prod


// 环境标识  prod - 生产   pre - 预生产   test - 测试
VITE_ENV = 'prod'
// 项目名称
VITE_PRO_NAME = '项目名称'
// 本地缓存(localStorage)名
VITE_STORAGE_NAME = 'userInfo'
// 打包路径  未使用
VITE_PUBLIC_PATH = '/ysz-prod/'
// 打包文件夹名称  未使用
VITE_PUBLIC_DIR = 'dist-prod'
// 微信appid
VITE_APPID = 'wx9c309177a51243f5'
// 接口公共路径
VITE_BASE_URL = 'https://api.yishengzhan.cn/gw/'
// 哨兵地址
VITE_SENTRY_DSN = 'https://ae4dbac9d90c48889491bbb11e3a875f@jk.yishengzhan.cn/6'
// 神策地址
VITE_SAURL = 'https://sensors.yishengzhan.cn/sa?project=production'
```


## 加载
index.html中的纯css加载动效，提升加载性能，减少页面加载白屏时间
```html
  <head>
    <style>
      * {
        margin: 0px;
        padding: 0px;
        border: 0px;
      }

      .loader_wrap {
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
      }

      .loader_wrap > div {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .spinner-fast {
        width: 70px;
        height: 70px;
        border-top: 5px solid #d93639;
        border-right: 5px solid transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      .spinner-fast > div {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        animation: spin 3s linear infinite;
      }

      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </head>
  <body>
    <div class="loader_wrap" id="loader_wrap">
      <div>
        <div class="spinner-fast">
          <div class="spinner-fast">
            <div class="spinner-fast">
              <div class="spinner-fast"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

    <script>
    function hideLoading() {
      document.querySelector('#loader_wrap').style.display = 'none';
      document.documentElement.style.overflow = 'auto';
    }
    function showLoading() {
      document.querySelector('#loader_wrap').style.display = 'block';
      document.documentElement.style.overflow = 'hidden';
    }

    // hideLoading();
  </script>
```


## main.js

## 神策埋点
```js
  // main.js

  // 神策埋点 start
  import sensors from 'sa-sdk-javascript';
  sensors.init({
    server_url: import.meta.env.VITE_SAURL,
    heatmap: {
      // 是否开启点击图，默认 default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭
      // 需要 JSSDK 版本号大于 1.7
      clickmap: 'default',
      // 是否开启触达注意力图，默认 default 表示开启，自动采集 $WebStay 事件，可以设置 'not_collect' 表示关闭
      // 需要 JSSDK 版本号大于 1.9.1
      scroll_notice_map: 'default',
      // scroll_notice_map: 'not_collect'
    },
    show_log: true,
    // 设置成 true 后， 表示在单页面开发的网站中，我们会对 hashchange 和 popstate 事件进行监听，当这两个事件任何一个发生时，也会发送 $pageview 事件。默认 false。
    is_single_page: true,
    // 设置成 true 后， 表示事件属性里面添加一个设备 id 的属性，存贮在 cookie 里面并发送。默认 false，记录但不发送。
    is_track_device_id: true,
  });

  
  // 注册公共属性,添加placesource属性
  sensors.registerPage({
    v1_placeSource: getPs(),
  });
  // 全埋点
  sensors.quick('autoTrack');
```

## vconsole
h5日志工具,测试和预生产及[本地调试app](./appdev)时开启
```js
// main.js

import VConsole from 'vconsole';
// app除生产外其他环境都启动vconsole  本地调试不启动
const isApp = navigator.userAgent.indexOf('ysz') > -1;
// new VConsole()
switch (import.meta.env.VITE_ENV) {
  case 'prod':
    break;
  case 'pre':
    new VConsole(); // eslint-disable-line
    break;
  case 'test':
    new VConsole(); // eslint-disable-line
    break;
  case 'dev':
    // console.log(1234569999, store.getters.isApp)
    if (isApp) new VConsole(); // eslint-disable-line
    break;
  default:
    break;
}


```

## uuid / guid
登录态必要参数，缓存（localStorage）中的字段，搭配uid session platform组成登录态
```js
// main.js

// 判断uuid缓存是否存在，不存在则重新生成
let getUuid = storage('uuid');
if (!getUuid) {
  getUuid = createUuid();
  storage('uuid', getUuid);
}
window.uuid = getUuid;
```
## 路由

src/router/index.js
### 接入

```js
// /src/main.js
import Router from './router/index';
const APP = createApp(App);
APP.use(Router);
APP.mount('#app');
```

## 全局路由守卫
初始化页面及其他守卫相关功能
```js
// src/router/index.js

router.beforeEach(async (to, from, next) => {
  // 初始化页面   只执行一次
  await appStore().init();

  ···

  // 状态管理中保存路由信息
  appStore().route = to;
  next();
});
```


## pinia
// 配置文件   
/src/store/index.ts    
// 初始化文件   
/src/store/store.ts  

模块：  
main   公共模块   
user   用户模块   
content   内容模块（基础模板中暂未使用）

## 接入

```js
// /src/main.js
import pinia from './store/store.ts';
const APP = createApp(App);
APP.use(pinia);
APP.mount('#app');
```

## 模块注册
defineStore(模块名,模块内容)
```js
// /src/store/index.ts

import { defineStore } from 'pinia';
//defineStore(模块名,模块内容)  返回一个pinia模块对象
export const appStore = defineStore('main', {
  // 数据存储
  state: () => {
    return {
      k:v
    };
  },
  // 计算属性
  getters: {},
  // 方法
  actions: {
  },
});
```
## 初始化
appStore().init()

```js
// /src/router/index.js

await appStore().init();
```
```js
// /src/store/index.ts

// 初始化
async init() {
  if (this.isInit) {
    return;
  }
  // 获取系统信息
  this.initSystem();
  console.log('系统信息---------------------', this);
  // 设置已经初始化
  // commit('setInited');
  await userStore().initUser();
},
```
## 获取系统信息
appStore().initSystem()
```js
// /src/store/index.ts

    // 系统信息初始化
    initSystem() {
      try {
        // 判断是否微信环境
        this.isWeChat = /MicroMessenger/i.test(navigator.userAgent);
        // 地址栏获取app版本号
        this.version = getUrlParam('version') ? getUrlParam('version') : '6.0.0'; // 版本
        // 地址栏获取是否需要登录标识
        this.notNeedLogin = getUrlParam('notNeedLogin') ? Number(getUrlParam('notNeedLogin')) : 0; // 是否需要登陆
        // 判断当前页面是否app打开
        this.isApp = navigator.userAgent.indexOf('ysz') > -1;
        // 地址栏获取placesource来源
        this.placeSource = getPs();
        // 设置平台
        this.setPlatform();
        console.log(this);
      } catch (error) {
        console.log(error, '系统信息初始化失败');
      }
    },
```

## 设置平台信息
appStore().setPlatform()

注：返回值需与后端所有平台字段值对应，注意书写方式及大小写
```js
// /src/store/index.ts


    // 设置平台信息
    setPlatform() {
      try {
        const { userAgent } = navigator;
        // const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ysz-6.0.3.1';
        const isWechat = /MicroMessenger/i.test(userAgent);
        console.log(userAgent);
        if (isWechat) {
          this.platform = 'WeChat';
        } else {
          const isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1;
          const isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
          if (isIOS) {
            this.platform = 'iOS';
          } else if (isAndroid) {
            this.platform = 'Android';
          } else {
            this.platform = 'PC';
          }
        }
      } catch (error) {
        this.platform = '';
        this.isWeChat = false;
        // this.isAndroid = false;
      }
    },
```

## 初始化用户信息
app：调用app方法获取app用户信息并发送请求校验，优先
非app：获取本地缓存中的登录态并校验
```js
// /src/store/index.ts


    // 初始化用户信息   -----------拿到有效的用户信息
    async initUser() {
      console.log(window);
      console.log('初始化登录态---------------------------');
      // 在app打开
      if (appStore().isApp) {
        try {
          // 获取app信息
          const info = await window.__yxj_app.getAppBaseInfo(); //
          window.uuid = info.guid;
          console.log('获取到的用户信息-------------1122', info);
          console.log('校验session');
          this.userInfo = info;
          this.appInfo = info;
          console.log('this.userInfo-------', this.userInfo);
          // 发送请求校验获取到的用户信息
          const userInfo = await this.getUser();
          // 获取到完整用户信息
          console.log('接口获取到的用户信息-------------', userInfo);
          storage.set('uuid', info.guid);
          // 初始化微信分享配置
          await this.initWxShare();
          this.isLogin = true;
        } catch (error) {
          console.log('获取用户信息---错误--------------', error);
          this.isLogin = false;
        }
        // commit("setInit", true, { root: true });
        appStore().isInit = true;
        return;
      }
      // 获取本地缓存登录态
      const stoUserInfo: any = storage.get(import.meta.env.VITE_STORAGE_NAME) || {};
      console.log('本地缓存登录态----------------------', stoUserInfo);
      if (stoUserInfo.session) {
        try {
          // 存在本地登录态
          this.userInfo = stoUserInfo;
          const userInfo = await this.getUser();
          console.log('请求获取到的用户信息------------', userInfo);
          this.isLogin = true;
        } catch (error) {
          console.log('获取用户信息---错误--------------', error);
          this.isLogin = false;
          console.log(error);
        }
      }
      appStore().isInit = true;
    },

```

## 微信分享初始化
```js
// /src/store/index.ts

    initWxShare() {
      if (!appStore().isWeChat) {
        console.log('不是微信，不配置微信分享');
        return;
      }
      wxShareCinfig();
    },
```

```js
// /src/utils/wxShare

export const wxShareCinfig = function () {
  initWx = true;
  console.log('wxShareCinfig', 'wxShareCinfig');
  return new Promise((resolve, reject) => {
    const apiParams = {
      // eslint-disable-next-line
      appid: import.meta.env.VITE_APPID,
      url: location.href.split('#')[0],
    };
    serviceApi
      .getJsticket(apiParams)
      .then((res) => {
        const conf = {
          debug: false,
          appId: res.appid,
          timestamp: res.timestamp,
          nonceStr: res.nonceStr,
          signature: res.signature,
          jsApiList: [
            'onMenuShareAppMessage',
            'onMenuShareTimeline',
            'hideOptionMenu',
            'hideToolbar',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getLocalImgData',
          ],
        };
        wx.config(conf);
        initWx = true;
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
};
```

## 接口
接口加解密封装，统一出入口，方便数据处理及公共逻辑判断操作
### 封装
/src/api/request.js   接口封装
### 整理
/src/api/api.js   接口整理



