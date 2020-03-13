# 6h [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
✏️ 用最轻的代码教会你用typescript.

## 初心
1. 使用**最少**代码实现一个完整功能, **🔥让大家更容易学习ts**.
2. 目标代码轻量, 方便大家用更少的**碎片时间**来参与项目.
3. 做很多"轻代码", 希望总有一块成为你的"**砖**".


## 贡献代码
1. 运行`yarn`, 如没有yarn请先执行`npm i -g yarn`
2. 复制**packages**文件夹中任意项目, 然后改名, 比如'**packages/abc**'.
3. 进入"**abc**"目录, 修改"**package.json**"的"**name**"字段为"**@6h/abc**".
4. 在"**6h**"目录执行命令`lerna bootstrap`.
5. 代码写在"**packages/abc/index.ts**"中.
6. 测试用例写在"**packages/abc/__test__/**"中.
7. 运行`yarn workspace abc test`执行测试, 无误后提交代码.

## 函数 

[@6h/be-full](packages/be-full/README.md)
全屏任意元素.

[@6h/click-outside](packages/click-outside/README.md)
点击指定元素外部触发回调.

## 微信群
由于腾讯对微信群的100人限制, 超过100人后必须由我拉进去.

![](https://user-gold-cdn.xitu.io/2019/9/19/16d474d245b69492?w=512&h=512&f=jpeg&s=27137)
