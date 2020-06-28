# 1.vue-admin
一个vue3.0的管理后台项目
# 2.vue3.0
语法没新增但是新增了 Composition Api
## setup()函数
它是一个新的Vue组件选项，是用于在组件中使用Composition API的入口。
即它是一个组件的入口，实际上等价于 Vue2.x 版本的 beforeCreate 和 Created 这两个生命周期。
其它声明周期钩子在vue3.0都加上on
beforeCreate,Created -> setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
Updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted

在 Vue2.0 中我们可以使用 props 属性值完成父子通信，在这里我们需要定义 props 属性去定义接受值的类型，然后我们可以利用 setup 的第一个参数获取 props 使用。
setup 函数的第二个参数是一个上下文对象，这个上下文对象中包含了一些有用的属性，这些属性在 Vue2.0 中需要通过 this 才能访问到，在 vue3.0 setup() 函数中无法访问到 this
methods选项去除。
### reactive()函数
setup 函数里面的reactive()函数 它主要是处理对象类型的数据，类似于 Vue2.0 版本的 data 属性，需要注意的是加工后的对象跟原对象是不相等的，并且加工后的对象属于深度克隆的对象。
### ref()函数
声明基本类型的变量时使用，取值时加上 .value属性才能取到。
### isRef()
检测一个对象是否是ref对象，即是不是基础数据类型的。
### toRefs()
将reactive对象转换成普通对象。


