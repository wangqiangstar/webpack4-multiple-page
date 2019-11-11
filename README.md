# business

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start || npm run start || npm run serve

页面启动:
localhost:8003/pc-demo.html
localhost:8003/mobile-demo.html
文件名前面添加入口类型： xx-xx.html
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run eslint
```

### Mock server 
```
npm run mock
```
### 目录结构
```
- prod                                                  打包后的资源
- build                                                 项目构建所需文件
- scripts                                               项目构建命令入口
- mock                                                  mock数据文件
    -api                                                    mock所需api返回数据
    -mock-server.js                                         mock启动服务
-src                                                    前端资源
    - assets                                                 前端静态资源目录
    - common                                                 公共方法目录
    - filter                                                 vue的filter文件
    - service                                                api统一出口
    - pages                                                  页面目录
        - entry.js                                              页面统一vue入口配置
        - mobile                                                移动端适配基准尺寸750px
            - demo                                                     子页面目录
                - components                                            当前子页面组建目录
                - routes.js                                             当前子页面路由
                - view                                                  当前子页面的页面目录
                    - index.vue                                             页面
                    - ceshi.vue                                             页面
                - index.html                                             当前子页面html模板
                - index.js                                              当前子页面入口文件
                - App.vue                                             当前子页面vue配置文件
        - pc                                                    pc端适配基准尺寸1920px
            - demo                                                     子页面目录
                - components                                            当前子页面组建目录
                - routes.js                                             当前子页面路由
                - view                                                  当前子页面的页面目录
                    - index.vue                                             页面
                    - ceshi.vue                                             页面
                - index.html                                             当前子页面html模板
                - index.js                                              当前子页面入口文件
                - App.vue                                             当前子页面vue配置文件
    - store                                                  状态管理store目录
    - utils                                                  常用工具类方法
    - log_config.js                                          埋点配置文件
- dev.entry.config.js                                    开发阶段指定启动打包构建的页面

```

### 新建页面方式
1. 直接copy项目下pages/*/demo文件夹
2. 重命名为自己的页面
4. pc下自动转换rem基准尺寸1920、mobile下自动转换rem基准尺寸750


### ajax請求方式
1. 使用`this.$service.xx.xx()`

### doneList
1. 根目录下dev.entry.config.js添加需要启动的页面，可只启动当前页面，提高开发阶段编译打包时间过长问题
2. 区分pc、mobile分别基于不同基准尺寸转换rem
### todoList
1. 添加配置文件可在开发阶段指定具体页面进行打包，避免开发阶段打包时间过长问题
2. 指定具体页面要使用rem转换、开关控制是否启动rem自定转换
3. 一些优化的loader、plugin增加