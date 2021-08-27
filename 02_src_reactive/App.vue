<template>
  <div>
    <h1 @click='sayHello()'>{{name}}{{age}}</h1><!-- vue自动.value -->
    <button @click='changeInfo()'>改变信息</button>
    <h2>职业：{{obj.job}}</h2>
    <h2>薪水：{{obj.salary}}</h2>
  </div>
</template>

<script>
import {h,ref,reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    let name =ref('aaa')
    let age = ref(18)
    // 当是复杂类型时使用ref会先包装成引用对象在通过vue内置reactive函数包装 
    // 所以可以直接通过reactive包装对象
    // reactive是vue对proxy进行了封装
    let obj = reactive({
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
      obj.job='javascript'
      obj.salary = '15k'
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
