<template>
  <div>
    <h4>源对象:{{ obj }}</h4>
    <h2>职业：{{ job }}</h2>
    <h2>薪水：{{ salary }}k</h2>
    <button @click="salary++">改变薪水</button>
    <h2>obj.a.b：{{ a.b }}</h2>
    <button @click="a.b++">改变obj.a.b</button><br>
    <button @click='toRawClick()'>转换成一个普通对象</button><br>
    <h2>car：{{ obj.car }}</h2>
    <button @click='addClick()'>添加一条非响应式的属性</button><br>
    <button @click='obj.car.price++'>+价格</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs,toRaw,markRaw} from "vue";
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

    //toRaw 将一个由reactive生成的响应式对象转换成一个普通对象
    function toRawClick(){
      let p = toRaw(obj)
      p.c = 999
      // 也会改变源对象,但是不是响应式的
      console.log(p,obj)
    }

    // markRaw标记一个对象 让他成为非响应式的对象
    // 当属性层级很深 而且 属性不需要响应式 则使用markRaw 这样可以提升性能(vue不用去对这些属性添加响应式)
    function addClick(){
      let car ={name:'benz',price:'22'}
      obj.car = markRaw(car)
    }

    return {
      obj,
      ...toRefs(obj),
      toRawClick,
      addClick
    };
  },
};
</script>

<style>
</style>
