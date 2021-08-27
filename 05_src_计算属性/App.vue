<template>
  <div>
    姓:<input type="text" v-model='obj.firstName'><br>
    名:<input type="text" v-model='obj.lastName'><br>
    全称:<input type="text" v-model='obj.fullName'><br>
  </div>
</template>

<script>
import {reactive,computed} from 'vue'
export default {
  name: 'App',
  setup(){
    let obj = reactive({
      firstName:'yyy',
      lastName:'hhh'
    })
    
    // 计算属性简洁写法(只考虑读取)
    // obj.fullName = computed(()=>{
    //   return obj.firstName + '-' +obj.lastName
    // })

    // 完整写法,若计算属性后的值也会修改
    obj.fullName = computed({
      get(){
        return obj.firstName + '-' +obj.lastName
      },
      set(value){
        obj.firstName = value.split('-')[0]
        obj.lastName = value.split('-')[1]
      }
    })
    return {
      obj
    }
  }
}
</script>

<style>

</style>
