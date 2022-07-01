
###
 # @Author: zhouxiaobo zhouxiaobo@yxj.org.cn
 # @Date: 2022-07-01 15:02:45
 # @LastEditors: zhouxiaobo zhouxiaobo@yxj.org.cn
 # @LastEditTime: 2022-07-01 15:42:13
 # @FilePath: \vitepress-tmpl-master\deploy.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main
# just a example, please change the follow line with your github account!!!
 git push -f https://github.com/zhouxiaobo0119/yxj.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
