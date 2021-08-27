<template>
  <div>
    <h4>源对象:{{obj}}</h4>
    <button @click='changeInfo()'>改变信息</button>
    <h2>职业：{{job}}</h2>
    <h2>薪水：{{salary}}k</h2>
    <button @click='salary++'>改变薪水</button>
    <h2>obj.a.b：{{a.b}}</h2>
    <button @click='a.b++'>改变obj.a.b</button>
    <h2>obj2：{{obj2}}</h2>
    <button @click='obj2={x:2}'>改变obj2</button>
  </div>
</template>

<script>
import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from 'vue'
export default {
  name: 'App',
  setup(){
    // let obj = reactive({
    //   job:'java',
    //   salary:20,
    //   a:{
    //     b:1
    //   }
    // })
    
    // shallowReactive只响应式改变对象第一次数据
    let obj = shallowReactive({
      job:'java',
      salary:20,
      a:{
        b:1
      }
    })
   
    function changeInfo(){
      obj.job='javascript'
      obj.salary = 15
    }

    // shallowRef:当数据是一个对象 且对象的属性不会发生改变 ,只能通过替换对象来响应式改变
    let obj2 = shallowRef({
      x:1
    })
    
    
    return {
      obj,
      obj2,
      ...toRefs(obj),
      changeInfo
    }

  }
}
</script>

<style>

</style>
