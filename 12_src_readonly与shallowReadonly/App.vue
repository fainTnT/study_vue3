<template>
  <div>
    <h4>源对象:{{ obj }}</h4>
    <button @click="changeInfo()">改变信息</button>
    <h2>职业：{{ job }}</h2>
    <h2>薪水：{{ salary }}k</h2>
    <button @click="salary++">改变薪水</button>
    <h2>obj.a.b：{{ a.b }}</h2>
    <button @click="a.b++">改变obj.a.b</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from "vue";
export default {
  name: "App",
  setup() {
    let obj = reactive({
      job: "java",
      salary: 20,
      a: {
        b: 1,
      },
    });

    function changeInfo() {
      obj.job = "javascript";
      obj.salary = 15;
    }
    //readonly把数据变成只读的 不可被改变
    // obj = readonly(obj);

    //shallowReadonly 数据只有第一层不可被改变 
    obj = shallowReadonly(obj);
    return {
      obj,
      ...toRefs(obj),
      changeInfo,
    };
  },
};
</script>

<style>
</style>
