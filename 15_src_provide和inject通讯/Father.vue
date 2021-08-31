<template>
  <div class="father">
    <h1>子组件:{{obj.name}}</h1>
    <Son></Son>
  </div>
</template>

<script>
import {inject} from 'vue';
import Son from './Son.vue'
export default {
components:{
    Son
  },
  setup(){
    // 后代组件接收数据
    const obj = inject('app')
    return {
      obj
    }
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