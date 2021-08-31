<template>
  <div class="son">
    <h1>孙组件:{{obj.name}}</h1>
  </div>
</template>

<script>
import {inject} from 'vue';
export default {
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
.son {
  width:100%;
  background-color: gray;
  padding:10px;
}
</style>