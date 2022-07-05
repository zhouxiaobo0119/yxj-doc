# 事件 （监听回调）



 

## appListener
添加事件
### 调用
```js
window.__yxj_app.appListener(事件名,回调函数)
```
### 事件名列表
loginSuccess   登录成功

leftClick   后退按钮点击

ViewStatusChange   APP切后台

rightClick   右侧文字点击

shareSuccess   分享成功


## removeAppListenter
移除事件

注：需要移除事件的回调需要通过变量存储，移除时也需要传入相同变量，无法移除通过直接传入函数形式的方式监听的事件
### 调用
```js
window.__yxj_app.removeAppListenter(事件名,回调函数)
```