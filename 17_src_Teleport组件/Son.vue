<template>
  <div class="son">
    <h1>孙组件</h1>
    <button @click='isShow=true'>弹窗</button>
    <!-- 将DOM传送到其他层级下 -->
    <teleport to='body'>
      <div class="mask" v-if='isShow'>
        <div class="toast">
          <h1>弹窗标题</h1>
          <button @click='isShow = false'>关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  setup(){
    let isShow = ref(false)
    return {
      isShow
    }
  }
}
</script>

<style>
body{
  width:100%;
  height:100%;
}
.son {
  width:100%;
  background-color: gray;
  padding:10px;
}
.mask{
  position: fixed;
  top:0;
  left:0;
  background-color: rgba(0,0,0,.5);
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toast {
  width:400px;
  height:300px;
  background-color: skyblue;
  text-align: center;
}
</style>