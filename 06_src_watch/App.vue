<template>
  <div>
    姓:<input type="text" v-model='obj.firstName'><br>
    名:<input type="text" v-model='obj.lastName'><br>
    obj.a.b:<input type="text" v-model='obj.a.b'><br>
    A:<input type="text" v-model='a'><br>
    B:<input type="text" v-model='b'><br>
  </div>
</template>

<script>
import {ref,reactive,watch} from 'vue'
export default {
  name: 'App',
  setup(){
    let obj = reactive({
      firstName:'yyy',
      lastName:'hhh',
      a:{
        b:1
      }
    })
    let a = ref(1);
    let b = ref(2);
    // 1.监视某个ref定义的响应式数据
    // 基本类型时,注意这里不要.value a.value相当于监视数字1 而不是这个属性
    watch(a,(newVlue,oldValue)=>{
      console.log(newVlue,oldValue)
    },{immediate:true})//immediate实时监视 上来就调用

    // 2.监视多个ref定义的响应式数据 都是数组形式
    watch([a,b],(newVlue,oldValue)=>{
      console.log(newVlue,oldValue)
    },{immediate:true})//immediate实时监视 上来就调用

    // 3.监视reactive定义的整个属性
    // (1)此处无法获取到正确的oldvalue
    // (2)强制开启的深度监视(deep手动配置无效)
    watch(obj,(newVlue,oldValue)=>{
      console.log(newVlue,oldValue)
    },{deep:false})

    // 4.监视reactive定义的某个属性
    watch(()=>obj.a.b,(newVlue,oldValue)=>{
      console.log(newVlue,oldValue)
    },{deep:true})
    
    // 5.监视reactive定义的某些属性
    watch([()=>obj.firstName,()=>obj.lastName],(newVlue,oldValue)=>{
      console.log(newVlue,oldValue)
    })

    // 6.监视reactive定义的某个属性(并且这个属性是一个对象时,此时deep属性可以正常设置)
    watch(()=>obj.a,(newVlue,oldValue)=>{
      console.log(newVlue,oldValue)
    },{deep:false})

    return {
      obj,
      a,
      b,
    }

  }
}
</script>

<style>

</style>
