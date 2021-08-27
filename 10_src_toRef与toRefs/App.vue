<template>
  <div>
    <h4>源对象:{{obj}}</h4>
    <button @click='changeInfo()'>改变信息</button>
    <h2>职业：{{job}}</h2>
    <h2>薪水：{{salary}}k</h2>
    <button @click='salary++'>改变薪水</button>
  </div>
</template>

<script>
import {ref,reactive,toRef,toRefs} from 'vue'
export default {
  name: 'App',
  setup(){
    let obj = reactive({
      job:'java',
      salary:20
    })
    function changeInfo(){
      obj.job='javascript'
      obj.salary = 15
    }
    // 错误写法 
    // return {
    //   obj,
    //   job:ref(obj.job),
    //   salary:ref(obj.salary),
    //   changeInfo
    // }

    // toRef 这种写法可以在模板中省去对象名
    // return {
    //   obj,
    //   job:toRef(obj,'job'),
    //   salary:toRef(obj,'salary'),
    //   changeInfo
    // }

    // toRefs 这种写法把对象的全部属性toRef
    return {
      obj,
      ...toRefs(obj),
      changeInfo
    }

  }
}
</script>

<style>

</style>
