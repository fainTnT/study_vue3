<template>
  <div class='app'>
    <h1>父组件</h1>
    <!-- 2.使用Suspense(悬念的)包裹组件,default是需要展示的组件,fallback是组件没展示出来所显示的组件 -->
    <Suspense>
      <template v-slot:default>
        <Father></Father> 
      </template>
      <template v-slot:fallback>
        <h1>loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入
// import Father from './Father.vue'

// 1.异步引入
import {defineAsyncComponent} from 'vue'
const Father = defineAsyncComponent(()=>import('./Father.vue'))
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
