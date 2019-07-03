### Redux
Redux = Reducer + Flux

redux 是一个状态(数据初始化的)管理器

redux 把所以的数据放在store（存储数据的公共区域）

### Store的创建
创建数据管理的仓库

安装redux  yarn add redux

dispatch(action)  (previousState,action)

创建store  

(图书馆管理员)createStore

(笔记本) reducer  中state所存储的数据 --指仓库中所有的数据

![Image text](http://awsinst.com/github/store.png )

### actionTypes的拆分
字符串提取出来，放到变化或者常量之中

### actionCreators 
提高代码的可维护性

### Redux知识点的复习补充
Redux设计和使用的三项原则

store是唯一的

只有store能够改变自己的内容   state只的是store里面的数据

Reducer必须是纯函数  纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用



