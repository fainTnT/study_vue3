<template>
  <div>
    <h1 @click='sayHello()'>{{name}}{{age}}</h1><!-- vue自动.value -->
    <button @click='changeInfo()'>改变信息</button>
    <h2>职业：{{obj.job}}</h2>
    <h2>薪水：{{obj.salary}}</h2>
  </div>
</template>

<script>
import {h,ref} from 'vue'
export default {
  name: 'App',
  setup(){
    // 数据 通过ref函数才能实现响应式
    // 如果是基本类型 把属性包装成有get set 的引用对象（object.defineProperty）
    // 如果是复杂类型 通过vau的reactive包装成es6 proxy对象
    let name =ref('aaa')
    let age = ref(18)
    let obj = ref({
      job:'java',
      salary:'20k'
    })
    // 方法
    function sayHello(){
      alert(`我叫${name},你好`)
    }

    // 修改属性值
    function changeInfo(){
      // 修改触发set
      name.value ='bbb'
      age.value = 20
      obj.value.job='javascript'
      obj.value.salary = '15k'
    }

    // 返回一个对象 常用
    return {
      name,
      age,
      obj,
      sayHello,
      changeInfo
    }

    // 返回一个函数 渲染函数  
    // return ()=>{return h('h1','hello')} // 整个组件渲染成这个
  }
}
</script>

<style>

</style>
