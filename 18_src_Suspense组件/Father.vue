<template>
  <div class="father">
    <h1>子组件:{{sum}}</h1>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    let sum = ref(0)
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        resolve({
          sum
        })
      },2000)
    })
  }
}
</script>

<style>
.father {
  width:100%;
  background-color: pink;
  padding:10px;
}
</style>