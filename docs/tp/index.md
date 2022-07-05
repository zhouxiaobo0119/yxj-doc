
# 框架介绍
基于业务梳理出的基础前端模板，包含信息处理、app交互、接口封装、文件操作、基础功能等，为开发人员节省基础业务的时间，尽快投入到新功能的开发中。
## 源码地址
[点击跳转(需开启VPN)](http://10.0.0.107/ysz-web/vue3-template-forVite)
## 指令

  安装
  ```json
    npm i
  ```
  运行
  ```json
   npm run dev
  ```
  打包
  ```json
   npm run build:环境（test：测试,pre：预生产,prod：生产）
  ```
  压缩混淆 yxj-app.js 为 yxj-app.min.js
  ```json
   npm run ys:app
  ```


## 文件目录

```js
│  .editorconfig    --- 编辑器配置
│  .env.dev   --- 本地调试-常量配置表
│  .env.pre   --- 预生产-常量配置表
│  .env.prod   --- 生产-常量配置表
│  .env.test   --- 测试-常量配置表
│  .eslintignore   --- eslint配置
│  .eslintrc.js
│  .gitignore   --- git配置
│  .markdownlint.json   --- mk规范配置
│  .markdownlintignore
│  .prettierrc.js   --- prettier规范配置
│  .stylelintignore   --- stylelint规范配置
│  .stylelintrc.js
│  commitlint.config.js   --- commitlintt规范配置
│  f2elint.config.js   --- f2elint配置
│  index.html   --- 入口文件
│  package-lock.json
│  package.json
│  README.md
│  shims-vue.d.ts   --- ts配置
│  tsconfig.json
│  vite.config.js   --- vite配置
│
├─.vscode   --- vscode配置
│      extensions.json
│      launch.json
│      settings.json
│
├─public   --- 静态文件夹（不打包）
│      crypto.min.js   --- app操作sdk加密依赖js文件（访问网络资源sdk时需复制此文件到与yxj-app.js同级目录）
│      favicon.ico
│      logo.png
│      yxj-app.js   --- app操作sdk
│
└─src
    │  App.vue
    │  main.js
    │
    ├─api
    │      api.js   --- 接口方法合集
    │      requst.js    --- 接口封装方法
    │
    ├─assets    资源文件夹（会被打包）
    │      logo.png
    │
    ├─components    --- 组件文件夹
    │  │  HelloWorld.vue
    │  │
    │  └─vue3
    │          com-five.vue
    │          com-four.vue
    │          com-one.vue
    │          com-three.vue
    │          com-two.vue
    │
    ├─pages   --- 页面文件夹
    │  │  article.vue
    │  │  home.vue
    │  │
    │  └─vue3
    │          index.vue
    │
    ├─router    --- 路由文件
    │      index.js
    │
    ├─store    --- 状态管理相关 pinia
    │      index.ts
    │      store.ts
    │
    └─utils   --- 其他依赖js文件（公共方法集合）
            common.js   --- 公共方法
            download.js   --- 分片下载方法（与框架无关，直接删除即可）
            encode.js   --- 数据加解密方法
            fish.js   --- 鱼动效（与框架无关，直接删除即可）
            nativeToWeb.js --- app方法合集（弃用，使用yxj-app.js）
            wxShare.js    --- 微信分享配置方法
```