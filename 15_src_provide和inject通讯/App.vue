<template>
  <div class='app'>
    <h1>父组件:{{obj.name}}</h1>
    <Father></Father>
  </div>
</template>

<script>
import {reactive,provide} from "vue";
import Father from './Father.vue'
export default {
  name: "App",
  components:{
    Father
  },
  setup() {
    let obj = reactive({
      name:'App'
    })
    // 提供数据 进行后代组件的传递
    provide('app',obj)
    return {
      obj
    }
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
