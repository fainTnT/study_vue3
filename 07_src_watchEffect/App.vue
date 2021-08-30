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
import {ref,reactive,watchEffect} from 'vue'
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

    // 只要函数里出现的数据一旦发生改变就调用回调
    watchEffect(()=>{
      const x = a.value;
      const y = obj.a.b
      console.log('发生改变')
    })

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
