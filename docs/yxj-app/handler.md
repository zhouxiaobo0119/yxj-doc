# 方法详解

## getAppBaseInfo
获取用户基本信息
### 调用 
```js
var res = window.__yxj_app.getAppBaseInfo()
```
### 返回值  res：promise对象

```js
window.__yxj_app.getAppBaseInfo().then(userInfo => {
  // userInfo - 用户信息
  console.log('用户信息-------',userInfo)
})

// 或者

var userInfo = await window.__yxj_app.getAppBaseInfo()
// userInfo - 用户信息
console.log('用户信息-------',userInfo)
```



## appHandler
方法对象
### 调用 
```js
var res = window.__yxj_app.appHandler.方法()
```

### 方法
<!-- ```js -->
  getAppBaseInfo, // 获取app用户基本信息,[同上,window.__yxj_app.getAppBaseInfo](#getappbaseinfo)

  setTitle, // 设置标题  [【点击跳转】](#settitle)

  setTitleColor, // 设置标题背景颜色  ios设置透明度无效  [【点击跳转】](#settitlecolor)

  setNavTitleColor, // 设置标题颜色  ios设置透明度只支持1或非1  [【点击跳转】](#setnavtitlecolor)

  toLogin, // 跳转登录  [【点击跳转】](#tologin)

  setShare, // 设置分享信息 在右上角显示  [【点击跳转】](#setshare)

  invokeShare, // 调起分享功能  （默认分享逻辑   不传参数   取setShare方法配置的参数  [【点击跳转】](#invokeshare)

  invokeShareForOwn, // 调起分享功能    针对单独分享逻辑（传入分享参数）  [【点击跳转】](#invokeshareforown)

  setBarRightVisibility, // 设置标题右侧文字是否隐藏  [【点击跳转】](#setbarrightvisibility)

  setBarLeftVisibility, // 设置标题左侧文字是否隐藏  [【点击跳转】](#setbarleftvisibility)

  modifyRightButtonTitle, // 修改右上角按钮文字, 及android 的回调  [【点击跳转】](#modifyrightbuttontitle)

  setInterceptBarEvent, // 方法_设置是否拦截TitleBar上面的点击事件  [【点击跳转】](#setinterceptbarevent)

  jumpToVc, // 跳转到app的任意页面并触发回调  [【点击跳转】](#jumptovc)

  modifySharePlatforms, // 设置分享平台  [【点击跳转】](#modifyshareplatforms)

  closeView, // 关闭webView  [【点击跳转】](#closeview)

  AuthStep1Activity, // 跳转到去认证，暂不入库，如有疑问，咨询开发人员

  hiddenTitleBar, // 隐藏标题栏  [【点击跳转】](#hiddentitlebar)
<!-- ``` -->

## setTitle
设置app标题
#### 调用
```js
window.__yxj_app.appHandler.setTitle('标题')
```
#### 入参
设置的标题（string）
#### 返回值
无

## setTitleColor
设置标题背景颜色  ios设置透明度无效
#### 调用
```js
window.__yxj_app.appHandler.setTitleColor({
  red: 255,
  green: 0,
  blue: 0,
})
```
#### 入参
rgb对象
```js
{
  red: 255,
  green: 0,
  blue: 0,
}
```
#### 返回值
无

## setNavTitleColor
设置标题颜色  ios设置透明度只支持1或非1
#### 调用
```js
window.__yxj_app.appHandler.setNavTitleColor({
  red: 255,
  green: 0,
  blue: 0,
  alpha:0
})
```
#### 入参
rgb对象
red:  红 0-255
green: 绿 0-255
blue: 蓝 0-255
alpha: 透明度 0 - 1
```js
{
  red: 255,
  green: 0,
  blue: 0,
}
```
#### 返回值
无

## toLogin
跳转登录，调用此方法app会默认退出登录，清除app登录态

#### 调用
```js
window.__yxj_app.appHandler.toLogin()
```
#### 入参
无
#### 返回值
无

## setShare
设置分享信息 在右上角显示

#### 调用
```js
window.__yxj_app.appHandler.setShare({
  title: '',
  desc: '',
  link: '',
  imgUrl:""
})
```
#### 入参
object对象
```js
obj:{
  title: '', // 分享标题
  desc: '', // 分享描述
  link: '',// 分享链接地址
  imgUrl:"" // 分享图片地址
}
```
#### 返回值
无


## invokeShare

调起分享功能  （默认分享逻辑   不传参数   取setShare方法配置的参数

#### 调用
```js
window.__yxj_app.appHandler.invokeShare()
```
#### 入参
无
#### 返回值
无

## invokeShareForOwn
调起分享功能    针对单独分享逻辑（传入分享参数）

#### 调用
```js
window.__yxj_app.appHandler.invokeShareForOwn({
  title: '', // 分享标题
  desc: '', // 分享描述
  link: '',// 分享链接地址
  imgUrl:"", // 分享图片地址
  platform:'', //  分享平台
})
```
#### 入参
object对象，同setShare入参
```js
obj:{
  title: '', // 分享标题
  desc: '', // 分享描述
  link: '',// 分享链接地址
  imgUrl:"", // 分享图片地址
  platform:'', //  分享平台
}
```
#### 返回值
无

## setBarRightVisibility
设置标题右侧文字是否隐藏

#### 调用
```js
window.__yxj_app.appHandler.setBarRightVisibility(true)
```
####  入参
Boolean
#### 返回值
无

## setBarLeftVisibility
设置标题左侧文字是否隐藏

#### 调用
```js
window.__yxj_app.appHandler.setShare(true)
```
####  入参
Boolean
#### 返回值
无

## modifyRightButtonTitle
修改右上角按钮文字
#### 调用
```js
window.__yxj_app.appHandler.modifyRightButtonTitle('需要设置的文字')
```
####  入参
String
#### 返回值
无

## setInterceptBarEvent
设置是否拦截TitleBar上面的点击事件（TitleBar所有点击事件都拦截）
#### 调用
```js
window.__yxj_app.appHandler.setInterceptBarEvent(true)
```
####  入参
Boolean
#### 返回值
无


## jumpToVc
 跳转到app的任意页面并触发回调
 #### 调用
```js
window.__yxj_app.appHandler.jumpToVc(clazzName_ios, clazzName_adr, obj, iosObj, otherParams)
```
####  入参
clazzName_ios：ios类名  string
clazzName_adr：安卓类名  string
obj：安卓参数  object
iosObj：ios参数  object
otherParams: 其他参数  object
#### 返回值
无


## modifySharePlatforms
设置分享平台
 #### 调用
```js
window.__yxj_app.appHandler.modifySharePlatforms(platforms)
```
####  入参
platforms：平台名  string
#### 返回值
无

## closeView
关闭webView  注：ios默认关闭最上层view
 #### 调用
```js
window.__yxj_app.appHandler.closeView()
```
####  入参
无
#### 返回值
无

## hiddenTitleBar

 隐藏标题栏
 #### 调用
```js
window.__yxj_app.appHandler.hiddenTitleBar(flag)
```
####  入参
flag：boolean
#### 返回值
无