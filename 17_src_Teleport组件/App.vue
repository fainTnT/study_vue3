<template>
  <div class='app'>
    <h1>父组件</h1>
    <Father></Father>
  </div>
</template>

<script>
import Father from './Father.vue'
export default {
  name: "App",
  components:{
    Father
  },
  setup() {
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.app {
  width:100%;
  padding:10px;
  background-color: skyblue;
}
</style>
