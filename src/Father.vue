<template>
  <div class="father">
    <h1>子组件</h1>
    <Son></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
components:{
    Son
  },
  setup(){
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